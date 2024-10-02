import { useContext, createContext, ReactNode, useState } from "react";
import { login, LoginCredentials } from "../api/auth";
import { useNavigate } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

export type userObject = {
  userId: string;
  name: string;
  balance: number;
  email: string;
};

type IAuthContext = {
  user: userObject;
  isAuthenticated: boolean;
  token: string;
  setUser: (user: userObject) => void;
  setIsAuthenticated: (newState: boolean) => void;
  setToken: (newToken: string) => void;
  loginAction: (data: LoginCredentials) => void;
  logoutAction: () => void;
};

const initalState = {
  user: {
    userId: "asd13123asd",
    name: "Demo User",
    balance: 100.12,
    email: "demo1@demo.com",
  },
  isAuthenticated: false,
  token: "",
  setUser: () => {},
  setIsAuthenticated: () => {},
  setToken: () => {},
  loginAction: async () => {},
  logoutAction: () => {},
};
const AuthContext = createContext<IAuthContext>(initalState);

const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    initalState.isAuthenticated
  );
  const [token, setToken] = useState(initalState.token);
  const [user, setUser] = useState(initalState.user);
  const navigate = useNavigate();

  const loginAction = async (data: LoginCredentials) => {
    try {
      console.log("Login Action Triggered");
      const response = (await login(data)).toString();
      setIsAuthenticated(true);
      setToken(response);
      localStorage.setItem("site", response);
      console.log("Login Success!!");
      navigate("/");
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const logoutAction = () => {
    setIsAuthenticated(false);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        setUser,
        setIsAuthenticated,
        token,
        setToken,
        loginAction,
        logoutAction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

export const useAuth = () => {
  return useContext(AuthContext);
};
