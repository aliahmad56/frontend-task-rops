import {
  BUTTON_TITLES,
  LABELS,
  MESSAGES,
  PLACE_HOLDERS,
} from "../../utils/constant";
import {
  createCategory,
  editCategory,
  getCategory,
} from "../../apis/category.api";
import { styles } from "./styles";
import Loader from "../common/Loader";
import { useState, useEffect } from "react";
import { CategoryFormInterface } from "./category.interface";
import { Button, Col, Form, Input, Row, Space, notification } from "antd";

const CategoryForm = ({
  id,
  hideAddNoteModal,
  fetchAllCategories,
}: CategoryFormInterface) => {
  const [form] = Form.useForm();
  const [loader, setLoader] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    values.name = values?.name?.trim();
    const response = id
      ? await editCategory(values, id)
      : await createCategory(values);
    if (response.statusCode == 200 || response.statusCode == 201) {
      notification.open({
        message: id
          ? MESSAGES.CATEGORY_EDIT_SUCCESS
          : MESSAGES.CATEGORY_ADD_SUCCESS,
      });
      setLoader(false);
      fetchAllCategories?.();
      hideAddNoteModal?.();
    } else {
      if (response?.err) {
        notification.open({
          message: response?.err?.message ?? MESSAGES.ERROR_OCCURED,
        });
        setLoader(false);
      } else {
        setLoader(false);
        notification.open({
          message: MESSAGES.ERROR,
        });
      }
    }
  };

  const fetchCategory = async () => {
    setLoader(true);
    if (id) {
      const response: any = await getCategory(id);
      form.setFieldsValue(response?.data);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      <Form form={form} name="category" onFinish={onFinish}>
        <Row>
          <Col xs={24} lg={24}>
            <Form.Item
              name="name"
              label={LABELS.NAME}
              rules={[
                {
                  required: true,
                  message: `${MESSAGES.CATEGORY_NAME_ERROR}`,
                },
                {
                  validator: (_, value) =>
                    value?.startsWith(" ")
                      ? Promise.reject(
                          new Error(MESSAGES.EMPTY_SPACES_NOT_ALLOWED)
                        )
                      : !/^[a-zA-Z0-9\s]+$/.test(value)
                      ? Promise.reject(
                          new Error(
                            MESSAGES.ONLY_ALPHANUMERIC_VALUES_AND_SPACE_ALLOWED
                          )
                        )
                      : Promise.resolve(),
                },
              ]}
            >
              <Input placeholder={PLACE_HOLDERS.CATEGORY_NAME} />
            </Form.Item>
          </Col>
        </Row>
        <Space direction="horizontal" style={styles.center}>
          <Row gutter={24}>
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {id ? BUTTON_TITLES.EDIT : BUTTON_TITLES.ADD}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Space>
      </Form>
      <Row style={styles.center}>{loader ? <Loader /> : <></>}</Row>
    </div>
  );
};

export default CategoryForm;
