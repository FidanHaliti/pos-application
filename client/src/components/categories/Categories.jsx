import { PlusOutlined } from "@ant-design/icons";
import "./style.css";
import { useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";

const Categories = ({ categories, setCategories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      setCategories( [...categories, values])
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ul className="flex md:flex-col gap-4 text-lg">
      {categories.map((item) => (
        <li className="category-item" key={item._id}>
          <span>{item.title}</span>
        </li>
      ))}

      <li
        className="category-item bg-purple-800 hover:opacity-90 "
        onClick={() => setIsModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl flex" />
      </li>
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
    </ul>
  );
};

export default Categories;
