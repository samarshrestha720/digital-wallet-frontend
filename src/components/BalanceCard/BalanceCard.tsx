import { BiHide, BiShow } from "react-icons/bi";
import "./BalanceCard.css";
import { useState } from "react";
import { userObject } from "../../contexts/AuthContext";
import { RxReload } from "react-icons/rx";
export const BalanceCard = ({ user }: { user: userObject }) => {
  const [hide, setHide] = useState(false);
  const [spin, setSpin] = useState(false);
  return (
    <div className="mainContainer">
      <div className="balance-label">
        Balance{" "}
        <RxReload
          size={30}
          className={`reload-button ${spin ? "spin" : ""}`}
          onClick={() => {
            setSpin(!spin);
          }}
        />
      </div>
      <div className="balance-value-container">
        <div className="balance-value">
          Rs. {hide ? "XXXX.XX" : user.balance}
        </div>
        <div
          className="hide-unhide-button"
          onClick={() => {
            setHide(!hide);
          }}
        >
          {hide ? <BiShow size={30} /> : <BiHide size={30} />}
        </div>
      </div>
      <div className="email-value">
        Email: {hide ? "xxxxxxxxxxxxx" : user.email}
      </div>
    </div>
  );
};
