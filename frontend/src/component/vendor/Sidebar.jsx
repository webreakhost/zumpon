



import { FaStore, FaTags, FaBox, FaList } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-1/5 bg-gray-800 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Vendor Dashboard</h2>
      <ul>
        <li
          className={`mb-4 cursor-pointer ${activeTab === "addStore" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("addStore")}
        >
          <FaStore className="inline mr-2" /> Add Store
        </li>
        <li
          className={`mb-4 cursor-pointer ${activeTab === "addCategory" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("addCategory")}
        >
          <FaTags className="inline mr-2" /> Add Category
        </li>
        <li
          className={`mb-4 cursor-pointer ${activeTab === "addProduct" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("addProduct")}
        >
          <FaBox className="inline mr-2" /> Add Product
        </li>
        <li
          className={`mb-4 cursor-pointer ${activeTab === "viewProducts" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("viewProducts")}
        >
          <FaList className="inline mr-2" /> View Products
        </li>
        <li
          className={`mb-4 cursor-pointer ${activeTab === "vieworders" ? "font-bold" : ""}`}
          onClick={() => setActiveTab("vieworders")}
        >
          <FaBox className="inline mr-2" /> view order
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
