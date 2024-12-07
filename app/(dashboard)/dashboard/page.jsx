"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  CalendarIcon,
  Check,
  Clock,
  Cross,
  Plus,
  Trash,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import useAuth from "@/context/AuthContext";
import { RotatingLines } from "react-loader-spinner";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase";
// import { useDayPicker } from "react-day-picker";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { load } from "@cashfreepayments/cashfree-js";

export default function Page() {
  const { fetchFromDB, user, uploadToDB } = useAuth();
  const [userData, setUserData] = useState(null);
  // console.log(userData);
  const [date, setDate] = useState();
  const countries = [
    {
      name: "USA",
      code: "us",
    },
    {
      name: "South Korea",
      code: "sk",
    },
    {
      name: "Japan",
      code: "jp",
    },
    {
      name: "Germany",
      code: "gr",
    },
  ];
  const [aiOrManual, setAiOrManual] = useState("AI");
  // console.log(new Date(date).getTime());
  // console.log();
  const [application, setApplication] = useState({
    id: crypto.randomUUID(),
    createdOn: Date.now(),
    firstName: "",
    lastName: "",
    country: {
      code: countries[0].code,
      countryName: countries[0].name,
    },
    reason: "Education",
    occupation: "",
    dob: Date.now(),
    age: 0,
    documents: [],
  });
  useEffect(() => {
    // code responsible to make AI default for US, and Manual for others
    if (application.country.code === "us") {
      setAiOrManual("AI");
    } else setAiOrManual("Manual");
  }, [application.country.code]);
  async function MakePayment() {
    const cashfree = await load({
      mode: process.env.NODE_ENV === "development" ? "sandbox" : "production",
    });
    const res = await fetch("/payments/initiate", {
      body: JSON.stringify({
        amount: 1,
        currency: "INR",
        name: userData?.name || "Lorem Ipsum",
        id: userData?.uid || crypto.randomUUID(),
        phone: "+919494004321", // !TANISHQ PHONE NUMBER HERE UWU :3
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const response = await res.json();
    console.log("Ur mom gay <3");
    console.log(response);
    setIsPayment(true);
    const paymentElement = document.getElementById("paymentElement");
    if (paymentElement) {
      cashfree
        .checkout({
          paymentSessionId: response.payment_session_id,
          // redirectTarget: "_top",
          redirectTarget: paymentElement,
        })
        .then((result) => {
          if (result.error) {
            // This will be true whenever user clicks on close icon inside the modal or any error happens during the payment
            console.log(
              "User has closed the popup or there is some payment error, Check for Payment Status"
            );
            console.log(result.error);
          }
          if (result.redirect) {
            // This will be true when the payment redirection page couldnt be opened in the same window
            // This is an exceptional case only when the page is opened inside an inAppBrowser
            // In this case the customer will be redirected to return url once payment is completed
            console.log("Payment will be redirected");
          }
          if (result.paymentDetails) {
            // This will be called whenever the payment is completed irrespective of transaction status
            uploadToDB("users", userData?.id, {
              ...userData,
              forms: [
                ...userData?.forms,
                {
                  ...application,
                  submittedOn: Date.now(),
                  status: "P",
                },
              ],
            });
            console.log("PAID");
            setIsPayment(false);
            setTimeout(() => {
              window.location.reload();
            }, 0);
            if (aiOrManual === "AI") {
              fetch(
                "https://oapis.getintelekt.ai/v1/api/form-fill/user/login",
                {
                  headers: {
                    "api-key": process.env.NEXT_PUBLIC_TOKEN_SITE_API_KEY,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ email: userData?.email }),
                  method: "POST",
                }
              )
                .then((res) => res.json())
                .then((res) => res.result.token)
                .then((token) => {
                  window.location.href =
                    "https://app.scout.com/#/visa-login/visa-home?token=" +
                    token;
                })
                .catch((e) => {
                  console.error(e);
                });
            }

            console.log("Payment has been completed, Check for Payment Status");
            console.log(result.paymentDetails.paymentMessage);
            // @TANISHQ UWU :3 :3 <3 <3 :)
          }
        });
    }
    // const paymentObject = new window.Razorpay({
    //   key: process.env.NEXT_PUBLIC_RZP_KEY_ID,
    //   amount: 1 * 100,
    //   currency: "INR",
    //   name: userData?.firstName + " " + userData?.lastName,
    //   description: "Transaction",
    //   order_id: orderId,
    //   notes: {
    //     address: "Scout",
    //   },
    //   theme: {
    //     color: "blue",
    //   },
    //
    //   handler: async function(response) {
    //     // alert("DONE");
    //     {
    //       /* //! 2. Gopal */
    //     }
    //     await uploadToDB("users", userData?.id, {
    //       ...userData,
    //       forms: [
    //         ...userData?.forms,
    //         {
    //           ...application,
    //           submittedOn: Date.now(),
    //           status: "P",
    //         },
    //       ],
    //     });
    //     console.log("PAID");
    //     window.location.reload();
    //   },
    // });

    // paymentObject.open();
    // paymentObject.on("payment.failed", function(response) {
    //   alert(response.error.description);
    //   setLoading(false);
    // });
  }

  const reasons = ["Education", "Job"];
  const occupations = ["Business", "Job", "Student"];

  const documentTypes = [
    "Passport Copy(ies)",
    "PAN Card / Adhar Card",
    "Air ticket",
    "Hotel Booking",
    "Financials proof (Salary slips, bank statements etc)",
    "University acceptance letters and related document for student visa",
    "Invitation Letter",
  ];

  // useEffect(() => {
  //   setApplication((x) => {
  //     return {
  //       ...x,
  //       dob: new Date(),
  //     };
  //   });
  // }, [date]);

  useEffect(() => {
    if (user) {
      async function fetchData() {
        const response = await fetchFromDB("users", user?.uid);
        setUserData(response);
        setApplication((x) => {
          return {
            ...x,
            firstName: response?.firstName,
            lastName: response?.lastName,
          };
        });
      }
      fetchData();
    }
  }, [user]);
  useEffect(() => {
    function close(e) {
      if (e.key === "Escape") setIsPayment(false);
    }
    document.addEventListener("keyup", close);
    return () => document.removeEventListener("keyup", close);
  }, []);

  // 1. Passport Copy (ies)
  // 2. PAN Card / adhar Card
  // 3. Air ticket
  // 4. Hotel Booking
  // 5. Financials proof (Salary slips, bank statements etc)
  // 6. University acceptance letters and related document for student visa
  // 7. Invitation Letter

  useEffect(() => {
    if (user?.email === "admin@scout.com") {
      window.location.href = "/admin";
    }
  }, [user]);
  // console.log(user);
  const [latest_form, set_latest_form] = useState(null);
  useEffect(() => {
    set_latest_form(
      userData?.forms?.sort((a, b) => b.submittedOn - a.submittedOn)[0]
    );
  }, [userData]);
  const [tempForm, setTempForm] = useState(false);

  const [editForm, setEditForm] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  return (
    <div className="flex">
      <div
        onClick={() => setIsPayment(false)}
        className={` ${
          isPayment
            ? "fixed top-0 left-0 bg-black/80  text-white w-screen h-screen grid place-items-center z-20"
            : "hidden -z-10"
        }`}
      >
        <div className="" id="paymentElement"></div>
      </div>
      <div className="lg:w-[20vw] mr-12"></div>
      {userData ? (
        editForm ? (
          <div className="pt-16 w-[80vw] flex flex-col gap-6 pb-12">
            <div className="text-2xl font-semibold ">Submit details</div>
            <hr />
            <div className="">
              <div className="text-lg font-semibold">
                Information related to travel
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-gray-500 py-3">Country</div>
                <div className="flex items-center gap-6">
                  <Select
                    onValueChange={(e) => {
                      set_latest_form((a) => {
                        return {
                          ...a,
                          country: {
                            code: e,
                            countryName: countries?.filter(
                              (z) => z.code === e
                            )[0].name,
                          },
                        };
                      });
                    }}
                    value={latest_form.country.code}
                  >
                    <SelectTrigger
                      // defaultValue={countries[0].code}
                      className="w-[180px]"
                    >
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent className="flex items-center gap-1">
                      {countries?.map((x) => {
                        return (
                          <SelectItem key={x.code} value={x.code}>
                            <div>{x.name}</div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  {/* <Button
          onClick={() => {
            setApplication((x) => {
              return {
                ...x,
                countries: [
                  ...x?.countries,
                  {
                    id: crypto.randomUUID(),
                    code: countries[0]?.code,
                    timestamp: Date.now(),
                    countryName: countries[0]?.name,
                  },
                ],
              };
            });
          }}
          className="text-lightBlue w-fit"
          variant="ghost"
        >
          <Plus></Plus> <div>Add country</div>
        </Button> */}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-gray-500 py-3">
                  Reason for travel
                </div>
                <div className="flex items-center gap-6">
                  <Select
                    onValueChange={(e) => {
                      set_latest_form((a) => {
                        return {
                          ...a,
                          reason: e,
                        };
                      });
                    }}
                    value={latest_form?.reason}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Reason" />
                    </SelectTrigger>
                    <SelectContent className="flex items-center gap-1">
                      {reasons?.map((x) => {
                        return (
                          <SelectItem key={x} value={x}>
                            <div>{x}</div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-10 mt-4">
              <div className="flex flex-row items-center gap-x-4">
                <input
                  disabled={application.country.code !== "us"}
                  onChange={(e) => setAiOrManual(e.target.value)}
                  type="radio"
                  name="aimanual"
                  value={"AI"}
                  checked={aiOrManual === "AI"}
                  className="disabled:opacity-50"
                />
                <label
                  title="Uses AI to extract information from your passport(US only)"
                  className={`${
                    application.country.code !== "us" && "text-gray-400"
                  }`}
                  htmlFor="aimanual"
                >
                  AI
                </label>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <input
                  onChange={(e) => setAiOrManual(e.target.value)}
                  type="radio"
                  name="aimanual"
                  value={"Manual"}
                  checked={aiOrManual === "Manual"}
                />
                <label htmlFor="aimanual">Manual</label>
              </div>
            </div>

            <hr />
            {aiOrManual === "Manual" ? (
              <>
                <div className="">
                  <div className="text-lg font-semibold">Personal details</div>
                  <div className="flex flex-col">
                    <div className="flex gap-8">
                      <div className="">
                        <div className="text-sm text-gray-500 py-3">
                          First Name
                        </div>
                        <Input
                          type="text"
                          value={latest_form?.firstName}
                          onChange={(e) => {
                            set_latest_form((x) => {
                              return {
                                ...x,
                                firstName: e.target.value.toString(),
                              };
                            });
                          }}
                          className="w-fit"
                        />
                      </div>
                      <div className="">
                        <div className="text-sm text-gray-500 py-3">
                          Last Name
                        </div>
                        <Input
                          value={latest_form?.lastName}
                          onChange={(e) => {
                            set_latest_form((x) => {
                              return {
                                ...x,
                                lastName: e.target.value.toString(),
                              };
                            });
                          }}
                          className="w-fit"
                        />
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <div className="">
                        <div className="text-sm text-gray-500 py-3">DOB</div>
                        <input
                          max={new Date().toISOString().split("T")[0]}
                          value={latest_form.dob}
                          onChange={(e) => {
                            function getAge(e) {
                              var diff = Date.now() - e;
                              return Math.floor(
                                diff / (1000 * 60 * 60 * 24 * 365.25)
                              );
                            }
                            set_latest_form((x) => {
                              return {
                                ...x,
                                dob: e.target.value,
                                age: getAge(
                                  new Date(
                                    new Date(e.target.value).getTime()
                                  ).getTime()
                                ),
                              };
                            });
                          }}
                          type="date"
                        />
                      </div>
                      <div className="">
                        <div className="text-sm text-gray-500 py-3">Age</div>
                        <div>{latest_form.age}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm text-gray-500 py-3">Occupation</div>
                    <div className="flex items-center gap-6">
                      <Select
                        onValueChange={(e) => {
                          set_latest_form((a) => {
                            return {
                              ...a,
                              occupation: e,
                            };
                          });
                        }}
                        value={latest_form?.occupation}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Reason" />
                        </SelectTrigger>
                        <SelectContent className="flex items-center gap-1">
                          {occupations?.map((x) => {
                            return (
                              <SelectItem key={x} value={x}>
                                <div>{x}</div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="text-lg font-semibold">Upload documents</div>
                  <div className="flex justify-center flex-col gap-6 divide-y-2">
                    {latest_form?.documents
                      ?.sort((a, b) => a.timestamp - b.timestamp)
                      ?.map((x) => {
                        return (
                          <div key={x?.id} className="flex items-start gap-5">
                            <Button
                              onClick={() => {
                                set_latest_form((a) => {
                                  return {
                                    ...a,
                                    documents: [
                                      ...a?.documents?.filter(
                                        (q) => q.id !== x.id
                                      ),
                                    ],
                                  };
                                });
                              }}
                              variant="destructive"
                            >
                              <Trash></Trash>
                            </Button>
                            <div className="flex flex-col items-start  gap-6 pb-8">
                              <Select
                                onValueChange={(e) => {
                                  set_latest_form((a) => {
                                    return {
                                      ...a,
                                      documents: [
                                        ...a?.documents?.filter(
                                          (q) => q.id !== x.id
                                        ),
                                        {
                                          ...x,
                                          type: e,
                                        },
                                      ],
                                    };
                                  });
                                }}
                                value={x.code}
                              >
                                <SelectTrigger className="w-[30vw]">
                                  <SelectValue placeholder="Document Type" />
                                </SelectTrigger>
                                <SelectContent className="flex items-center gap-1">
                                  {documentTypes?.map((x) => {
                                    return (
                                      <SelectItem key={x} value={x}>
                                        <div>{x}</div>
                                      </SelectItem>
                                    );
                                  })}
                                </SelectContent>
                              </Select>
                              <div className="grid w-full max-w-sm items-center gap-1.5">
                                {x.file ? (
                                  <div>
                                    <embed
                                      className="w-[70vw]  h-96"
                                      src={x.file}
                                      type=""
                                    />
                                  </div>
                                ) : (
                                  <Input
                                    className=""
                                    onChange={(e) => {
                                      if (!e.target.files[0]) return;
                                      // console.log(e.target.files[0]);
                                      async function uploadImage() {
                                        try {
                                          const uid = crypto.randomUUID();
                                          const imgRef = ref(
                                            storage,
                                            `documents/${uid}`
                                          );
                                          const image = await uploadBytes(
                                            imgRef,
                                            e.target.files[0]
                                          );
                                          const imgLink = await getDownloadURL(
                                            ref(
                                              storage,
                                              image.metadata.fullPath
                                            )
                                          );
                                          set_latest_form((a) => {
                                            return {
                                              ...a,
                                              documents: [
                                                ...a?.documents?.filter(
                                                  (q) => q.id !== x.id
                                                ),
                                                {
                                                  ...x,
                                                  file: imgLink,
                                                },
                                              ],
                                            };
                                          });
                                          console.log(imgLink);
                                          // if (e.target.files) {
                                          // }
                                        } catch (err) {
                                          console.log(err);
                                        }
                                      }
                                      uploadImage();
                                    }}
                                    id={x.id}
                                    type="file"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    <Button
                      onClick={() => {
                        set_latest_form((x) => {
                          return {
                            ...x,
                            documents: [
                              ...x?.documents,
                              {
                                id: crypto.randomUUID(),
                                type: documentTypes[0],
                                // file: "",
                                timestamp: Date.now(),
                              },
                            ],
                          };
                        });
                      }}
                      className="text-lightBlue w-fit"
                      variant="ghost"
                    >
                      <Plus></Plus> <div>Add document</div>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <p>You will be asked for your details after payment</p>
            )}

            {/* <script async src="https://js.stripe.com/v3/buy-button.js"></script> */}

            {/* <stripe-buy-button
buy-button-id="buy_btn_1PKlYHSFEOE5XbR7pzjbEsa7"
publishable-key="pk_test_51MMEjMSFEOE5XbR764IIA6ajGaos3dI6yoRdupN2PthHYUpVD0aUOPxLfbmAOU6iV0fJKmyqxQ37HpmmRZw4XNGL003G5tkF4k"
></stripe-buy-button> */}

            <Button
              disabled={
                // application?.countries.length <= 0 ||
                latest_form.documents.length <= 0 ||
                !latest_form?.age ||
                !latest_form?.documents?.filter((x) => !x.file).length <= 0
              }
              onClick={async () => {
                await uploadToDB("users", userData?.id, {
                  ...userData,
                  forms: [
                    ...userData?.forms?.filter((x) => x.id !== latest_form?.id),
                    {
                      ...latest_form,
                      submittedOn: Date.now(),
                      status: "P",
                    },
                  ],
                });
                window.location.reload();
                // await MakePayment();
                // console.log(application);
                // await uploadToDB("users", userData?.id, {
                //   id: userData?.id,
                //   submittedOn: Date.now(),
                //   status: "P",
                //   ...application,
                // });
                // window.location.reload();
                // window.location.href = "admin";
                // window.location.href =
                //   "https://buy.stripe.com/test_eVa7uW0Jz0qP5JS4gg";
              }}
              className="bg-themeBlue w-[40vw] py-6"
              type="primary"
            >
              Update form
            </Button>
            {/* <a  href="https://buy.stripe.com/test_eVa7uW0Jz0qP5JS4gg">
</a> */}
          </div>
        ) : (
          <>
            {tempForm ? (
              <div className="pt-16 w-[80vw] flex flex-col gap-6 pb-12">
                <div className="text-2xl font-semibold ">Submit details</div>
                <hr />
                <div className="">
                  <div className="text-lg font-semibold">
                    Information related to travel
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm text-gray-500 py-3">Country</div>
                    <div className="flex items-center gap-6">
                      <Select
                        onValueChange={(e) => {
                          setApplication((a) => {
                            return {
                              ...a,
                              country: {
                                code: e,
                                countryName: countries?.filter(
                                  (z) => z.code === e
                                )[0].name,
                              },
                            };
                          });
                        }}
                        value={application.country.code}
                      >
                        <SelectTrigger
                          // defaultValue={countries[0].code}
                          className="w-[180px]"
                        >
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent className="flex items-center gap-1">
                          {countries?.map((x) => {
                            return (
                              <SelectItem key={x.code} value={x.code}>
                                <div>{x.name}</div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      {/* <Button
                onClick={() => {
                  setApplication((x) => {
                    return {
                      ...x,
                      countries: [
                        ...x?.countries,
                        {
                          id: crypto.randomUUID(),
                          code: countries[0]?.code,
                          timestamp: Date.now(),
                          countryName: countries[0]?.name,
                        },
                      ],
                    };
                  });
                }}
                className="text-lightBlue w-fit"
                variant="ghost"
              >
                <Plus></Plus> <div>Add country</div>
              </Button> */}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm text-gray-500 py-3">
                      Reason for travel
                    </div>
                    <div className="flex items-center gap-6">
                      <Select
                        onValueChange={(e) => {
                          setApplication((a) => {
                            return {
                              ...a,
                              reason: e,
                            };
                          });
                        }}
                        value={application?.reason}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Reason" />
                        </SelectTrigger>
                        <SelectContent className="flex items-center gap-1">
                          {reasons?.map((x, i) => {
                            return (
                              <SelectItem key={i} value={x}>
                                <div>{x}</div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-x-10 mt-4">
                  <div className="flex flex-row items-center gap-x-4">
                    <input
                      disabled={application.country.code !== "us"}
                      onChange={(e) => setAiOrManual(e.target.value)}
                      type="radio"
                      name="aimanual"
                      value={"AI"}
                      checked={aiOrManual === "AI"}
                      className="disabled:opacity-50"
                    />
                    <label
                      title="Uses AI to extract information from your passport(US only)"
                      className={`${
                        application.country.code !== "us" && "text-gray-400"
                      }`}
                      htmlFor="aimanual"
                    >
                      AI
                    </label>
                  </div>
                  <div className="flex flex-row items-center gap-x-4">
                    <input
                      onChange={(e) => setAiOrManual(e.target.value)}
                      type="radio"
                      name="aimanual"
                      value={"Manual"}
                      checked={aiOrManual === "Manual"}
                    />
                    <label htmlFor="aimanual">Manual</label>
                  </div>
                </div>

                <hr />
                {aiOrManual === "Manual" ? (
                  <>
                    <div className="">
                      <div className="text-lg font-semibold">
                        Personal details
                      </div>
                      <div className="flex flex-col">
                        <div className="flex gap-8">
                          <div className="">
                            <div className="text-sm text-gray-500 py-3">
                              First Name
                            </div>
                            <Input
                              type="text"
                              value={application?.firstName}
                              onChange={(e) => {
                                setApplication((x) => {
                                  return {
                                    ...x,
                                    firstName: e.target.value.toString(),
                                  };
                                });
                              }}
                              className="w-fit"
                            />
                          </div>
                          <div className="">
                            <div className="text-sm text-gray-500 py-3">
                              Last Name
                            </div>
                            <Input
                              value={application?.lastName}
                              onChange={(e) => {
                                setApplication((x) => {
                                  return {
                                    ...x,
                                    lastName: e.target.value.toString(),
                                  };
                                });
                              }}
                              className="w-fit"
                            />
                          </div>
                        </div>
                        <div className="flex gap-8">
                          <div className="">
                            <div className="text-sm text-gray-500 py-3">
                              DOB
                            </div>
                            <input
                              value={date}
                              onChange={(e) => {
                                function getAge(e) {
                                  var diff = Date.now() - date;
                                  return Math.floor(
                                    diff / (1000 * 60 * 60 * 24 * 365.25)
                                  );
                                }

                                setApplication((x) => {
                                  return {
                                    ...x,
                                    dob: e.target.value,
                                    age: getAge(
                                      new Date(e.target.value).getTime()
                                    ),
                                  };
                                });
                              }}
                              type="date"
                            />
                          </div>
                          <div className="">
                            <div className="text-sm text-gray-500 py-3">
                              Age
                            </div>
                            <div>{application.age}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-sm text-gray-500 py-3">
                          Occupation
                        </div>
                        <div className="flex items-center gap-6">
                          <Select
                            onValueChange={(e) => {
                              setApplication((a) => {
                                return {
                                  ...a,
                                  occupation: e,
                                };
                              });
                            }}
                            value={application?.occupation}
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Reason" />
                            </SelectTrigger>
                            <SelectContent className="flex items-center gap-1">
                              {occupations?.map((x, i) => {
                                return (
                                  <SelectItem key={i} value={x}>
                                    <div>{x}</div>
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="text-lg font-semibold">
                        Upload documents
                      </div>
                      <div className="flex justify-center flex-col gap-6 divide-y-2">
                        {application?.documents
                          ?.sort((a, b) => a.timestamp - b.timestamp)
                          ?.map((x, i) => {
                            return (
                              <div
                                key={i}
                                className="flex flex-col items-start  gap-6 py-8"
                              >
                                <Select
                                  onValueChange={(e) => {
                                    setApplication((a) => {
                                      return {
                                        ...a,
                                        documents: [
                                          ...a?.documents?.filter(
                                            (q) => q.id !== x.id
                                          ),
                                          {
                                            ...x,
                                            type: e,
                                          },
                                        ],
                                      };
                                    });
                                  }}
                                  value={x.code}
                                >
                                  <SelectTrigger className="w-[30vw]">
                                    <SelectValue placeholder="Document Type" />
                                  </SelectTrigger>
                                  <SelectContent className="flex items-center gap-1">
                                    {documentTypes?.map((x, i) => {
                                      return (
                                        <SelectItem key={i} value={x}>
                                          <div>{x}</div>
                                        </SelectItem>
                                      );
                                    })}
                                  </SelectContent>
                                </Select>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                  {x.file ? (
                                    <div>
                                      <embed
                                        className="w-[70vw]  h-96"
                                        src={x.file}
                                        type=""
                                      />
                                    </div>
                                  ) : (
                                    <Input
                                      className=""
                                      onChange={(e) => {
                                        if (!e.target.files[0]) return;
                                        // console.log(e.target.files[0]);
                                        async function uploadImage() {
                                          try {
                                            const uid = crypto.randomUUID();
                                            const imgRef = ref(
                                              storage,
                                              `documents/${uid}`
                                            );
                                            const image = await uploadBytes(
                                              imgRef,
                                              e.target.files[0]
                                            );
                                            const imgLink =
                                              await getDownloadURL(
                                                ref(
                                                  storage,
                                                  image.metadata.fullPath
                                                )
                                              );
                                            setApplication((a) => {
                                              return {
                                                ...a,
                                                documents: [
                                                  ...a?.documents?.filter(
                                                    (q) => q.id !== x.id
                                                  ),
                                                  {
                                                    ...x,
                                                    file: imgLink,
                                                  },
                                                ],
                                              };
                                            });
                                            console.log(imgLink);
                                            // if (e.target.files) {
                                            // }
                                          } catch (err) {
                                            console.log(err);
                                          }
                                        }
                                        uploadImage();
                                      }}
                                      id={x.id}
                                      type="file"
                                    />
                                  )}
                                </div>
                              </div>
                            );
                          })}

                        <Button
                          onClick={() => {
                            setApplication((x) => {
                              return {
                                ...x,
                                documents: [
                                  ...x?.documents,
                                  {
                                    id: crypto.randomUUID(),
                                    type: documentTypes[0],
                                    // file: "",
                                    timestamp: Date.now(),
                                  },
                                ],
                              };
                            });
                          }}
                          className="text-lightBlue w-fit"
                          variant="ghost"
                        >
                          <Plus></Plus> <div>Add document</div>
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <p>You will be asked for your details after payment.</p>
                )}
                {/* //! 1. Gopal */}
                <Button
                  disabled={
                    aiOrManual === "Manual"
                      ? application.documents.length <= 0 ||
                        !application?.age ||
                        !application?.documents?.filter((x) => !x.file)
                          .length <= 0
                      : false
                  }
                  onClick={async () => {
                    await MakePayment();
                  }}
                  className="bg-themeBlue w-[40vw] py-6"
                  type="primary"
                >
                  Proceed to payment
                </Button>
                {/* <a  href="https://buy.stripe.com/test_eVa7uW0Jz0qP5JS4gg">
</a> */}
              </div>
            ) : (
              <>
                {latest_form?.paid ? (
                  <div>You&apos;ve paid</div>
                ) : (
                  <>
                    {latest_form?.status === "A" ? (
                      <div className="pt-16 w-[80vw] h-[70vh] flex flex-col gap-6 justify-center items-center pb-12">
                        <div className="border-2 border-green-400 rounded-full p-3">
                          <Check color="limegreen" size={40}></Check>
                        </div>
                        <div className="font-semibold text-xl">
                          Accepted for {userData?.country}
                        </div>
                        <div className="text-sm">
                          Congratulations! Your visa application for{" "}
                          {userData?.country} has been accepted. You are now
                          approved to travel to {userData?.country}.
                        </div>
                        <a
                          target="_blank"
                          href={
                            userData?.forms?.sort(
                              (a, b) => a.timestamp - b.timestamp
                            )[0]?.adminFile || ""
                          }
                        >
                          <Button className="w-[40vw] bg-themeBlue h-16">
                            Download Visa Application Form
                          </Button>
                        </a>
                        <button
                          onClick={() => setTempForm(true)}
                          href=""
                          className="text-lightBlue underline"
                        >
                          Create new application
                        </button>
                      </div>
                    ) : latest_form?.status === "R" ? (
                      <div className="pt-16 w-[80vw] h-[70vh] flex flex-col gap-6 justify-center items-center pb-12">
                        <div className="border-2 border-red-400 rounded-full p-3">
                          <AlertCircle color="red" size={40}></AlertCircle>
                        </div>
                        <div className="font-semibold text-xl">
                          Application Review Feedback
                        </div>
                        <div className="text-sm">
                          Your application has been rejected due to{" "}
                          {userData?.rejectionReason}
                        </div>
                        <Button
                          onClick={() => {
                            setEditForm(true);
                          }}
                          className="w-[30vw] bg-themeBlue h-16"
                        >
                          Edit your application
                        </Button>
                        <Button
                          onClick={() => setTempForm(true)}
                          variant="secondary"
                          className="w-fit  h-10"
                        >
                          Submit new form
                        </Button>
                        {/* <a href="" className="text-lightBlue underline">
                Create new application
              </a> */}
                      </div>
                    ) : latest_form?.status === "P" ? (
                      <div className="pt-16 w-[80vw] h-[70vh] flex flex-col gap-6 justify-center items-center pb-12">
                        <div className="border-2 border-yellow-300 rounded-full p-3">
                          <Clock color="yellow" size={40}></Clock>
                        </div>
                        <div className="font-semibold text-xl">
                          Application under review{" "}
                          {latest_form?.country?.countryName}
                        </div>
                        <div className="text-sm">
                          Your visa application for{" "}
                          {latest_form?.country?.countryName} is under review.
                        </div>
                        {/* <a
                        target="_blank"
                        href={
                          userData?.forms?.sort(
                            (a, b) => a.timestamp - b.timestamp
                          )[0]?.adminFile || ""
                        }
                      >
                        <Button className="w-[40vw] bg-themeBlue h-16">
                          Download Visa Application Form
                        </Button>
                      </a> */}
                        {/* <button
                        onClick={() => setTempForm(true)}
                        href=""
                        className="text-lightBlue underline"
                      >
                        Create new application
                      </button> */}
                      </div>
                    ) : (
                      <div className="pt-16 w-[80vw] flex flex-col gap-6 pb-12">
                        <div className="text-2xl font-semibold ">
                          Submit details
                        </div>
                        <hr />
                        <div className="">
                          <div className="text-lg font-semibold">
                            Information related to travel
                          </div>
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-500 py-3">
                              Country
                            </div>
                            <div className="flex items-center gap-6">
                              <Select
                                onValueChange={(e) => {
                                  setApplication((a) => {
                                    return {
                                      ...a,
                                      country: {
                                        code: e,
                                        countryName: countries?.filter(
                                          (z) => z.code === e
                                        )[0].name,
                                      },
                                    };
                                  });
                                }}
                                value={application.country.code}
                              >
                                <SelectTrigger
                                  // defaultValue={countries[0].code}
                                  className="w-[180px]"
                                >
                                  <SelectValue placeholder="Country" />
                                </SelectTrigger>
                                <SelectContent className="flex items-center gap-1">
                                  {countries?.map((x, i) => {
                                    return (
                                      <SelectItem key={i} value={x.code}>
                                        <div>{x.name}</div>
                                      </SelectItem>
                                    );
                                  })}
                                </SelectContent>
                              </Select>
                              {/* <Button
                          onClick={() => {
                            setApplication((x) => {
                              return {
                                ...x,
                                countries: [
                                  ...x?.countries,
                                  {
                                    id: crypto.randomUUID(),
                                    code: countries[0]?.code,
                                    timestamp: Date.now(),
                                    countryName: countries[0]?.name,
                                  },
                                ],
                              };
                            });
                          }}
                          className="text-lightBlue w-fit"
                          variant="ghost"
                        >
                          <Plus></Plus> <div>Add country</div>
                        </Button> */}
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-500 py-3">
                              Reason for travel
                            </div>
                            <div className="flex items-center gap-6">
                              <Select
                                onValueChange={(e) => {
                                  setApplication((a) => {
                                    return {
                                      ...a,
                                      reason: e,
                                    };
                                  });
                                }}
                                value={application?.reason}
                              >
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Reason" />
                                </SelectTrigger>
                                <SelectContent className="flex items-center gap-1">
                                  {reasons?.map((x, i) => {
                                    return (
                                      <SelectItem key={i} value={x}>
                                        <div>{x}</div>
                                      </SelectItem>
                                    );
                                  })}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="flex flex-row gap-x-10 mt-4">
                            <div className="flex flex-row items-center gap-x-4">
                              <input
                                disabled={application.country.code !== "us"}
                                onChange={(e) => setAiOrManual(e.target.value)}
                                type="radio"
                                name="aimanual"
                                value={"AI"}
                                checked={aiOrManual === "AI"}
                                className="disabled:opacity-50"
                              />
                              <label
                                title="Uses AI to extract information from your passport(US only)"
                                className={`${
                                  application.country.code !== "us" &&
                                  "text-gray-400"
                                }`}
                                htmlFor="aimanual"
                              >
                                AI
                              </label>
                            </div>
                            <div className="flex flex-row items-center gap-x-4">
                              <input
                                onChange={(e) => setAiOrManual(e.target.value)}
                                type="radio"
                                name="aimanual"
                                value={"Manual"}
                                checked={aiOrManual === "Manual"}
                              />
                              <label htmlFor="aimanual">Manual</label>
                            </div>
                          </div>
                        </div>
                        <hr />
                        {aiOrManual === "Manual" ? (
                          <>
                            <div className="">
                              <div className="text-lg font-semibold">
                                Personal details
                              </div>
                              <div className="flex flex-col">
                                <div className="flex gap-8">
                                  <div className="">
                                    <div className="text-sm text-gray-500 py-3">
                                      First Name
                                    </div>
                                    <Input
                                      type="text"
                                      value={application?.firstName}
                                      onChange={(e) => {
                                        setApplication((x) => {
                                          return {
                                            ...x,
                                            firstName:
                                              e.target.value.toString(),
                                          };
                                        });
                                      }}
                                      className="w-fit"
                                    />
                                  </div>
                                  <div className="">
                                    <div className="text-sm text-gray-500 py-3">
                                      Last Name
                                    </div>
                                    <Input
                                      value={application?.lastName}
                                      onChange={(e) => {
                                        setApplication((x) => {
                                          return {
                                            ...x,
                                            lastName: e.target.value.toString(),
                                          };
                                        });
                                      }}
                                      className="w-fit"
                                    />
                                  </div>
                                </div>
                                <div className="flex gap-8">
                                  <div className="">
                                    <div className="text-sm text-gray-500 py-3">
                                      DOB
                                    </div>

                                    <input
                                      max={
                                        new Date().toISOString().split("T")[0]
                                      }
                                      value={date}
                                      onChange={(e) => {
                                        function getAge(e) {
                                          var diff = Date.now() - e;
                                          return Math.floor(
                                            diff /
                                              (1000 * 60 * 60 * 24 * 365.25)
                                          );
                                        }
                                        setApplication((x) => {
                                          return {
                                            ...x,
                                            dob: e.target.value,
                                            age: getAge(
                                              new Date(
                                                new Date(
                                                  e.target.value
                                                ).getTime()
                                              ).getTime()
                                            ),
                                          };
                                        });
                                      }}
                                      type="date"
                                    />
                                  </div>
                                  <div className="">
                                    <div className="text-sm text-gray-500 py-3">
                                      Age
                                    </div>
                                    <div>{application.age}</div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <div className="text-sm text-gray-500 py-3">
                                  Occupation
                                </div>
                                <div className="flex items-center gap-6">
                                  <Select
                                    onValueChange={(e) => {
                                      setApplication((a) => {
                                        return {
                                          ...a,
                                          occupation: e,
                                        };
                                      });
                                    }}
                                    value={application?.occupation}
                                  >
                                    <SelectTrigger className="w-[180px]">
                                      <SelectValue placeholder="Reason" />
                                    </SelectTrigger>
                                    <SelectContent className="flex items-center gap-1">
                                      {occupations?.map((x, i) => {
                                        return (
                                          <SelectItem key={i} value={x}>
                                            <div>{x}</div>
                                          </SelectItem>
                                        );
                                      })}
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-6">
                              <div className="text-lg font-semibold">
                                Upload documents
                              </div>
                              <div className="flex justify-center flex-col gap-6 divide-y-2">
                                {application?.documents
                                  ?.sort((a, b) => a.timestamp - b.timestamp)
                                  ?.map((x, i) => {
                                    return (
                                      <div
                                        key={i}
                                        className="flex flex-col items-start  gap-6 py-8"
                                      >
                                        <Select
                                          onValueChange={(e) => {
                                            setApplication((a) => {
                                              return {
                                                ...a,
                                                documents: [
                                                  ...a?.documents?.filter(
                                                    (q) => q.id !== x.id
                                                  ),
                                                  {
                                                    ...x,
                                                    type: e,
                                                  },
                                                ],
                                              };
                                            });
                                          }}
                                          value={x.code}
                                        >
                                          <SelectTrigger className="w-[30vw]">
                                            <SelectValue placeholder="Document Type" />
                                          </SelectTrigger>
                                          <SelectContent className="flex items-center gap-1">
                                            {documentTypes?.map((x, i) => {
                                              return (
                                                <SelectItem key={i} value={x}>
                                                  <div>{x}</div>
                                                </SelectItem>
                                              );
                                            })}
                                          </SelectContent>
                                        </Select>
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                          {x.file ? (
                                            <div>
                                              <embed
                                                className="w-[70vw]  h-96"
                                                src={x.file}
                                                type=""
                                              />
                                            </div>
                                          ) : (
                                            <Input
                                              className=""
                                              onChange={(e) => {
                                                if (!e.target.files[0]) return;
                                                // console.log(e.target.files[0]);
                                                async function uploadImage() {
                                                  try {
                                                    const uid =
                                                      crypto.randomUUID();
                                                    const imgRef = ref(
                                                      storage,
                                                      `documents/${uid}`
                                                    );
                                                    const image =
                                                      await uploadBytes(
                                                        imgRef,
                                                        e.target.files[0]
                                                      );
                                                    const imgLink =
                                                      await getDownloadURL(
                                                        ref(
                                                          storage,
                                                          image.metadata
                                                            .fullPath
                                                        )
                                                      );
                                                    setApplication((a) => {
                                                      return {
                                                        ...a,
                                                        documents: [
                                                          ...a?.documents?.filter(
                                                            (q) => q.id !== x.id
                                                          ),
                                                          {
                                                            ...x,
                                                            file: imgLink,
                                                          },
                                                        ],
                                                      };
                                                    });
                                                    console.log(imgLink);
                                                    // if (e.target.files) {
                                                    // }
                                                  } catch (err) {
                                                    console.log(err);
                                                  }
                                                }
                                                uploadImage();
                                              }}
                                              id={x.id}
                                              type="file"
                                            />
                                          )}
                                        </div>
                                      </div>
                                    );
                                  })}

                                <Button
                                  onClick={() => {
                                    setApplication((x) => {
                                      return {
                                        ...x,
                                        documents: [
                                          ...x?.documents,
                                          {
                                            id: crypto.randomUUID(),
                                            type: documentTypes[0],
                                            // file: "",
                                            timestamp: Date.now(),
                                          },
                                        ],
                                      };
                                    });
                                  }}
                                  className="text-lightBlue w-fit"
                                  variant="ghost"
                                >
                                  <Plus></Plus> <div>Add document</div>
                                </Button>
                              </div>
                            </div>
                          </>
                        ) : (
                          <p>
                            You will be asked to enter your details post
                            payment.
                          </p>
                        )}

                        {/* <script async src="https://js.stripe.com/v3/buy-button.js"></script> */}

                        {/* <stripe-buy-button
            buy-button-id="buy_btn_1PKlYHSFEOE5XbR7pzjbEsa7"
            publishable-key="pk_test_51MMEjMSFEOE5XbR764IIA6ajGaos3dI6yoRdupN2PthHYUpVD0aUOPxLfbmAOU6iV0fJKmyqxQ37HpmmRZw4XNGL003G5tkF4k"
          ></stripe-buy-button> */}

                        <Button
                          disabled={
                            aiOrManual === "Manual"
                              ? application.documents.length <= 0 ||
                                !application?.age ||
                                !application?.documents?.filter((x) => !x.file)
                                  .length <= 0
                              : false
                          }
                          onClick={async () => {
                            // console.log({
                            //   ...userData,
                            //   forms: [
                            //     ...userData?.forms,
                            //     {
                            //       ...application,
                            //       submittedOn: Date.now(),
                            //       status: "P",
                            //     },
                            //   ],
                            // });
                            await MakePayment();
                            // console.log(application);
                            // await uploadToDB("users", userData?.id, {
                            //   id: userData?.id,
                            //   submittedOn: Date.now(),
                            //   status: "P",
                            //   ...application,
                            // });
                            // window.location.reload();
                            // window.location.href = "admin";
                            // window.location.href =
                            //   "https://buy.stripe.com/test_eVa7uW0Jz0qP5JS4gg";
                          }}
                          className="bg-themeBlue w-[40vw] py-6"
                          type="primary"
                        >
                          Proceed to payment
                        </Button>
                        {/* <a  href="https://buy.stripe.com/test_eVa7uW0Jz0qP5JS4gg">
          </a> */}
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )
      ) : (
        <div className="justify-center flex items-center w-[80vw] h-[80vh]">
          <RotatingLines
            visible={true}
            height="50"
            width="50"
            color="blue"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            strokeColor="blue"
          />
        </div>
      )}
    </div>
  );
}
