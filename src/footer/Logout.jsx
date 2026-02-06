import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      navigate("/"); // back to login
    }
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
}
