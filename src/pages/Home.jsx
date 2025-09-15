import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Home() {
    const navigate = useNavigate();

    // Login state
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [registerData, setRegisterData] = useState({
        email: "",
        name: "",
        age: "",
        gender: "",
        phone: "",
        password: "",
    });

    const handleLoginChange = (e) =>
        setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const handleRegisterChange = (e) =>
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post("/auth/login", loginData);
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        } catch (err) {
            alert(err.response?.data?.msg || "Login failed");
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await API.post("/auth/register", registerData);
            alert("Registration successful!");
            navigate("/dashboard");
        } catch (err) {
            alert(err.response?.data?.msg || "Registration failed");
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center py-6">
            {/* Two pink boxes */}
            <div className="flex flex-col md:flex-row gap-10">
                {/* Login Box */}
                <form
                    onSubmit={handleLogin}
                    className="bg-pink-100 p-6 rounded-2xl shadow-lg w-80 border border-pink-200"
                >
                    <h2 className="text-xl font-bold text-center mb-4 text-pink-700">
                        Login
                    </h2>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleLoginChange}
                        className="w-full px-3 py-2 mb-3 border rounded focus:ring-2 focus:ring-pink-400"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleLoginChange}
                        className="w-full px-3 py-2 mb-4 border rounded focus:ring-2 focus:ring-pink-400"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Register Box */}
                <form
                    onSubmit={handleRegister}
                    className="bg-pink-100 p-6 rounded-2xl shadow-lg w-80 border border-pink-200"
                >
                    <h2 className="text-xl font-bold text-center mb-4 text-pink-700">
                        Register
                    </h2>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 mb-3 border rounded focus:ring-2 focus:ring-pink-400"
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 mb-3 border rounded focus:ring-2 focus:ring-pink-400"
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 mb-3 border rounded focus:ring-2 focus:ring-pink-400"
                        required
                    />
                    <select
                        name="gender"
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 mb-3 border rounded focus:ring-2 focus:ring-pink-400"
                        required
                    >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 mb-3 border rounded focus:ring-2 focus:ring-pink-400"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Set Password"
                        onChange={handleRegisterChange}
                        className="w-full px-3 py-2 mb-4 border rounded focus:ring-2 focus:ring-pink-400"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
