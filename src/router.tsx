import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./pages/Layout/Layout";
import { SendMoney } from "./pages/SendMoney";
import { LoadMoney } from "./pages/LoadMoney";
import { TransactionHistory } from "./pages/TransactionHistory";

const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sendMoney" element={<SendMoney />}></Route>
          <Route path="/loadMoney" element={<LoadMoney />}></Route>
          <Route
            path="/transactionHistory"
            element={<TransactionHistory />}
          ></Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
  // return <RouterProvider router={router} />;
};

export default Router;
