import { Layout } from "antd";
import Car from "./views/Car";
import { styles } from "./styles";
import Login from "./views/Auth/Login";
import PublicRoute from "./PublicRoute";
import Category from "./views/Category";
import Signup from "./views/Auth/Signup";
import { ROUTES } from "./utils/constant";
import Dashboard from "./views/Dashboard";
import PrivateRoute from "./ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header";
import { useAuthContext } from "./hooks/useAuthContext";

const Router = () => {
  const { user } = useAuthContext();
  return (
    <Layout>
      {user && (
        <Layout.Header style={styles.header}>
          <HeaderComponent />
        </Layout.Header>
      )}
      <Layout.Content style={styles.content}>
        <Routes>
          <Route
            path={ROUTES.ROOT}
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.CATEGORY}
            element={
              <PrivateRoute>
                <Category />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.CAR}
            element={
              <PrivateRoute>
                <Car />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.LOGIN}
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.SIGN_UP}
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
        </Routes>
      </Layout.Content>
    </Layout>
  );
};

export default Router;
