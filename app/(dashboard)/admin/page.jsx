"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db, storage } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import useMotion from "@/context/MotionContext";
import { AnimatePresence } from "framer-motion";
import { Check, Cross, Download, Upload, X } from "lucide-react";
import useAuth from "@/context/AuthContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Input } from "@/components/ui/input";
export default function Page() {
  const [users, setUsers] = useState([]);
  const [updated, setUpdated] = useState(0);

  async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.docs.map((file) => setUsers((org) => [...org, file.data()]));
  }
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    // console.log(
    //   ...users?.map(
    //     (x) => x.forms?.sort((a, b) => a.submittedOn - b.submittedOn)[0]
    //   )
    // );
    // console.log(
    //   users?.map((x) => {
    //     return x?.forms?.sort((a, b) => a.submittedOn - b.submittedOn);
    //   })[0]
    // );
  }, [users]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserForReal, setSelectedUserForReal] = useState(null);
  // console.log(users);

  return (
    <div className="flex pt-12 relative">
      <AnimatePresence>
        {selectedUser && (
          <DocumentViewer
            setUsers={setUsers}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
            setUpdated={setUpdated}
            // users={users}
            selectedUserForReal={selectedUserForReal}
          />
        )}
      </AnimatePresence>
      <div className="w-[17vw] mr-12"></div>
      <div className="w-[70vw]">
        <div className="text-3xl font-semibold">Document List</div>
        <div className="w-full pt-12">
          <Table className="w-full">
            <TableCaption>List of documents</TableCaption>
            <TableHeader>
              <TableRow>
                {/* <TableHead className="w-[100px]">ID</TableHead> */}
                <TableHead>Applicant Name</TableHead>
                <TableHead>Country</TableHead>
                <TableHead className="text-left">Submission Date</TableHead>
                <TableHead className="text-left">Reason</TableHead>
                <TableHead className="text-left">Action</TableHead>
                <TableHead className="text-left">Status</TableHead>
                <TableHead className="text-left"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users
                ?.filter((a) => a.email !== "admin@scout.com")
                ?.filter((a) => a.forms.length)
                ?.map((x) => {
                  console.log(x);
                  const latest_file = x?.forms?.sort(
                    (a, b) => b.submittedOn - a.submittedOn
                  )[0];
                  return (
                    <TableRow key={latest_file?.submittedOn}>
                      <TableCell className="font-medium">
                        {latest_file?.firstName} {latest_file?.lastName}
                      </TableCell>
                      <TableCell className="font-medium divide-x-[1px] divide-gray-400 flex  capitalize">
                        {latest_file?.country?.countryName}
                      </TableCell>
                      <TableCell className="font-medium text-left">
                        {new Date(latest_file.submittedOn)?.getDate()} -{" "}
                        {new Date(latest_file.submittedOn)?.getMonth()} -{" "}
                        {new Date(latest_file.submittedOn)?.getFullYear()}
                      </TableCell>
                      <TableCell className="font-medium text-left">
                        {latest_file.reason}
                      </TableCell>
                      <TableCell className="font-medium text-left">
                        <Button
                          onClick={() => {
                            setSelectedUser(latest_file);
                            setSelectedUserForReal(x);
                          }}
                          variant="outline"
                        >
                          View
                        </Button>
                      </TableCell>
                      <TableCell className="font-medium text-left">
                        {latest_file.status === "P" ? (
                          <div className="p-[3px] font-semibold rounded-md bg-yellow-100 text-yellow-900 text-center">
                            Pending
                          </div>
                        ) : latest_file.status === "A" ? (
                          <div className="p-[3px] font-semibold rounded-md bg-green-100 text-green-900 text-center">
                            Accepted
                          </div>
                        ) : latest_file.status === "R" ? (
                          <div className="p-[3px] font-semibold rounded-md bg-red-100 text-red-900 text-center">
                            Rejected
                          </div>
                        ) : (
                          <div></div>
                        )}
                        {/* <Button variant="outline">View</Button> */}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
    // <></>
  );
}

function DocumentViewer({
  selectedUser,
  setSelectedUser,
  setUsers,
  setUpdated,
  selectedUserForReal,
}) {
  const { M } = useMotion();
  const { uploadToDB } = useAuth();

  const [fileViewer, setFileViewer] = useState(false);
  const [localFileLink, setLocalFileLink] = useState("");
  const [reasonBox, setReasonBox] = useState(false);
  const [reason, setReason] = useState("");
  //   console.log(new Date(selectedUser?.dob?.seconds));
  return (
    <M.div
      className="rounded-2xl shadow-2xl  h-screen w-[90vw] fixed top-0 bg-zinc-100 z-[999999999] left-[5vw] p-8 flex flex-col gap-16 overflow-y-scroll pb-12"
      initial={{
        y: "100%",
      }}
      animate={{
        y: "5%",
      }}
      exit={{
        y: "100%",
      }}
      transition={{
        duration: 0.5,
        type: "spring",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="relative">
          <AnimatePresence>
            {localFileLink && (
              <M.div
                className="rounded-xl shadow-2xl  h-[80vh] w-[30vw] fixed bottom-3 bg-zinc-100 z-[999999999] right-2 p-8 flex flex-col gap-16 overflow-y-scroll pb-12"
                initial={{
                  y: "70%",
                }}
                animate={{
                  y: "-10%",
                }}
                exit={{
                  y: "70%",
                }}
              >
                <div className="flex justify-between items center gap-6">
                  <button>
                    <X
                      color="red"
                      onClick={() => {
                        setLocalFileLink("");
                      }}
                    ></X>
                  </button>
                  <Button
                    onClick={async () => {
                      await uploadToDB("users", selectedUserForReal?.id, {
                        ...selectedUserForReal,
                        forms: [
                          ...selectedUserForReal?.forms?.filter(
                            (x) => x.id !== selectedUser?.id
                          ),
                          {
                            ...selectedUser,
                            adminFile: localFileLink,
                          },
                        ],
                      });

                      setSelectedUser(null);
                      setTimeout(() => {
                        window.location.reload();
                      }, 0);
                    }}
                    className="bg-lightBlue text-white"
                  >
                    Save
                  </Button>
                </div>
                <div>
                  <div>
                    <embed
                      className="w-[24vw]  h-[50vh]"
                      src={localFileLink}
                      type=""
                    />
                  </div>
                </div>
              </M.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex text-2xl  text-lightBlue font-semibold gap-3">
          <button>Document List</button> {"<"}{" "}
          <div>
            {selectedUser?.firstName} {selectedUser?.lastName}
          </div>
        </div>
        <button>
          <X
            color="red"
            onClick={() => {
              setSelectedUser(null);
            }}
          ></X>
        </button>
      </div>
      {selectedUser?.status === "A" ? (
        <div className="flex justify-end items-center gap-3">
          {!selectedUser?.adminFile && (
            <label
              className="bg-yellow-300 text-yellow-800 font-semibold flex gap-3 p-3 rounded-lg hover:bg-transparent transition-all duration-150 cursor-pointer"
              htmlFor="filee"
            >
              <Upload></Upload> Upload Document
            </label>
          )}

          <Input
            id="filee"
            className="w-fit outline-none border-none shadow-none hidden"
            onChange={(e) => {
              if (!e.target.files[0]) return;
              // console.log(e.target.files[0]);
              async function uploadImage() {
                try {
                  const uid = crypto.randomUUID();
                  const imgRef = ref(storage, `documents/${uid}`);
                  const image = await uploadBytes(imgRef, e.target.files[0]);
                  const imgLink = await getDownloadURL(
                    ref(storage, image.metadata.fullPath)
                  );
                  if (imgLink) {
                    setFileViewer(true);
                    setLocalFileLink(imgLink);
                  }
                  console.log(imgLink);
                  // if (e.target.files) {
                  // }
                } catch (err) {
                  console.log(err);
                }
              }
              uploadImage();
            }}
            type="file"
          />
        </div>
      ) : selectedUser?.status === "R" ? (
        <div></div>
      ) : (
        <div className="flex justify-end items-center gap-3">
          <Button
            onClick={async () => {
              await uploadToDB("users", selectedUserForReal?.id, {
                ...selectedUserForReal,
                forms: [
                  ...selectedUserForReal?.forms?.filter(
                    (x) => x.id !== selectedUser?.id
                  ),
                  {
                    ...selectedUser,
                    status: "A",
                  },
                ],
              });
              setUpdated((x) => x + 1);

              setSelectedUser(null);
              setTimeout(() => {
                window.location.reload();
              }, 0);
            }}
            variant="secondary"
            className="bg-green-300 text-green-800 font-semibold flex gap-3"
          >
            <Check></Check> Approve
          </Button>
          <Button
            onClick={() => {
              setReasonBox((a) => !a);
            }}
            variant="secondary"
            className="bg-red-300 text-red-800 font-semibold flex gap-3"
          >
            <X></X> Reject
          </Button>
          {reasonBox && (
            <div className="fixed top-1/2 left-1/2 bg-white shadow-xl -translate-y-1/2 -translate-x-1/2 p-3 rounded-lg flex flex-col gap-3 justify-center items-center w-[40vw]">
              <div className="text-xl font-semibold text-center">
                Reason for rejection
              </div>
              <Input
                value={reason}
                onChange={(e) => {
                  setReason(e.target.value);
                }}
                placeholder="Please provide reason for rejection"
              ></Input>
              <Button
                disabled={!reason}
                className="bg-red-300 text-red-800 font-semibold flex gap-3 hover:bg-red-100"
                onClick={async () => {
                  await uploadToDB("users", selectedUserForReal?.id, {
                    ...selectedUserForReal,
                    forms: [
                      ...selectedUserForReal?.forms?.filter(
                        (x) => x.id !== selectedUser?.id
                      ),
                      {
                        ...selectedUser,
                        status: "R",
                      },
                    ],
                  });
                  setUpdated((x) => x + 1);

                  setSelectedUser(null);
                  setTimeout(() => {
                    window.location.reload();
                  }, 0);
                }}
              >
                Reject Application
              </Button>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">
          Information related to travel
        </div>
        <div className="flex gap-6">
          <div className="text-sm text-gray-500 py-3">Country Chosen</div>
          <div className="flex gap-4 items-center">
            <div className="bg-blue-200 text-blue-800 px-3 font-semibold rounded-full p-1 ">
              {selectedUser?.country?.countryName}
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="text-sm text-gray-500 py-3">Purpose for travel</div>
          <div>{selectedUser?.reason}</div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-1/2">
        <div className="text-lg font-semibold">Personal Details</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex gap-6 items-center">
            <div className="text-sm text-gray-500 py-3">First Name</div>
            <div>{selectedUser?.firstName}</div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="text-sm text-gray-500 py-3">Last Name</div>
            <div>{selectedUser?.lastName}</div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="text-sm text-gray-500 py-3">DOB</div>
            <div>
              {new Date(selectedUser?.dob)?.getDate()}-{" "}
              {new Date(selectedUser?.dob)?.getMonth()}-{" "}
              {new Date(selectedUser?.dob)?.getFullYear()}
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="text-sm text-gray-500 py-3">Age</div>
            <div>{selectedUser?.age}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="text-lg font-semibold">Uploaded Documents</div>
        <div>
          <Table className="w-full">
            <TableCaption>List of documents</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Document Name</TableHead>
                <TableHead className="w-1/2">File</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedUser?.documents?.map((d) => {
                return (
                  <TableRow key={d?.id}>
                    <TableCell className="font-medium">{d.type}</TableCell>
                    <TableCell className="font-medium">
                      <a target="_blank" href={d.file}>
                        <Button variant="outline" className="flex gap-3">
                          Download <Download size={15} />
                        </Button>
                      </a>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </M.div>
  );
}
