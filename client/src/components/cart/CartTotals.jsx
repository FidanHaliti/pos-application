import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/cartSlice";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart h-full flex flex-col max-h-[calc(100vh_-_90px)]">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
        Cart Products
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2 overflow-y-auto py-2">
        {cart.cartItems.map((item) => (
          <li className="cart-item flex justify-between" key={item._id}>
            <div className="flex items-center ">
              <img
                src={item.img}
                alt=""
                className="w-16 h-16 object-cover cursor-pointer"
                onClick={() => dispatch(deleteCart(item))}
              />
              <div className="flex flex-col ml-2 ">
                <b>{item.title}</b>
                <span>
                  {item.price}€ x {item.quantity}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                type="primary"
                size="small"
                className="flex items-center justify-center !rounded-full "
                icon={<PlusCircleOutlined />}
              ></Button>
              <span className="font-bold">{item.quantity}</span>
              <Button
                type="primary"
                size="small"
                className=" flex items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
              ></Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Subtotal</b>
            <span> {cart.total > 0 ? cart.total.toFixed(2) : 0}€</span>
          </div>
          <div className="flex justify-between p-2">
            <b>TVSH %{cart.tax}</b>
            <span className="text-red-700">
              
              {(cart.total * cart.tax).toFixed(2) / 100 >
                0  ? `+${((cart.total * cart.tax).toFixed(2) / 100).toFixed(2)}`: 0 }
              €
            </span>
          </div>
        </div> 
        <div className="border-b">
          <div className="flex justify-between p-2">
            <b className="text-xl text text-green-500">Total</b>
            <span className="text-xl">
              {cart.total + (cart.total * cart.tax) / 100 > 0 ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2) : 0} €
            </span>
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
