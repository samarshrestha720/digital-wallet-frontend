import { useOutletContext } from "react-router-dom";
import { userObject } from "../../contexts/AuthContext";
import "./Home.css";
import { BalanceCard } from "../../components/BalanceCard/BalanceCard";

export const Home = () => {
  const user: userObject = useOutletContext();
  console.log(user);
  return (
    <div>
      <h1 className="welcome-user-heading">Welcome, {user.name}</h1>
      <div className="balanceCardContainer">
        <BalanceCard user={user} />
      </div>
    </div>
  );
};
