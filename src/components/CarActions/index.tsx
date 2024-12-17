import {
  BUTTON_TITLES,
  MESSAGES,
  POPOVER_TITLES,
  TITLES,
} from "../../utils/constant";
import CarForm from "../car";
import styles from "./styles";
import CustomModal from "../Modal";
import { deleteCar } from "../../apis/car.api";
import { Button, Popconfirm, notification } from "antd";
import { useModalState } from "../../hooks/useModalState";

export default function Actions({ element, fetchAllRecords }: any) {
  const [addNoteModalShown, showAddNoteModal, hideAddNoteModal] =
    useModalState();

  const removeCar = async () => {
    const deletedCar = await deleteCar(element?._id);
    if (deletedCar?.err) {
      notification.open({
        message: MESSAGES.ERROR_OCCURED,
      });
    } else {
      notification.open({
        message: MESSAGES.CAR_DELETED,
      });
      fetchAllRecords?.();
    }
  };
  return (
    <div style={styles.actionsWrapper}>
      <span>
        <Button type="primary" onClick={showAddNoteModal}>
          {BUTTON_TITLES.EDIT}
        </Button>
      </span>
      <span>
        <Popconfirm
          placement="top"
          title={POPOVER_TITLES.DELETE_CAR}
          description={MESSAGES.DELETE_CAR}
          okText="Yes"
          cancelText="Cancel"
          onConfirm={removeCar}
        >
          <Button danger>{BUTTON_TITLES.DELETE}</Button>
        </Popconfirm>
      </span>
      <CustomModal
        title={TITLES.EDIT_CAR}
        centered={true}
        open={addNoteModalShown}
        onCancel={hideAddNoteModal}
        footer={null}
        childern={
          <CarForm
            id={element?._id}
            hideAddNoteModal={hideAddNoteModal}
            fetchAllCars={fetchAllRecords}
          />
        }
      />
    </div>
  );
}
