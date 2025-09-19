import React, { useEffect, useState } from "react";

export default function AdminDashboard({ token }) {
    const [users, setUsers] = useState([]);

    // Fetch all users
    const fetchUsers = () => {
        fetch("https://meetmysoul-backend-1.onrender.com/api/admin/users", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching users:", err));
    };

    useEffect(() => {
        if (token) fetchUsers();
    }, [token]);

    // Delete a user
    const deleteUser = (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        fetch(`https://meetmysoul-backend-1.onrender.com/api/admin/users/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then(() => {
                setUsers(users.filter((u) => u._id !== id)); // remove from state
            })
            .catch((err) => console.error("Error deleting user:", err));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-3xl font-bold text-pink-600 mb-6">
                👑 Admin Dashboard
            </h1>
            {users.length === 0 ? (
                <p className="text-gray-600">No users found.</p>
            ) : (
                <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <thead className="bg-pink-200 text-left">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Age</th>
                            <th className="p-3">Gender</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                            <tr key={u._id} className="border-b">
                                <td className="p-3">{u.name}</td>
                                <td className="p-3">{u.email}</td>
                                <td className="p-3">{u.age}</td>
                                <td className="p-3">{u.gender}</td>
                                <td className="p-3">{u.phone}</td>
                                <td className="p-3">
                                    <button
                                        onClick={() => deleteUser(u._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
