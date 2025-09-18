import React, { useEffect, useState } from "react";

export default function AdminDashboard({ token }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://meetmysoul-backend-1.onrender.com/api/admin/users", {
            headers: {
                Authorization: `Bearer ${token}`, // send admin token
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => console.error("Error fetching users:", err));
    }, [token]);

    return (
        <div className="min-h-screen bg-white p-6">
            <h1 className="text-3xl font-bold text-pink-600 mb-6">Admin Dashboard</h1>
            <h2 className="text-xl mb-4">Registered Users</h2>
            {users.length === 0 ? (
                <p>No users found</p>
            ) : (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-pink-100">
                            <th className="border border-gray-300 p-2">Name</th>
                            <th className="border border-gray-300 p-2">Email</th>
                            <th className="border border-gray-300 p-2">Age</th>
                            <th className="border border-gray-300 p-2">Gender</th>
                            <th className="border border-gray-300 p-2">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                            <tr key={u._id}>
                                <td className="border border-gray-300 p-2">{u.name}</td>
                                <td className="border border-gray-300 p-2">{u.email}</td>
                                <td className="border border-gray-300 p-2">{u.age}</td>
                                <td className="border border-gray-300 p-2">{u.gender}</td>
                                <td className="border border-gray-300 p-2">{u.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
