
import { Button, Card, Form, Input, Modal, Select } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };
  
  return (
    <Modal
      title="Create invoice"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
        <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item
          label="Customer Name"
          name={"curtomerName"}
          rules={[
            {
              required: true,
              message: "Username is required",
            },
          ]}
        >
          <Input placeholder="Write a Customer Name" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name={"phoneNumber"}
          label="Tel No"
        >
          <Input placeholder="Phone no" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="PaymentMode"
          rules={[{ required: true }]}
          name={"paymentMode"}
        >
          <Select placeholder="Payment method">
            <Select.Option value="Cash">Nakit</Select.Option>
            <Select.Option value="Credit Cart">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>
        <Card className="">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>35€</span>
            </div>
            <div className="flex justify-between py-2">
              <span>TVSH 8%</span>
              <span className="text-red-700">+5.12€</span>
            </div>
            <div className="flex justify-between">
              <b>TOTAL</b>
              <b>39.12€</b>
            </div>
            <div className="mt-4 flex justify-end">
            <Button
              className="mt-4"
              type="primary"
              onClick={() => setIsModalOpen(true)}
              htmlType="submit"
            >
              Create Order
            </Button>
            </div>
          </Card>
      </Form>
      </Modal>
  );
};

export default CreateBill;
