import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-dime">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
