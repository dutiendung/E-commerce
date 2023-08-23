import About from "~/pages/About";
import Cart from "~/pages/Cart";
import Contact from "~/pages/Contact";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import ProductDetail from "~/pages/ProductDetail";
import Products from "~/pages/Products";
import Register from "~/pages/Register/Register";
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
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
