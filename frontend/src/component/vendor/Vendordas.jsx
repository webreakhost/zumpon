




import { useState } from "react";
import Sidebar from "./Sidebar";
import AddStore from "./AddStore";
import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";
// import Orderdet from "./VendorOrderDetails";
import VendorOrderDetails from "./VendorOrderDetails";
// import ViewProducts from "./ViewProducts";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("addStore");

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      {/* <main className="flex-grow">
    <VendorOrderDetails />
  </main> */}
      <div className="w-4/5 p-6">
        {activeTab === "addStore" && <AddStore />}
        {activeTab === "addCategory" && <AddCategory />}
        {activeTab === "addProduct" && <AddProduct />}
        {activeTab === "vieworders" && < VendorOrderDetails/>}
        {/* {activeTab === "viewProducts" && <ViewProducts />} */}
        vieworders
      </div>
    </div>
  );
};

export default Dashboard;
