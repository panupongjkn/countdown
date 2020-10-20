import React from "react";
import styled from "styled-components";
import { DatePicker, Space, Form, Button, Input } from "antd";
import moment from "moment";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #bde2fb;
  background-image: url("/images/cloudBG.svg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: 80% auto;
`;

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
`;

const Index: React.FC = () => {
  const disabledDate = (current: any) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Background>
        <div className="pt-5">
          <img
            src="/images/cloud2.svg"
            style={{ zIndex: 1, position: "absolute", bottom: 0 }}
            alt="cloud2"
          />
          <img
            src="/images/cloud1.svg"
            style={{ zIndex: 2, position: "absolute", bottom: 0 }}
            alt="cloud1"
          />
          <div className="col-12 col-lg-8 mx-auto">
            <Box
              className="text-center p-5 rounded"
              style={{ zIndex: 3, position: "relative" }}
            >
              <h1>Countdown</h1>
              <Space direction="vertical">
                <Form onFinish={onFinish}>
                  <Form.Item
                    name="countdown_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input countdown name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="countdown_date"
                    rules={[
                      {
                        required: true,
                        message: "Please input countdown date",
                      },
                    ]}
                  >
                    <DatePicker disabledDate={disabledDate} />
                  </Form.Item>
                  <Button htmlType="submit" type="primary">
                    Create
                  </Button>
                </Form>
              </Space>
            </Box>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Index;
