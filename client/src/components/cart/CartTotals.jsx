import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
const CartTotals = () => {
  return (
    <div className="cart h-full flex flex-col max-h-[calc(100vh_-_90px)]">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
        Cart Products
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2 overflow-y-auto py-2">
        <li className="cart-item flex justify-between">
          <div className="flex items-center ">
            <img
              src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2 ">
              <b>Molla</b>
              <span>3€ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              size="small"
              className="flex items-center justify-center !rounded-full "
              icon={<PlusCircleOutlined />}
            ></Button>
            <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className=" flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            ></Button>
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center ">
            <img
              src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2 ">
              <b>Molla</b>
              <span>3€ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              size="small"
              className="flex items-center justify-center !rounded-full "
              icon={<PlusCircleOutlined />}
            ></Button>
            <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className=" flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            ></Button>
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center ">
            <img
              src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2 ">
              <b>Molla</b>
              <span>3€ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              size="small"
              className="flex items-center justify-center !rounded-full "
              icon={<PlusCircleOutlined />}
            ></Button>
            <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className=" flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            ></Button>
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center ">
            <img
              src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2 ">
              <b>Molla</b>
              <span>3€ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              size="small"
              className="flex items-center justify-center !rounded-full "
              icon={<PlusCircleOutlined />}
            ></Button>
            <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className=" flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            ></Button>
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center ">
            <img
              src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2 ">
              <b>Molla</b>
              <span>3€ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              size="small"
              className="flex items-center justify-center !rounded-full "
              icon={<PlusCircleOutlined />}
            ></Button>
           <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className=" flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            ></Button>
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center ">
            <img
              src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2 ">
              <b>Molla</b>
              <span>3€ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              size="small"
              className="flex items-center justify-center !rounded-full "
              icon={<PlusCircleOutlined />}
            ></Button>
            <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className=" flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            ></Button>
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center ">
            <img
              src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <div className="flex flex-col ml-2 ">
              <b>Molla</b>
              <span>3€ x 2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              size="small"
              className="flex items-center justify-center !rounded-full "
              icon={<PlusCircleOutlined />}
            ></Button>
           <span className="font-bold">1</span>
            <Button
              type="primary"
              size="small"
              className=" flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
            ></Button>
          </div>
        </li>
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Subtotal</b>
            <span>99€</span>
          </div>
          <div className="flex justify-between p-2">
            <b>TVSH 8%</b>
            <span className="text-red-700">+7.58€</span>
          </div>
        </div>
        <div className="border-b">
          <div className="flex justify-between p-2">
            <b className="text-xl text text-green-500">Total</b>
            <span className="text-xl">199€</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center justify-center"
          >
            Create Order
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center justify-center"
            danger
          >
            <ClearOutlined />
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
