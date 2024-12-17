import { createStyles } from "../../utils";

export const styles = createStyles({
  center: {
    display: "flex",
    justifyContent: "end",
  },
  formItemlabel: {
    width: "130px",
    display: "flex",
  },
});

export const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    xs: { span: 13 },
    sm: { span: 13 },
    lg: { span: 13 },
  },
};
