import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
