import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const FormController = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [credentials, setCredentials] = useState(null);
    const [userData, setUserData] = useState(null);

    const handleFormSubmit = (data) => {
        try {
            if (isLogin) {
                setUserData(data);
            } else {
                setCredentials({ email: data.email, password: data.password, name: data.name });
                setIsLogin(true);
            }
        } catch (error) {
            throw new Error("Error");
        }
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            fontFamily: "Arial, sans-serif"
        }}>
            {userData ? (
                <div style={{
                    backgroundColor: "#ffffff",
                    padding: "40px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    textAlign: "center"
                }}>
                    <h1 style={{ color: "#0d47a1", fontSize: "28px" }}>Welcome, {userData.name}!</h1>
                    <p style={{ color: "#555" }}>You have successfully logged in.</p>
                </div>
            ) : isLogin ? (
                <Login onSubmit={handleFormSubmit} credentials={credentials} style={{
                    backgroundColor: "#ffffff",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    textAlign: "center",
                    width: "350px"
                }} />
            ) : (
                <Signup onSubmit={handleFormSubmit} style={{
                    backgroundColor: "#ffffff",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    textAlign: "center",
                    width: "350px"
                }} />
            )}
            {!userData && (
                <button onClick={() => setIsLogin(!isLogin)} style={{
                    marginTop: "20px",
                    padding: "12px 24px",
                    backgroundColor: "#0d47a1",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "18px",
                    transition: "background 0.3s"
                }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#002171"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#0d47a1"}>
                    Switch to {isLogin ? "Signup" : "Login"}
                </button>
            )}
        </div>
    );
};

export default FormController;
