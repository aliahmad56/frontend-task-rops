import CarForm from "../car";
import styles from "./styles";
import CustomModal from "../Modal";
import { Button, Table } from "antd";
import { CarsColumns } from "./config";
import { getAllCars } from "../../apis/car.api";
import { ViewContainer } from "../ViewContainer";
import { useLogout } from "../../hooks/useLogout";
import { useState, useMemo, useEffect } from "react";
import { useModalState } from "../../hooks/useModalState";
import { BUTTON_TITLES, TITLES } from "../../utils/constant";

export default function CarList() {
  const paginationConfig: any = {
    current: 1,
    page: 1,
    pageSize: 5,
  };
  const { logout } = useLogout();
  const [cars, setCars] = useState<any>([]);
  const [total, setTotal] = useState<Number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  const [sortedInfo, setSortedInfo] = useState<{
    columnKey: string | null;
    order: string | null;
  }>({
    columnKey: null,
    order: null,
  });
  const [pagination, setPagination] = useState(paginationConfig);
  const [addNoteModalShown, showAddNoteModal, hideAddNoteModal] =
    useModalState();

  const fetchAllCars = async (queryParams?: string) => {
    setLoader(true);
    if (!queryParams) {
      setPagination(() => paginationConfig);
      setSortedInfo(() => ({ columnKey: null, order: null }));
    }
    const response: any = await getAllCars(
      queryParams
        ? queryParams
        : `pageNo=${paginationConfig?.current}&perPage=${paginationConfig?.pageSize}`
    );
    if (response?.statusCode == 401) {
      logout();
    } else {
      console.log("all cars inside the carlist component is", response)
      setCars(() =>
        response?.data?.cars?.map?.((car: any) => ({
          ...car,
          category: car?.
          category_id?.name,
        }))
      );
      setTotal(() => response?.data?.count);
      setLoader(false);
    }
  };

  const columns = useMemo(
    () => CarsColumns({ fetchAllCars, sortedInfo }),
    [sortedInfo]
  );

  useEffect(() => {
    fetchAllCars(
      `pageNo=${pagination?.current}&perPage=${pagination?.pageSize}`
    );
  }, []);

  return (
    <ViewContainer>
      <div style={styles.buttonWrapper}>
        <Button type="primary" onClick={() => showAddNoteModal()}>
          {BUTTON_TITLES.ADD_CAR}
        </Button>
      </div>
      <Table
        onChange={(paginationParams: any, filter: any, sorter: any) => {
          setPagination(() => paginationParams);
          setSortedInfo(() => sorter);
          fetchAllCars(
            `pageNo=${paginationParams?.current}&perPage=${
              paginationParams?.pageSize
            }&${
              sorter?.order && sorter?.columnKey
                ? "orderBy=" + sorter?.columnKey + "&order=" + sorter?.order
                : ""
            }`
          );
        }}
        dataSource={cars}
        loading={loader}
        columns={columns}
        pagination={{ ...pagination, total }}
      />
      <CustomModal
        title={TITLES.ADD_CAR}
        centered={true}
        open={addNoteModalShown}
        onCancel={hideAddNoteModal}
        footer={null}
        childern={
          <CarForm
            hideAddNoteModal={hideAddNoteModal}
            fetchAllCars={fetchAllCars}
          />
        }
      />
    </ViewContainer>
  );
}
