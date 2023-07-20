import { Link } from "react-router-dom";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserAddOutlined,
  BarChartOutlined,
  LogoutOutlined,
  
} from "@ant-design/icons";
import { Input,Badge,
 } from "antd";

const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <Link href="/">
            <h2 className="text-2xl font-bold md:text-4x1 ">LOGO</h2>
          </Link>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Kerko produkin..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4">
          <Link to="/" className="menu-link flex flex-col  hover:text-[#40a9ff] transiton-all">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </Link>
       
          <Link to="/cart" className="menu-link  flex-col hover:text-[#40a9ff] transiton-all md:flex hidden">
           <Badge count={5} offset={[0,6]}>
           <ShoppingCartOutlined className="text-2xl" 
            />
          </Badge>
            <span className="md:text-xs text-[10px]">Cart</span>
          </Link>
        
          <Link to="/bills" className="menu-link flex flex-col hover:text-[#40a9ff] transiton-all">
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Invoices</span>
          </Link>
        
        
          <Link to="/customer" className="menu-link flex flex-col hover:text-[#40a9ff] transiton-all">
            <UserAddOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Costomer</span>
          </Link>
        
        
          <Link to="/statistic" className="menu-link flex flex-col hover:text-[#40a9ff] transiton-all">
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Statistics</span>
          </Link>
        
        
          <Link to="/" className="menu-link flex flex-col hover:text-[#40a9ff] transiton-all">
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Log out</span>
          </Link>
          </div>
          <a href="/" className="menu-link flex flex-col hover:text-[#40a9ff] transiton-all md:hidden">
           <Badge count={5} offset={[0,6]}>
           <ShoppingCartOutlined className="text-2xl " 
            />
          </Badge>
            <span className="md:text-xs text-[10px]">Cart</span>
          </a>
      </header>
    </div>
  );
};

export default Header;
