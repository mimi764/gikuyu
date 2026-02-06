
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./supabase.js";

export default function EmailForm({ onFinish }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(false);
  const { firstName, lastName, surName } = location.state || {};

useEffect(() => {
    // Torch turns ON instantly on load
    const timer = setTimeout(() => setActive(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
     setActive(false);

    // Transition to home after 0.3s
    setTimeout(onFinish, 300);

    const { error } = await supabase.from("users").insert([
      {
        first_name: firstName,
        last_name: lastName,
        sur_name: surName,
        email: email,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      navigate("/home"); // ✅ redirect to home
    }
  };

  return (
    <div className={`torch-screen ${active ? "active" : ""}`}>
    
    <div className="torch-screen" id="torchScreen">
  <div className="darkness"/>
    

    <form class="email-form" onSubmit={handleSubmit}>
      <h2>Email</h2>
      <input type="email"
       placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required />
      <button type="submit">TÚMA</button>
    </form>
  
</div>
</div>

  );
}