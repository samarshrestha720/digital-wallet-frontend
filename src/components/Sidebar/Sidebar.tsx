import { Link, useLocation } from "react-router-dom";
import { MainLogo } from "../Logo/MainLogo";
import "./Sidebar.css";
export const Sidebar = () => {
  const sidebarLinks = [
    { label: "Home", link: "/" },
    {
      label: "Send Money",
      link: "/sendMoney",
    },
    {
      label: "Load Money",
      link: "/loadMoney",
    },
    {
      label: "Transaction History",
      link: "/transactionHistory",
    },
  ];

  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <Link to="/" className="logo-text-container">
        <MainLogo height={50} width={50} />
        <div>SR Wallet</div>
      </Link>

      <div className="menuItems">
        {sidebarLinks.map((item) => {
          const isItemActive = item.link === pathname;
          return (
            <Link
              key={item.label}
              to={item.link}
              className={isItemActive ? "activeSidebarLinks" : "sidebarLinks"}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
