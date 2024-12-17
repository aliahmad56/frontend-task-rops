import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  notification,
} from "antd";
import {
  BUTTON_TITLES,
  LABELS,
  MESSAGES,
  PLACE_HOLDERS,
} from "../../utils/constant";
import Label from "../label";
import { styles } from "./styles";
import Loader from "../common/Loader";
import { useState, useEffect } from "react";
import { CarFormInterface } from "./car.interface";
import { getAllCatogories } from "../../apis/category.api";
import { createCar, editCar, getCar } from "../../apis/car.api";

const CarForm = ({ id, hideAddNoteModal, fetchAllCars }: CarFormInterface) => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [singleCategory,setSingleCategory] = useState('')

  const onFinish = async (values: any) => {
    values.name = values?.name?.trim();
    const response = id ? await editCar(values, id) : await createCar(values);
    if (response.statusCode == 200 || response.statusCode == 201) {
      notification.open({
        message: id ? MESSAGES.CAR_EDIT_SUCCESS : MESSAGES.CAR_ADD_SUCCESS,
      });
      setLoader(false);
      fetchAllCars?.();
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

  const fetchCar = async () => {
    setLoader(true);
    if (id) {
      const response: any = await getCar(id);
      form.setFieldsValue(response?.data);

    
       setSingleCategory(response.data.category_id.name)  
    
    }
    setLoader(false);
  };

  const fetchCategories = async () => {
    setLoader(true);
    const response: any = await getAllCatogories("");
    setCategories(() =>
      response?.data?.data?.map?.((category: any) => ({
        label: category.name,
        value: category._id,
        key: category._id,
      }))
    );
    setLoader(false);
  };

  useEffect(() => {
    fetchCar();
    fetchCategories();
  }, []);

  console.log("cat",categories)

  return (
    <div>
      <Form form={form} name="car" onFinish={onFinish}>
        <Row>
          <Col xs={24} lg={24}>
            <Form.Item
              name="registration_no"
              label={Label({
                styles: styles.formItemlabel,
                text: LABELS.REGISTRATION_NO,
              })}
              colon={false}
              rules={[
                {
                  required: true,
                  message: `${MESSAGES.CAR_REGISTRATION_NO_ERROR}`,
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
              <Input placeholder={PLACE_HOLDERS.REGISTRATION_NO} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={24}>
            <Form.Item
              name="model"
              label={Label({
                styles: styles.formItemlabel,
                text: LABELS.MODEL,
              })}
              colon={false}
              rules={[
                {
                  required: true,
                  message: `${MESSAGES.CAR_MODEL_ERROR}`,
                },
                {
                  validator: (_, value) =>
                    !/^[0-9]+$/.test(value)
                      ? Promise.reject(new Error(MESSAGES.ONLY_NUMBERS_ALLOW))
                      : Promise.resolve(),
                },
              ]}
            >
              <Input placeholder={PLACE_HOLDERS.MODEL} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={24}>
            <Form.Item
              name="color"
              label={Label({
                styles: styles.formItemlabel,
                text: LABELS.COLOR,
              })}
              colon={false}
              rules={[
                {
                  required: true,
                  message: `${MESSAGES.CAR_COLOR_ERROR}`,
                },
                {
                  validator: (_, value) =>
                    !value?.startsWith(" ")
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(MESSAGES.EMPTY_SPACES_NOT_ALLOWED)
                        ),
                },
              ]}
            >
              <Input placeholder={PLACE_HOLDERS.COLOR} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={24}>
            <Form.Item
              name="category_id"
              label={Label({
                styles: styles.formItemlabel,
                text: LABELS.CATEGORY,
              })}
              colon={false}
              rules={[
                {
                  required: true,
                  message: `${MESSAGES.CATEGORY_REQUIRED}`,
                },
              ]}
            >
  
               <select style={{width:"100%",padding:"8px",border:"1px solid #d9d9d9",borderRadius:"5px"}}>
                <option>{singleCategory}</option>
               {categories?.map((ele:any) =>
                <option onChange={(e:any) => setSingleCategory(e.target.value)} value={ele.value}>{ele.label}</option>
               )}
              </select>
             
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

export default CarForm;
