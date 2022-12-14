import "./App.css";

// Router
import { Router, Routes, Route, useNavigate } from "react-router-dom";

// Component
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import Course from "./pages/Course";
import Dashboard from "./pages/Dashboard";

// React Hooks
import { useState, useEffect } from "react";

// More
import Swal from "sweetalert2";

// App render
function App() {
  const [testData, setTestData] = useState([]);
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => {
        setTestData(res.users);
        console.log(res.users);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const findResult = [];
    const searchFieldEmail = "email";
    const searchFieldPass = "password";
    const emailInput = document.querySelector("#login-email");
    const passwordInput = document.querySelector("#login-password");
    for (let i = 0; i < testData.length; i++) {
      if (
        testData[i][searchFieldEmail] == emailInput.value &&
        testData[i][searchFieldPass] == passwordInput.value
      ) {
        findResult.push(testData[i]);
        setUserData(findResult);
      }
    }
    if (findResult.length < 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        footer: `<a href='/register'> Forgot Passwords? </a>`,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Thank You For Login",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate("/dashboard", { replace: true });
    }
    console.log(userData);
  };

  // setTimeout((window.location = "/dashboard"), 1000);

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard userData={userData} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </div>
  );
}

export default App;
