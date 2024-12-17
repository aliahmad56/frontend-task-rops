import { COLORS } from "../../theme";
import { createStyles } from "../../utils";

export default createStyles({
  actionItemsWrapper: {
    width: "72px",
    padding: "10px",
    boxShadow: `0px 0px 2px ${COLORS.GRAY}`,
    borderRadius: "5px",
    zIndex: "1",
    background: "rgb(219 229 241)",
    position: "absolute",
  },
});
