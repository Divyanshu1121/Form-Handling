import { useState } from "react";

const Login = ({ onSubmit, credentials }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email && !formData.password) {
            alert("Please enter your email & password");
            return;
        }

        if (credentials &&
            credentials.email === formData.email &&
            credentials.password === formData.password) {
            onSubmit(credentials);
        } else {
            alert("Invalid Email Or Password");
        }

    };
    return (
        <div style={{ width: "400px", border: "2px solid white", padding: "10px", backgroundColor: "grey" }}>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name..."
                    value={formData.name}
                    onChange={handleChange}
                    style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email..."
                    value={formData.email}
                    onChange={handleChange}
                    style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password..."
                    value={formData.password}
                    onChange={handleChange}
                    style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
                />
                <button type="submit" style={{ padding: "10px", borderRadius: "8px", border: "none", marginLeft: "160px" }}>Login</button>
            </form>
        </div>
    );
};

export default Login;