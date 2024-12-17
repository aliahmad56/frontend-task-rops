import {
  BUTTON_TITLES,
  MESSAGES,
  PLACE_HOLDERS,
  REDIRECTION_TEXTS,
  ROUTES,
  TITLES,
} from "../../../../utils/constant";
import { useState } from "react";
import { styles } from "./styles";
import { FormStyles } from "../../styles";
import Loader from "../../../common/Loader";
import Title from "antd/lib/typography/Title";
import { MailOutlined } from "@ant-design/icons";
import { signup } from "../../../../apis/auth.api";
import logo from "../../../../assets/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, Row, notification } from "antd";

const initialValues = {
  username: null,
  password: null,
};

const SignupForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoader(true);
    const payload = {
      email: values?.email.toLowerCase(),
    };
    const response: any = await signup(payload);
    if (response?.data) {
      notification.open({
        message: response?.data?.message,
      });
      navigate(ROUTES.LOGIN);
    } else {
      if (response?.err) {
        notification.open({
          message: response?.err?.message,
        });
        setLoader(false);
      } else {
        setLoader(false);
        notification.open({
          message: MESSAGES.ERROR_OCCURED,
        });
      }
    }
  };

  return (
    <div style={styles.loginForm}>
      <div style={FormStyles.loginContainer}>
        <a href="">
          <div>
            <img style={styles.centeredImage} src={logo} alt="Logo" />
          </div>
        </a>
        <Title level={3} style={styles.title}>
          {TITLES.SIGN_UP}
        </Title>
        <Form
          form={form}
          name="signup"
          onFinish={onFinish}
          initialValues={initialValues}
        >
          <Form.Item
            name="email"
            style={FormStyles.loginTextfield}
            rules={[
              {
                type: "email",
                message: MESSAGES.EMAIL_VALIDATION,
              },
              {
                required: true,
                message: MESSAGES.EMAIL_REQUIRED,
              },
            ]}
          >
            <Input
              prefix={<MailOutlined style={styles.input} />}
              placeholder={PLACE_HOLDERS.EMAIL}
            />
          </Form.Item>

          <Row justify="center">
            <Col>
              <Form.Item>
                <Button
                  style={FormStyles.loginButton}
                  type="primary"
                  htmlType="submit"
                >
                  {BUTTON_TITLES.SIGN_UP}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div style={styles.signupOption}>
          <Link to={ROUTES.LOGIN}>
            {REDIRECTION_TEXTS.ALREADY_HAVE_AN_ACCOUNT}
          </Link>
        </div>
        <Row>{loader ? <Loader /> : <></>}</Row>
      </div>
    </div>
  );
};

export default SignupForm;
