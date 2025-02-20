import { useState } from "react";

const Signup = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone_number: "",
        dob: "",
        file: "",
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
        onSubmit(formData);
    };
    return (
        <div style={{ width: "400px", border: "2px solid white", padding: "10px", backgroundColor: "grey" }}>

            <h1 style={{ textAlign: "center" }}>Sign Up</h1>
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
                <input
                    type="number"
                    name="phone_number"
                    placeholder="Enter Your Phone_number..."
                    value={formData.phone_number}
                    onChange={handleChange}
                    style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
                />
                <input
                    type="date"
                    name="dob"
                    placeholder="Enter Your DOB..."
                    value={formData.dob}
                    onChange={handleChange}
                    style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
                />
                <input
                    type="file"
                    name="file"
                    placeholder="Enter Your File..."
                    value={formData.file}
                    onChange={handleChange}
                    style={{ width: "90%", marginBottom: "20px", padding: "10px" }}
                />
                <button type="submit" style={{ border: "none", borderRadius: "8px", padding: "10px", marginLeft: "160px" }}>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;