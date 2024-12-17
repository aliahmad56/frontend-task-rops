import { useState } from "react";
import { styles } from "./styles";
import { FormStyles } from "../../styles";
import Loader from "../../../common/Loader";
import Title from "antd/lib/typography/Title";
import { Link, useNavigate } from "react-router-dom";
import { combineStyles } from "../../../../utils";
import logo from "../../../../assets/logo/logo.png";
import { loginUser } from "../../../../apis/auth.api";
import {
  BUTTON_TITLES,
  MESSAGES,
  REDIRECTION_TEXTS,
  ROUTES,
  TITLES,
} from "../../../../utils/constant";
import { MailOutlined, UnlockOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, notification } from "antd";
import { useSignin } from "../../../../hooks/useLogin";

const initialValues = {
  username: null,
  password: null,
};

const LoginForm = () => {
  const [form] = Form.useForm();
  const { login } = useSignin();
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoader(true);
    const payload = {
      email: values?.email.toLowerCase(),
      password: values?.password,
    };
    const response: any = await loginUser(payload);
    if (response?.data?.access_token) {
      console.log("access token inside the login component", response?.data?.access_token)
      await localStorage.setItem(
        "token",
        JSON.stringify(response?.data?.access_token)
      );
      await login(JSON.stringify(response?.data?.access_token));
      notification.open({
        message: MESSAGES.LOGIN_SUCCESS,
      });
      setLoader(false);
      navigate(ROUTES.ROOT);
    } else {
      if (response?.err) {
        notification.open({
          message: response?.err?.message,
        });
        setLoader(false);
      } else {
        setLoader(false);
        notification.open({
          message: MESSAGES.LOGIN_ERROR,
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
          {TITLES.LOGIN}
        </Title>
        <Form
          form={form}
          name="login"
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
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            style={FormStyles.loginTextfield}
            rules={[
              {
                required: true,
                message: MESSAGES.PASSWORD_REQUIRED,
              },
              {
                min: 8, // Minimum password length (customize as needed)
                message: MESSAGES.PASSWORD_LENGTH_VALIDATION,
              },
              {
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                message: MESSAGES.PASSWORD_CHARACTERS_VALIDATION,
              },
            ]}
          >
            <Input.Password
              prefix={
                <UnlockOutlined
                  style={combineStyles([
                    styles.input,
                    FormStyles.passwordInput,
                  ])}
                />
              }
              placeholder="Password"
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
                  {BUTTON_TITLES.LOGIN}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div style={styles.signupOption}>
          <Link to={ROUTES.SIGN_UP}>
            {REDIRECTION_TEXTS.DO_NOT_HAVE_AN_ACCOUNT}
          </Link>
        </div>
        <Row>{loader ? <Loader /> : <></>}</Row>
      </div>
    </div>
  );
};

export default LoginForm;
