import { styles } from "./styles";
import Menu from "../common/Menu";
import MenuItem from "../common/MenuItem";
import { combineStyles } from "../../utils";
import logo from "../../assets/logo/logo.png";
import DrawerComponent from "../common/Drawer";
import { useLogout } from "../../hooks/useLogout";
import { ConfigProvider, Grid, Layout } from "antd";
import { useContext, useEffect, useState } from "react";
import { MENU_ITEM_KEYS, ROUTES } from "../../utils/constant";
import { ConfigConsumerProps } from "antd/lib/config-provider";
import { LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

const { Header } = Layout;

export default function HeaderComponent() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = localStorage.getItem("token");
  const [selectedRoute, setSelectedRoute] = useState<any>();
  const themeConfiguration = useContext(ConfigProvider.ConfigContext);
  const [headerDrawerOpen, setHeaderDrawerOpen] = useState<boolean>(false);
  const { md } = Grid.useBreakpoint();
  const { logout } = useLogout();
  useEffect(() => {
    const path = pathname.split("/")?.[1] ?? "";
    if (!path) {
      setSelectedRoute(() => MENU_ITEM_KEYS.ROOT);
    } else if (path === ROUTES.CATEGORY.split("/")?.[1]?.toLowerCase()) {
      setSelectedRoute(() => MENU_ITEM_KEYS.CATEGORIES);
    } else if (path === ROUTES.CAR.split("/")?.[1]?.toLowerCase()) {
      setSelectedRoute(() => MENU_ITEM_KEYS.CARS);
    }
  }, [pathname]);
  const MenuItems = (
    <>
      <MenuItem key={MENU_ITEM_KEYS.ROOT}>
        <Link to={ROUTES.ROOT}>{MENU_ITEM_KEYS.ROOT}</Link>
      </MenuItem>
      <MenuItem key={MENU_ITEM_KEYS.CATEGORIES}>
        <Link to={ROUTES.CATEGORY}>{MENU_ITEM_KEYS.CATEGORIES}</Link>
      </MenuItem>
      <MenuItem key={MENU_ITEM_KEYS.CARS}>
        <Link to={ROUTES.CAR}>{MENU_ITEM_KEYS.CARS}</Link>
      </MenuItem>
    </>
  );

  const getHeaderHamburgerStyle = (themeConfig: ConfigConsumerProps) => ({
    color: themeConfig?.theme?.token?.colorPrimary,
  });

  const gotoDashbaord = () => {
    navigate(ROUTES.ROOT);
  };

  return (
    <Header style={styles.header}>
      <div
        style={combineStyles([
          styles.headerLeftItemsContainer,
          {
            justifyContent: md ? "flex-start" : "space-between",
          },
        ])}
      >
        <div style={styles.logoContainer} onClick={gotoDashbaord}>
          <img src={logo} width={100} />
        </div>
        {md ? (
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[MENU_ITEM_KEYS.ROOT]}
            selectedKeys={[selectedRoute]}
            style={styles.menu}
          >
            {MenuItems}
          </Menu>
        ) : (
          <div onClick={() => setHeaderDrawerOpen(true)}>
            <MenuOutlined style={getHeaderHamburgerStyle(themeConfiguration)} />
          </div>
        )}
      </div>
      <div style={styles.headerRightIconsContainer}>
        {!user ? (
          ""
        ) : (
          <LogoutOutlined onClick={logout} style={styles.headerIcons} />
        )}
      </div>
      <DrawerComponent
        title="CarSense"
        open={headerDrawerOpen}
        onClose={() => setHeaderDrawerOpen(false)}
      >
        {
          <Menu
            onClick={() => setHeaderDrawerOpen(false)}
            mode="vertical"
            defaultSelectedKeys={[MENU_ITEM_KEYS.ROOT]}
            selectedKeys={[selectedRoute]}
            style={styles.headerDrawer}
          >
            {MenuItems}
          </Menu>
        }
      </DrawerComponent>
    </Header>
  );
}
