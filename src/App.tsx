import "./App.css";
import Router from "./Routes";
import { ConfigProvider } from "antd";
import { customTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ConfigProvider theme={customTheme}>
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
