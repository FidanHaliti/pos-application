import { Button, Form, Input, message, Modal, Select, Table } from "antd";
import { useEffect, useState } from "react";

const Edit = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_REACT_APP_SERVER_URL + "/api/products/get-all"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_REACT_APP_SERVER_URL + "/api/categories/get-all"
        );
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  const onFinish = (values) => {
    try {
      fetch(
        import.meta.env.VITE_REACT_APP_SERVER_URL +
          "/api/products/update-product",
        {
          method: "PUT",
          body: JSON.stringify({ ...values, productId: editingItem._id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      message.success("The product has been updated successfully.");
      setProducts(
        products.map((item) => {
          if (item._id === editingItem._id) {
            return values;
          }
          return item;
        })
      );
    } catch (error) {
      message.error("Something went wrong.");
      console.log(error);
    }
  };

  const deleteCategory = (id) => {
    if (window.confirm("Are you Sure")) {
      try {
        fetch(
          import.meta.env.VITE_REACT_APP_SERVER_URL +
            "/api/products/delete-product",
          {
            method: "DELETE",
            body: JSON.stringify({ productId: id }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        message.success("The category has been successfully deleted.");
        setProducts(products.filter((item) => item._id !== id));
      } catch (error) {
        message.error("Bir şeyler yanlış gitti.");
        console.log(error);
      }
    }
  };

  const columns = [
    {
      title: "Product name",
      dataIndex: "title",
      width: "8%",
      render: (_, record) => {
        return <p>{record.title}</p>;
      },
    },
    {
      title: "Image",
      dataIndex: "img",
      width: "4%",
      render: (_, record) => {
        return (
          <img src={record.img} alt="" className="w-full h-20 object-cover" />
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "8%",
    },
    {
      title: "Category",
      dataIndex: "category",
      width: "8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (_, record) => {
        return (
          <div>
            <Button
              type="link"
              className="pl-0"
              onClick={() => {
                setIsEditModalOpen(true);
                setEditingItem(record);
              }}
            >
             Edit
            </Button>
            <Button
              type="link"
              danger
              onClick={() => deleteCategory(record._id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        bordered
        dataSource={products}
        columns={columns}
        rowKey={"_id"}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />
      <Modal
        title="Add new Product"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={false}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={editingItem}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[
              { required: true, message: "Product Name Field Cannot Be Empty!" },
            ]}
          >
            <Input placeholder="Ürün adı giriniz." />
          </Form.Item>
          <Form.Item
            name="img"
            label="Image"
            rules={[
              { required: true, message: "Product Image Field Cannot Be Empty!" },
            ]}
          >
            <Input placeholder="Ürün görseli giriniz." />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              { required: true, message: "Product Price Field Cannot Be Empty!" },
            ]}
          >
            <Input placeholder="Ürün fiyatı giriniz." />
          </Form.Item>
          <Form.Item
            name="category"
            label="Select Category"
            rules={[
              { required: true, message: "Category Field Cannot Be Empty!" },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Güncelle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
