import { Button, Card, Form, Input, Modal, Select, message } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { reset } from "../redux/cartSlice.js";
import { useNavigate } from "react-router-dom";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await fetch(
        import.meta.env.VITE_REACT_APP_SERVER_URL + "/api/bills/add-bill",
        {
          method: "POST",
          body: JSON.stringify({
            ...values,
            subTotal: cart.total,
            tax: ((cart.total * cart.tax).toFixed(2) / 100).toFixed(2),
            totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(
              2
            ),
            cartItems: cart.Cartitems,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      if (res.status === 200) {
        message.success("Invoice successfully created");
        dispatch(reset());
        navigate("/bills");
      }
    } catch (error) {
      message.danger("Something went wrong");

      console.log(error);
    }
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
          name={"customerName"}
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
          name={"customerPhoneNumber"}
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
            <span>Ara Toplam</span>
            <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}€</span>
          </div>
          <div className="flex justify-between my-2">
            <span>TVSH %{cart.tax}</span>
            <span className="text-red-600">
              {(cart.total * cart.tax).toFixed(2) / 100 > 0
                ? `+${((cart.total * cart.tax).toFixed(2) / 100).toFixed(2)}`
                : 0}
              €
            </span>
          </div>
          <div className="flex justify-between">
            <b>Toplam</b>
            <b>
              {" "}
              {cart.total + (cart.total * cart.tax) / 100 > 0
                ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                : 0}{" "}
              €
            </b>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              className="mt-4"
              type="primary"
              onClick={() => setIsModalOpen(true)}
              htmlType="submit"
              disabled={cart.cartItems.length === 0}
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
