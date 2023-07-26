import Cart from "~/pages/Cart";
import Home from "~/pages/Home";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
