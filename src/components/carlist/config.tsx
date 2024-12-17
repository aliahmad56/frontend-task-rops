import styles from "./styles";
import Actions from "../CarActions";

export const CarsColumns = ({ fetchAllCars, sortedInfo }: any) => [
  {
    title: () => <div style={styles.columns}>Registration No</div>,
    key: "registration_no",
    dataIndex: "registration_no",
    render: (record: string) => {
      return <div style={styles.columns}>{record}</div>;
    },
    sorter: true,
    sortOrder:
      sortedInfo.columnKey === "registration_no" ? sortedInfo.order : null,
  },
  {
    title: () => <div style={styles.columns}>Model</div>,
    key: "model",
    dataIndex: "model",
    render: (record: string) => {
      return <div style={styles.columns}>{record}</div>;
    },
    sorter: true,
    sortOrder: sortedInfo.columnKey === "model" ? sortedInfo.order : null,
  },
  {
    title: () => <div style={styles.columns}>Color</div>,
    key: "color",
    dataIndex: "color",
    render: (record: string) => {
      return <div style={styles.columns}>{record}</div>;
    },
  },
  {
    title: () => <div style={styles.columns}>Category</div>,
    key: "category",
    dataIndex: "category",
    render: (record: string) => {
      return <div style={styles.columns}>{record}</div>;
    },
  },
  {
    title: () => <div style={styles.columns}>Action</div>,
    key: "action",
    render: (element: any) => (
      <Actions element={element} fetchAllRecords={fetchAllCars} />
    ),
  },
];
