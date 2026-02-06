import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Name.css";

export default function NameForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    surName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/email", { state: formData });
  };

  return (
    <div className="App">
    <div className="tablet-wrapper">
         <div className="tablet">
      <div className="tablet-header"></div>
    <form onSubmit={handleSubmit} className="login-form" >
      <h2>WÍTAMBÚRÚKIE</h2>

      <input
        name="firstName"
        placeholder="MÚHÍRÍGA "
        onChange={handleChange}
        required
      />

      <input
        name="lastName"
        placeholder="MBARÍ"
        onChange={handleChange}
        required
      />

      <input
        name="surName"
        placeholder="RÍÍTWA"
        onChange={handleChange}
        required
      />

      <button type="submit">TÚMA</button>
    </form>
    </div>
    </div>
    </div>
  );
}
