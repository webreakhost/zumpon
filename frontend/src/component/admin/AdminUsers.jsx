



import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config"; // Ensure correct backend URL

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editUserId, setEditUserId] = useState(null);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BACKENDURL}/api/v1/auth/admin/users`, {
        withCredentials: true, // Ensure authentication
      });
      setUsers(response.data.users);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // Handle role update
  const handleUpdateRole = async (userId) => {
    try {
      await axios.put(
        `${BACKENDURL}/api/v1/auth/update-role/${userId}`,
        { newRole },
        { withCredentials: true }
      );

      // Refresh user list after update
      fetchUsers();
      setEditUserId(null); // Close input field
    } catch (err) {
      console.error("Error updating role:", err);
      setError("Failed to update role");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">All Users</h2>

      {loading ? (
        <p className="text-gray-500">Loading users...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : users.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left border-b">ID</th>
                <th className="py-3 px-4 text-left border-b">Name</th>
                <th className="py-3 px-4 text-left border-b">Email</th>
                <th className="py-3 px-4 text-left border-b">Role</th>
                <th className="py-3 px-4 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="py-2 px-4">{user._id}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">
                    {editUserId === user._id ? (
                      <input
                        type="text"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className="border px-2 py-1 rounded w-24"
                      />
                    ) : (
                      user.role
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editUserId === user._id ? (
                      <>
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 mr-2"
                          onClick={() => handleUpdateRole(user._id)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600"
                          onClick={() => setEditUserId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                        onClick={() => {
                          setEditUserId(user._id);
                          setNewRole(user.role);
                        }}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
