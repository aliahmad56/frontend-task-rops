import styles from "./styles";
import Actions from "../CategoryActions";

export const CategoriesColumns = ({ fetchAllCategories, sortedInfo }: any) => [
  {
    title: () => <div style={styles.columns}>Name</div>,
    key: "name",
    dataIndex: "name",
    render: (record: string) => {
      return <div style={styles.columns}>{record}</div>;
    },
    sorter: true,
    sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
  },
  {
    title: () => <div style={styles.columns}>Action</div>,
    key: "action",
    render: (element: any) => (
      <Actions element={element} fetchAllRecords={fetchAllCategories} />
    ),
  },
];
