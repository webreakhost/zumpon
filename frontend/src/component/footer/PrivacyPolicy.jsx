import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Privacy Policy
      </h1>

      
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Section 1 - Introduction */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          1. Introduction
        </h2>
        <p className="text-gray-600 mb-4">
          Welcome to <strong>Zumpon</strong>. We respect your privacy and
          are committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, and share your data.
        </p>

        {/* Section 2 - Information We Collect */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          2. Information We Collect
        </h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Personal details (Name, Email, Phone, Address).</li>
          <li>Payment information for bookings.</li>
          {/* <li>Travel preferences and history.</li> */}
          <li>Device and location data.</li>
        </ul>

        {/* Section 3 - How We Use Your Information */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>To process bookings and payments.</li>
          <li>To provide personalized recommendations.</li>
          <li>To enhance our services and user experience.</li>
          <li>For legal and security purposes.</li>
        </ul>

        {/* Section 4 - Data Sharing & Security */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          4. Data Sharing & Security
        </h2>
        <p className="text-gray-600 mb-4">
          We do not sell or rent your data. Your information may be shared with
          trusted third-party service providers for payment processing and
          travel arrangements. We use encryption to keep your data secure.
        </p>

        {/* Section 5 - Cookies & Tracking */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          5. Cookies & Tracking Technologies
        </h2>
        <p className="text-gray-600 mb-4">
          We use cookies to improve your experience on our website. You can
          manage your cookie preferences in your browser settings.
        </p>

        {/* Section 6 - Your Rights */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          6. Your Rights
        </h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Access, update, or delete your data.</li>
          <li>Opt-out of marketing communications.</li>
          <li>Request a copy of your personal data.</li>
        </ul>

        {/* Section 7 - Contact Information */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          7. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions about our Privacy Policy, please contact us
          at:{" "}
          <a href="mailto:support@makeustrip.in" className="text-blue-600">
            support@zumpon.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
