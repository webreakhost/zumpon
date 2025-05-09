import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaQuestionCircle,
  FaTruck,
  FaUndo,
  FaUserShield,
} from "react-icons/fa";

const HelpPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 sm:p-10">
      <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FaQuestionCircle className="text-blue-600" />
          Help & Support
        </h1>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <strong>How do I track my order?</strong><br />
              You can track your order in the "My Orders" section in your dashboard.
            </li>
            <li>
              <strong>How do I return a product?</strong><br />
              Navigate to your orders, click on the product, and request a return within 7 days.
            </li>
            <li>
              <strong>What payment methods do you accept?</strong><br />
              We accept Credit/Debit cards, UPI, Netbanking, and Wallets.
            </li>
            <li>
              <strong>Can I contact the vendor directly?</strong><br />
              Yes, vendor contact details are available on the product page.
            </li>
          </ul>
        </div>

        {/* Quick Help Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
            <FaTruck className="text-blue-600 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Shipping Info</h3>
              <p className="text-sm text-gray-600">Learn about delivery timelines and charges.</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-red-50 rounded-lg">
            <FaUndo className="text-red-600 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Returns & Refunds</h3>
              <p className="text-sm text-gray-600">Understand our return policy and refund process.</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-green-50 rounded-lg">
            <FaUserShield className="text-green-600 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Privacy & Security</h3>
              <p className="text-sm text-gray-600">We care about your data and privacy protection.</p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Need more help?</h2>
          <p className="text-gray-600 mb-4">Our support team is available 24/7.</p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-blue-600" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-blue-600" />
              <span>support@zumpon.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
