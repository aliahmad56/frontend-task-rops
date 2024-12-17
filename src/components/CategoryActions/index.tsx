import {
  BUTTON_TITLES,
  MESSAGES,
  POPOVER_TITLES,
  TITLES,
} from "../../utils/constant";
import styles from "./styles";
import CustomModal from "../Modal";
import CategoryForm from "../category";
import { Button, Popconfirm, notification } from "antd";
import { deleteCategory } from "../../apis/category.api";
import { useModalState } from "../../hooks/useModalState";

export default function Actions({ element, fetchAllRecords }: any) {
  const [addNoteModalShown, showAddNoteModal, hideAddNoteModal] =
    useModalState();

  const removeCategory = async () => {
    console.log("element inside Actions component:", element);

    const deletedCategory = await deleteCategory(element?._id);
    if (deletedCategory?.err) {
      notification.open({
        message: MESSAGES.ERROR_OCCURED,
      });
    } else {
      notification.open({
        message: MESSAGES.CATEGORY_DELETED,
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
          title={POPOVER_TITLES.DELETE_CATEGORY}
          description={MESSAGES.DELETE_CATEGORY}
          okText="Yes"
          cancelText="Cancel"
          onConfirm={removeCategory}
        >
          <Button danger>{BUTTON_TITLES.DELETE}</Button>
        </Popconfirm>
      </span>
      <CustomModal
        title={TITLES.EDIT_CATEGORY}
        centered={true}
        open={addNoteModalShown}
        onCancel={hideAddNoteModal}
        footer={null}
        childern={
          <CategoryForm
            id={element?._id}
            hideAddNoteModal={hideAddNoteModal}
            fetchAllCategories={fetchAllRecords}
          />
        }
      />
    </div>
  );
}
