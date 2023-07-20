import { Table, Card, Button, } from "antd";
import Header from "../components/header/Header";


import { useState } from "react";
import PrintBill from "../components/Bills/PrintBill";



const CustomerPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];   
  
  
  return (
    <div>
      <Header />
      <div className="px-6">
        <h1 className=" text-4xl mb-3 text-center font-bold">Customers</h1>
        <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
           
            <div className="mt-4">
              <Button onClick={() => setIsModalOpen(true)}
                type="primary"
                size="large"
                className="w-full mt-2 flex items-center justify-center"
              >
                Create Order
              </Button>
            </div>
          </Card>
         
        </div>
      </div>
     <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
};
export default CustomerPage;
