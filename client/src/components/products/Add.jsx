import { Button, Form, Input, Modal, message } from "antd";
import { Select } from "antd";
const Add = ({
  isAddModalOpen,
  setIsAddModalOpen,
  categories,
  products,
  setProducts,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch(
        import.meta.env.VITE_REACT_APP_SERVER_URL + "/api/products/add-product",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      );
      message.success("The product has been successfully added.");
      form.resetFields();
      setProducts([
        ...products,
        {
          ...values,
          _id: Math.random(),
          price: Number(values.price),
        },
      ]);

      setIsAddModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title="New Add Product"
      open={isAddModalOpen}
      onCancel={() => setIsAddModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          name="title"
          label="Add Product :"
          rules={[
            { required: true, message: "empty product is not accepted!" },
          ]}
        >
          <Input placeholder="Enter product name:" />
        </Form.Item>
        <Form.Item
          name="img"
          label="Add Image :"
          rules={[{ required: true, message: "empty image is not accepted!" }]}
        >
          <Input placeholder="Enter the product image:" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Add Price :"
          rules={[{ required: true, message: "empty price is not accepted!" }]}
        >
          <Input placeholder="Enter the product price:" />
        </Form.Item>
        <Form.Item
          name="category"
          label="Search Category:"
          rules={[
            { required: true, message: "empty category is not accepted!" },
          ]}
        >
          <Select
            showSearch
            placeholder="Category to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={categories}
          />
        </Form.Item>

        <Form.Item className="flex justify-end mb-0">
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Add;
