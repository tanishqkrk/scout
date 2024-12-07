"use client";

import { auth } from "@/firebase";
import {
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from "firebase/auth";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { usePathname, useRouter } from "next/navigation";
const AuthContext = createContext();

function AuthProvider({ children }) {
  const router = useRouter();
  const url = usePathname();
  const [user, setUser] = useState(null);

  let updateUser = 0;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    // if (url.includes("signup") || url.includes("login")) {
    //   if (user) {
    //     router.push("/dashboard");
    //   }
    // }
    // console.log("%cACCOUNT TOUCHED", "color:green;font-size:35px ");
    return () => unsubscribe();
  }, [user, updateUser]);
  // console.log(user);
  async function uploadToDB(store, id, data) {
    try {
      await setDoc(doc(collection(db, store), id), data);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchFromDB(store, document) {
    const docRef = doc(db, store, document);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
    // if (userFromDB) {
    // } else {
    //   return null;
    // }
  }

  const [phoneNumberResponse, setPhoneNumberResponse] = useState();

  async function sendOTP(phone) {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
      });
      // console.log(recaptcha);
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+" + phone,
        recaptcha
      );
      // console.log(confirmation);
      // setUser(confirmation);
      setPhoneNumberResponse(confirmation);
    } catch (err) {
      console.log(err);
    }
  }

  // console.log(user);
  async function verifyOTP(otp) {
    console.log("PLEASE WORK?");
    try {
      const loggedInUser = await phoneNumberResponse.confirm(otp);
      setUser(loggedInUser?.user);
      updateUser += 1;
      setUser(loggedInUser);
      if (loggedInUser) {
        console.log("1", loggedInUser?.user);
        console.log("2", loggedInUser?.user?.uid);
        try {
          const document = await getDoc(
            doc(db, "users", loggedInUser?.user?.uid)
          );
          console.log("document fetched");
          console.log(document);
          const documentData = document.data();
          console.log("data extracted: ", documentData);
          console.log("user id: ", user?.uid);
          if (documentData) {
            console.log("WTF");
            if (documentData?.email) {
              console.log(
                "%cUser data exists",
                "color: green; font-weight: 800; font-size: 32px"
              );
              router.push("/dashboard");
            } else {
              console.log(
                "%cPhone number exists",
                "color: lightblue; font-weight: 800; font-size: 32px"
              );
              router.push("/signup");
            }
            // router.push("/dashboard");
          } else {
            console.log(
              "%cUser data does not exist",
              "color: red; font-weight: 800; font-size: 32px"
            );
            await uploadToDB("users", loggedInUser.user.uid, {
              id: loggedInUser?.user?.uid,
              phoneNumber: loggedInUser.user.reloadUserInfo.phoneNumber,
            });
            router.push("/signup");
          }
        } catch (err) {
          console.log("user fetch error");
          console.log(err);
        }
      } else {
        console.log("No user");
      }
    } catch (err) {
      console.log(err);
      console.log("UNGABUGA");
    }
  }

  async function createUser(email, password, data) {
    // const response = await createUserWithEmailAndPassword(
    //   auth,
    //   email,
    //   password
    // );
    // const new_user = {
    //   firstName: data?.firstName,
    //   lastName: data?.lastName,
    //   email: data?.email,
    //   timestamp: Date.now(),
    //   forms: [],
    // };
    // // console.log(response);
    // console.log(user, response);
    // await uploadToDB("users", response?.user?.uid, new_user);
    // console.log("%cUSER CREATED");
    // if (response) {
    // }
  }

  async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  if (AuthContext)
    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          createUser,
          login,
          fetchFromDB,
          uploadToDB,
          sendOTP,
          verifyOTP,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}

export default function useAuth() {
  return useContext(AuthContext);
}
export { AuthProvider, useAuth };
