"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray mt-20 mb-10">
      <div className=" p-8">
        <h1 className="text-3xl font-bold text-center bg-themeOrange text-white py-8 mb-8">
          Privacy Policy
        </h1>
        <p className="text-black mb-4">Last updated on : 08 July 2024</p> 
        <p className="text-black mb-4">
          This Privacy Policy describes Our policies and procedures on the
          collection, use, and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <p className="text-black mb-4">
          We use Your Personal data to provide and improve the Service. By
          using the Service, You agree to the collection and use of information
          in accordance with this Privacy Policy.
          Scout (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;)  operates the www.getscout.co (the &quot;Service&quot;). By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy and the Terms and Conditions accessible from www.getscout.co.
        </p>
        <p className="text-black mb-4">
          Scout (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the www.getscout.co (the &quot;Service&quot;). By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy and the Terms and Conditions accessible from www.getscout.co.
        </p>
        <h2 className="text-[30px] font-bold text-themeOrange mt-6 mb-4">
          Information Collection and Use
        </h2>
        <p className="text-black mb-4">
          We collect various types of information to provide and improve our
          Service. This includes Personal Data and Usage Data.
        </p>
        <h3 className="text-lg font-semibold text-black mt-4">Personal Data</h3>
        <p className="text-black mb-4">
          When using our Service, we may ask you to provide personally
          identifiable information, such as your email address, phone number,
          and face data (for Selfie Attendance). We assure you that your face
          data is only used for attendance purposes and is not shared with any
          third party without your explicit permission.
        </p>
        <h3 className="text-lg font-semibold text-black mt-4">Usage Data</h3>
        <p className="text-black mb-4">
          We also collect Usage Data that includes information on how the
          Service is accessed and used. This may include your IP address,
          browser type, pages visited, and other diagnostic data.
        </p>
        <h3 className="text-lg font-semibold text-black mt-4">
          Tracking and Cookies Data
        </h3>
        <p className="text-black mb-4">
          We utilize cookies and similar tracking technologies to monitor and
          analyze the activity on our Service. Cookies are small files sent to
          your browser and stored on your device, which help us track and
          improve the Service. You have the option to refuse cookies, but
          certain features may not be available if you do so.
        </p>
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">Use of Data</h2>
        <ul className="list-disc ml-6 text-black mb-4">
          <li>Providing and maintaining the Service</li>
          <li>Notifying you about changes to our Service</li>
          <li>Allowing you to participate in interactive features</li>
          <li>Providing customer care and support</li>
          <li>Analyzing and improving the Service</li>
          <li>Sending promotional messages via SMS, push notifications, and WhatsApp</li>
          <li>Personalizing user experience</li>
          <li>Administering contests or promotions</li>
          <li>Processing transactions and requesting ratings/reviews</li>
          <li>Following up on correspondence</li>
        </ul>
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
        Third-Party Platforms
        </h2>
        <p className="text-black mb-4">
        Scout integrates with various third-party platforms. While we do our best to ensure data security, we are not responsible for the actions of these third-party platforms. We recommend reviewing their privacy policies to understand how they handle your data.{" "}
        </p>
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
        Data Transfer
        </h2>
        <p className="text-black mb-4">
        Your information, including Personal Data, may be transferred to and maintained on computers located outside of your jurisdiction. By using the Service, you consent to the transfer of your data to India for processing. We take necessary steps to ensure the security of your data during the transfer.{" "}
         </p>
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
          Your Rights Regarding Information
        </h2>
        <p className="text-black mb-4">
          You have the right to access, rectify, erase, or restrict the
          processing of your personal data. You can also withdraw your consent
          or object to the processing of your data. To exercise these rights or
          seek clarification, please contact us at{" "}
          <a href="mailto:cs@getscout.co" className="text-blue-500 underline">
            cs@getscout.co
          </a>
          .
        </p>
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
        Disclosure of Data
        </h2>
        <p className="text-black mb-4">
          
        Scout may disclose your Personal Data if required to comply with legal obligations, protect our rights or property, prevent wrongdoing, ensure personal safety, or address legal liability.
        </p>
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
        Security of Data
        </h2>
        <p className="text-black mb-4">
        While we strive to protect your data, no method of transmission or storage is 100% secure. We employ commercially acceptable measures to safeguard your Personal Data but cannot guarantee absolute security.
        </p>
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">
        Changes to This Privacy Policy
        </h2>
        <p className="text-black mb-4">
        We may update our Privacy Policy periodically. Any changes will be notified via email or a prominent notice on our Service. It is advised to review this Privacy Policy periodically for updates.
        </p>
        <h2 className="text-xl font-semibold text-themeOrange mt-6 mb-4">Contact Us</h2>
        <p className="text-black">
          If you have any questions about this Privacy Policy or our Service,
          please contact us at{" "}
          <a href="mailto:cs@getscout.co" className="text-blue-500 underline">
            cs@getscout.co
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;