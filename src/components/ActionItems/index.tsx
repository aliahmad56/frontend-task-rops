import styles from "./styles";
import { ACTION_ITEMS } from "../../utils/constant";

export default function ActionsItems() {
  return (
    <div style={styles.actionItemsWrapper}>
      {ACTION_ITEMS?.map?.((action) => {
        return <div>{action?.value}</div>;
      })}
    </div>
  );
}
