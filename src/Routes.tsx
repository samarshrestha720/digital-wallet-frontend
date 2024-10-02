import { Route, Router } from "react-router-dom";
import { Login } from "./pages/Login/Login";

type Props = {};

export const Routes = (props: Props) => {
  return (
    <Router>
      <Route path="/login" element={<Login />}></Route>
    </Router>
  );
};
