import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to Our Multi-Vendor E-Commerce Platform. By accessing or using our services, you agree to be bound by these terms. Please read them carefully.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. User Accounts</h2>
          <p className="text-gray-600">
            You must register an account to access certain features. You are responsible for maintaining the confidentiality of your account and password.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Vendor Responsibilities</h2>
          <p className="text-gray-600">
            Vendors must ensure the products they list are genuine and delivered as promised. We reserve the right to remove vendors who violate our policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Product Listings & Pricing</h2>
          <p className="text-gray-600">
            Product descriptions must be accurate. Prices may change without notice. We are not liable for pricing errors caused by vendors.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Payments & Refunds</h2>
          <p className="text-gray-600">
            All payments are processed through secure gateways. Refunds are subject to our return policy. Unauthorized transactions should be reported immediately.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Limitation of Liability</h2>
          <p className="text-gray-600">
            We are not liable for indirect or consequential losses. Our total liability is limited to the amount paid for the disputed transaction.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Termination</h2>
          <p className="text-gray-600">
            We reserve the right to suspend or terminate user accounts that breach these terms without prior notice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">8. Changes to Terms</h2>
          <p className="text-gray-600">
            We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">9. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <ul className="text-gray-600 mt-2 list-disc list-inside">
            <li>Email: support@yourshop.com</li>
            <li>Phone: +91 9876543210</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
