import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="px-[10%] bg-dime">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
