import { COLORS } from "../../theme";
import { createStyles } from "../../utils";

export const FormStyles = createStyles({
  loginContainer: {
    backgroundColor: "white",
    boxShadow: `0 4px 8px 0 ${COLORS.CARD_SHADOW}, 0 6px 20px 0 ${COLORS.CARD_SHADOW}`,
    borderRadius: "8px",
    width: "500px",
    marginTop: "80px",
  },
  loginTextfield: {
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  centeredImage: {
    display: "block",
    paddingTop: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "30%",
  },
  loginButton: {
    marginTop: "25%",
  },
  forgotPasswordWrap: {
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    textAlign: "center",
    marginBottom: "16px",
  },
  input: {
    color: COLORS.LIGHT_BLACK,
  },
  passwordInput: {
    marginRight: "8px",
  },
  changePasswordInputsPrefix: {
    marginRight: "8px",
    color: COLORS.LIGHT_BLACK,
  },
  changePasswordButton: {
    display: "flex",
    justifyContent: "center",
  },
});
