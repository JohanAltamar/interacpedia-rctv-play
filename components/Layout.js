// import CategoryButtons from "./CategoryButtons";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
