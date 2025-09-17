import React, { useEffect, useState } from "react";
import API from "../api";

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all users
    useEffect(() => {
        API.get("/api/admin/users")
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
                setLoading(false);
            });
    }, []);

    // Delete a user
    const deleteUser = (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        API.delete(`/api/admin/users/${id}`)
            .then(() => {
                setUsers(users.filter((user) => user._id !== id));
            })
            .catch((err) => console.error("Error deleting user:", err));
    };

    if (loading) return <p className="text-center p-6">Loading users...</p>;

    return (
        <div className="min-h-screen bg-white p-8">
            {/* Header */}
            <h1 className="text-3xl font-bold mb-6 text-center">
                <span className="text-black">Meet My</span>
                <span className="text-pink-600">sore</span>
                <div className="text-lg italic font-serif">
                    <span className="text-black">meet my</span>
                    <span className="text-pink-600">soul</span>
                </div>
            </h1>

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-pink-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Age</th>
                            <th className="border border-gray-300 px-4 py-2">Gender</th>
                            <th className="border border-gray-300 px-4 py-2">Phone</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id} className="text-center">
                                    <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.age}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.gender}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={() => deleteUser(user._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="border px-4 py-2 text-gray-500">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
