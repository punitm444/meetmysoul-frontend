import React, { useEffect, useState } from "react";

function AdminDashboard() {
    const [users, setUsers] = useState([]);

    // Fetch all users
    useEffect(() => {
        fetch("http://localhost:5000/api/admin/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    // Delete user
    const deleteUser = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            const res = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();

            if (res.ok) {
                setUsers(users.filter((u) => u._id !== id));
                alert("User deleted successfully");
            } else {
                alert(data.msg || "Failed to delete user");
            }
        } catch (err) {
            console.error(err);
            alert("Error deleting user");
        }
    };

    return (
        <div className="min-h-screen bg-white p-8">
            {/* Header */}
            <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">
                👑 Admin Dashboard
            </h1>

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-pink-100">
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Age</th>
                            <th className="border px-4 py-2">Gender</th>
                            <th className="border px-4 py-2">Phone</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((u) => (
                                <tr key={u._id} className="text-center">
                                    <td className="border px-4 py-2">{u.name}</td>
                                    <td className="border px-4 py-2">{u.email}</td>
                                    <td className="border px-4 py-2">{u.age}</td>
                                    <td className="border px-4 py-2">{u.gender}</td>
                                    <td className="border px-4 py-2">{u.phone}</td>
                                    <td className="border px-4 py-2">
                                        <button
                                            onClick={() => deleteUser(u._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="text-gray-500 text-center py-4 italic"
                                >
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;
