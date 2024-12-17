import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: any) => {
  const user = localStorage.getItem("token");
  return !user ? <>{children}</> : <Navigate to="/" />;
};

export default PublicRoute;
