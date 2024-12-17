import { createStyles } from "../../utils";
import { COLORS } from "../../theme";

export const styles = createStyles({
  headerDrawer: {
    width: "auto",
    borderRight: "none",
  },
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: `solid 1px ${COLORS.BORDER}`,
    boxShadow: `0 0 30px ${COLORS.SHADOW}`,
    justifyContent: "space-between",
    height: "auto",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    cursor: "pointer",
  },
  headerLeftItemsContainer: {
    display: "flex",
    alignItems: "center",
    background: "white",
    borderBottom: `solid 1px ${COLORS.BORDER}`,
    gap: "30px",
  },
  headerRightIconsContainer: {
    display: "flex",
    background: "white",
  },
  headerIcons: {
    fontSize: "18px",
    color: COLORS.PRIMARY,
    cursor: "pointer",
  },
  headerUserProfileIcon: {
    marginRight: "20px",
  },
  menu: {
    width: "500px",
  },
});
