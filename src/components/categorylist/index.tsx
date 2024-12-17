import styles from "./styles";
import CustomModal from "../Modal";
import { Button, Table } from "antd";
import CategoryForm from "../category";
import { CategoriesColumns } from "./config";
import { ViewContainer } from "../ViewContainer";
import { useLogout } from "../../hooks/useLogout";
import { useState, useMemo, useEffect } from "react";
import { useModalState } from "../../hooks/useModalState";
import { getAllCatogories } from "../../apis/category.api";
import { BUTTON_TITLES, TITLES } from "../../utils/constant";

export default function CategoryList() {
  const paginationConfig: any = {
    current: 1,
    page: 1,
    pageSize: 5,
  };
  const { logout } = useLogout();
  const [count, setCount] = useState(0);
  const [sortedInfo, setSortedInfo] = useState<{
    columnKey: string | null;
    order: string | null;
  }>({
    columnKey: null,
    order: null,
  });
  const [loader, setLoader] = useState<boolean>(false);
  const [categories, setCategories] = useState<any>([]);
  const [pagination, setPagination] = useState(paginationConfig);
  const [addNoteModalShown, showAddNoteModal, hideAddNoteModal] =
    useModalState();

  const fetchAllCategories = async (queryParams?: string) => {
    setLoader(true);
    if (!queryParams) {
      setPagination(() => paginationConfig);
      setSortedInfo(() => ({ columnKey: null, order: null }));
    }
    const response: any = await getAllCatogories(
      queryParams
        ? queryParams
        : `pageNo=${paginationConfig?.current}&perPage=${paginationConfig?.pageSize}`
    );
    if (response?.statusCode == 401) {
      logout();
    } else {
      setCategories(() => response?.data?.data);
      setCount(() => response?.data?.count);
      setLoader(false);
    }
  };

  const columns = useMemo(
    () => CategoriesColumns({ fetchAllCategories, sortedInfo }),
    [sortedInfo]
  );

  useEffect(() => {
    fetchAllCategories(
      `pageNo=${pagination?.current}&perPage=${pagination?.pageSize}`
    );
  }, []);

  return (
    <ViewContainer>
      <div style={styles.buttonWrapper}>
        <Button type="primary" onClick={() => showAddNoteModal()}>
          {BUTTON_TITLES.ADD_CATEGORY}
        </Button>
      </div>
      <Table
        onChange={(paginationParams: any, filter: any, sorter: any) => {
          setPagination(() => paginationParams);
          setSortedInfo(() => sorter);
          fetchAllCategories(
            `pageNo=${paginationParams?.current}&perPage=${
              paginationParams?.pageSize
            }&${sorter?.order ? "orderBy=" + sorter?.order : ""}`
          );
        }}
        dataSource={categories}
        loading={loader}
        columns={columns}
        pagination={{ ...pagination, total: count }}
      />
      <CustomModal
        title={TITLES.ADD_CATEGORY}
        centered={true}
        open={addNoteModalShown}
        onCancel={hideAddNoteModal}
        footer={null}
        childern={
          <CategoryForm
            hideAddNoteModal={hideAddNoteModal}
            fetchAllCategories={fetchAllCategories}
          />
        }
      />
    </ViewContainer>
  );
}
