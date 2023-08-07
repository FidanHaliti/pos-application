import { Button, Form, Input, Modal, message } from "antd";

const Add = ({ isModalOpen, setIsModalOpen, categories, setCategories }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      message.success("The category has been successfully added.");
      form.resetFields();
      setCategories([
        ...categories,
        {
          _id: Math.random(),
          title: values.title,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title="New Add Category"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          name="title"
          label="Add Category :"
          rules={[
            { required: true, message: "empty category is not accepted!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="flex justify-end mb-0">
          <Button type="primary" htmlType="submit">
            {" "}
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Add;
