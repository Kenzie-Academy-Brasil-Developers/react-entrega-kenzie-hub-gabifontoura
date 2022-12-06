import { useState } from "react";
import RoutesMain from "./routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./services/api";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function userLogin(formData, setLoading) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success(response.statusText);
      setUser(response.data.user);
      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  }

  return (
    <div className="App">
      <>
        <RoutesMain userLogin={userLogin} user={user} userLogout={userLogout} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
    </div>
  );
}

export default App;
