import { Card, notification } from "antd";
import { useEffect, useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { dashboardStats } from "../../apis/car.api";
import Loader from "../../components/common/Loader";
import { MESSAGES, TITLES } from "../../utils/constant";
import { styles } from "./styles";

export default function DashboardComponent() {
  const { logout } = useLogout();
  const [totalCount, setTotalCount] = useState(0);
  const [loader, setLoader] = useState<boolean>(false);

  const getDashBoardStats = async () => {
    setLoader(true);
    const result: any = await dashboardStats();
    if (result?.statusCode == 401) {
      logout();
    } else {
      if (result?.statusCode == 200) {
        const carsTotal = result?.data;
        setTotalCount(carsTotal);
        setLoader(false);
      } else {
        notification.open({
          message: MESSAGES.ERROR,
        });
      }
    }
  };

  useEffect(() => {
    getDashBoardStats();
  }, []);
  function title() {
    return (
      <span style={{ color: "gray" }}>{TITLES.NO_OF_REGISTERED_CARS}</span>
    );
  }
  return (
    <div style={styles.wrap}>
      <Card title={title()} style={styles.cardStyle}>
        {totalCount}
      </Card>
      {loader ? <Loader /> : <></>}
    </div>
  );
}
