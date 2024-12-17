import { COLORS } from "../../../theme";
import { createStyles } from "../../../utils";

export const styles = createStyles({
  loaderLayout: {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: COLORS.LIGHT_BLACK,
  },
});
