import { Modal } from "antd";

export default function CustomModal({
  title,
  centered,
  open,
  onCancel,
  footer,
  childern,
}: any) {
  return (
    <Modal
      title={title}
      centered={centered}
      open={open}
      width={600}
      onCancel={onCancel}
      footer={footer}
      destroyOnClose={true}
    >
      {childern}
    </Modal>
  );
}
