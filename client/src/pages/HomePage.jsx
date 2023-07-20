import CartTotals from "../components/cart/CartTotals";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Products from "../components/products/Products";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <div className="home flex justify-between px-6 gap-10 md:flex-row flex-col md:pb-0 pb-24 ">
        <div className="categories  overflow-auto max-h-[calc(100vh_-_103px)] md:pb-10">
          <Categories />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_103px)]  overflow-y-auto">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border ">
          <CartTotals />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
