import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: any) {
  const user = localStorage.getItem("token");
  return user ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
