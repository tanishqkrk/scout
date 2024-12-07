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
import { Check, Cross, Download, DownloadIcon, Upload, X } from "lucide-react";
import useAuth from "@/context/AuthContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Input } from "@/components/ui/input";
export default function Page() {
  const { fetchFromDB, user, uploadToDB } = useAuth();

  const [selectedUser, setSelectedUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      async function fetchData() {
        const response = await fetchFromDB("users", user?.uid);
        setUserData(response);
      }
      fetchData();
    }
  }, [user]);

  return (
    <div className="flex">
      <AnimatePresence>
        {selectedUser && (
          <DocumentViewer
            // setUsers={setUsers}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
            // setUpdated={setUpdated}
          />
        )}
      </AnimatePresence>
      <div className="w-[17vw] mr-12"></div>
      <div className="pt-16 w-[80vw] flex flex-col gap-6 pb-12">
        <div className="text-2xl font-semibold">History</div>
        {userData ? (
          <Table className="w-full">
            <TableCaption>List of documents</TableCaption>
            <TableHeader>
              <TableRow>
                {/* <TableHead className="w-[100px]">ID</TableHead> */}

                <TableHead>Country</TableHead>
                <TableHead className="text-left">Submission Date</TableHead>
                <TableHead className="text-left">Reason</TableHead>
                <TableHead className="text-left">Action</TableHead>
                <TableHead className="text-left">Status</TableHead>
                <TableHead className="text-left"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData?.forms?.map((x, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="font-medium divide-x-[1px] divide-gray-400 flex  capitalize">
                      {x.country?.countryName}
                    </TableCell>
                    <TableCell className="font-medium text-left">
                      {new Date(x.submittedOn)?.getDate()} -{" "}
                      {new Date(x.submittedOn)?.getMonth()} -{" "}
                      {new Date(x.submittedOn)?.getFullYear()}
                    </TableCell>
                    <TableCell className="font-medium text-left">
                      {x.reason}
                    </TableCell>
                    <TableCell className="font-medium text-left">
                      <Button
                        onClick={() => {
                          setSelectedUser(x);
                        }}
                        variant="outline"
                      >
                        View
                      </Button>
                    </TableCell>
                    <TableCell className="font-medium text-left">
                      {x.status === "P" ? (
                        <div className="p-[3px] font-semibold rounded-md bg-yellow-100 text-yellow-900 text-center">
                          Pending
                        </div>
                      ) : x.status === "A" ? (
                        <div className="p-[3px] font-semibold rounded-md bg-green-100 text-green-900 text-center">
                          Accepted
                        </div>
                      ) : x.status === "R" ? (
                        <div className="p-[3px] font-semibold rounded-md bg-red-100 text-red-900 text-center">
                          Rejected
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
function DocumentViewer({
  selectedUser,
  setSelectedUser,
  setUsers,
  setUpdated,
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
        {/* <div className="flex text-2xl  text-lightBlue font-semibold gap-3">
          <button>Document List</button> {"<"}{" "}
          <div>
            {selectedUser?.firstName} {selectedUser?.lastName}
          </div>
        </div> */}
        <button>
          <X
            color="red"
            onClick={() => {
              setSelectedUser(null);
            }}
          ></X>
        </button>
        {selectedUser?.adminFile && (
          <a
            href={selectedUser?.adminFile || ""}
            target="_blank"
            className="bg-green-300 text-green-800 font-semibold flex gap-3 p-3 rounded-lg hover:bg-transparent transition-all duration-150 cursor-pointer"
            htmlFor="filee"
          >
            <DownloadIcon></DownloadIcon> Download Document
          </a>
        )}
      </div>
      <div>
        {selectedUser.status === "P" ? (
          <div className="p-[3px] font-semibold rounded-md bg-yellow-100 text-yellow-900 text-center">
            Pending
          </div>
        ) : selectedUser.status === "A" ? (
          <div className="p-[3px] font-semibold rounded-md bg-green-100 text-green-900 text-center">
            Accepted
          </div>
        ) : selectedUser.status === "R" ? (
          <div className="p-[3px] font-semibold rounded-md bg-red-100 text-red-900 text-center">
            Rejected
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">
          Information related to travel
        </div>
        <div className="flex gap-6">
          <div className="text-sm text-gray-500 py-3">Countries Chosen</div>
          <div className="flex gap-4 items-center">
            {selectedUser?.countries?.map((c, i) => (
              <div
                key={i}
                className="bg-blue-200 text-blue-800 px-3 font-semibold rounded-full p-1 "
              >
                {c.countryName}
              </div>
            ))}
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
              {new Date(selectedUser?.dob?.seconds)?.getDate()}-{" "}
              {new Date(selectedUser?.dob?.seconds)?.getMonth()}-{" "}
              {new Date(selectedUser?.dob?.seconds)?.getFullYear()}
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
              {selectedUser?.documents?.map((d, i) => {
                return (
                  <TableRow key={i}>
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
