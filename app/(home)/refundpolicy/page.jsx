"use client";
import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-gray mt-20 mb-10">
      <div className=" p-8 ">
        <h1 className="text-3xl font-bold text-center bg-themeOrange text-white py-8 mb-8">
          Refund Policy
        </h1>
        <p className="text-black mb-4">
          Last updated on 13-06-2024 11:04:32
        </p>
        <p className="text-black mb-4">
          www.getscout.co is a service from 4th Revolution Solutions Pvt Ltd. herein, referred to as Scout.
        </p>
        
        <h2 className="text-[30px] font-bold text-themeOrange mt-6 mb-4">
          How it works?
        </h2>
        <p className="text-black mb-4">
          Any refund for services ordered through www.getscout.co will be governed by the Refund Policy outlined below. Additionally, some services may have their own specific refund policies. In such cases, the individual service&apos;s refund policy will apply alongside this policy unless it conflicts with this one, in which case the individual service refund policy will take precedence.
        </p>
        
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
          How you can file for refund?
        </h2>
        <p className="text-black mb-4">
          To request a refund, you must send an email to cs@getscout.co. Please include the following information in your email:
        </p>
        <ul className="list-disc ml-6 text-black mb-4">
          <li>Order ID and name</li>
          <li>Reason for requesting a refund</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
          What are the eligibility criteria?
        </h2>
        <table className="w-full border-collapse mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Service Request Status</th>
              <th className="border p-2 text-left">Refund Eligibility*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Placement of order and before we start working on application file</td>
              <td className="border p-2">FULL</td>
            </tr>
            <tr>
              <td className="border p-2">Placement of order and after our team has started working on application file</td>
              <td className="border p-2">25% of the fee amount</td>
            </tr>
            <tr>
              <td className="border p-2">Placement of order and after our either prepares the application package or after filing of Visa Application with Embassy / Consulate</td>
              <td className="border p-2">No Refund</td>
            </tr>
          </tbody>
        </table>
        
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
          What is the timeline for refund?
        </h2>
        <p className="text-black mb-4">
          We will process your refund request as soon as reasonably practicable after receiving it. The Response times may vary depending on the payment method and the reasons provided for the refund request. Upon receiving the request, you will receive a notification mail outlining the broad timeline for getting the refund.
        </p>
        <p className="text-black mb-4">
          We will process the applicable refund within 10 business days or as per the regulations set by banks for that specific mode of payment.
        </p>
        
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
          How you will receive the refund?
        </h2>
        <p className="text-black mb-4">
          Refunds will be processed using the same method as the original payment. For instance, if you paid with a specific credit or debit card, the refund will be issued to that same card. If we are unable to process the refund through the original payment method, we will notify you of an alternative mode of payment.
        </p>
        
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
          What are our binding conditions for refund?
        </h2>
        <ul className="list-disc ml-6 text-black mb-4">
          <li>We will not be liable for refund in case there are personal circumstances.</li>
          <li>We are a facilitator of the visa application process and are not liable for delays at the consulates, their appointed agencies or any government bodies. We will not accept request for refund in such cases as outlined above.</li>
          <li>We will not be liable to refund for delays in application process due to external factors such flood, strike or any other natural calamities.</li>
          <li>We will not be liable for refund for delays in application process due to external agencies such courier or dispatch agencies.</li>
        </ul>
      </div>
    </div>
  );
};

export default RefundPolicy;