import About from "~/pages/About";
import Cart from "~/pages/Cart";
import Contact from "~/pages/Contact";
import Home from "~/pages/Home";
import ProductDetail from "~/pages/ProductDetail";
import Products from "~/pages/Products";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    component: ProductDetail,
  },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
