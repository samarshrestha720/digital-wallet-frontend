import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import "./Layout.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";

const Layout = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <div className="sidebar-container">
      <Sidebar />
      <div className="outletBody">
        <Outlet context={user} />
      </div>
    </div>
  );
};

export default Layout;
