import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader, action as ProductAction } from "./views/Products";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import EditProduct, { loader as editProductLoader, action as editProductAction } from "./views/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: ProductAction
      },
      {
        path: "/prodct/new",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "/prodct/:id/edit",
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction
      },
    ],
  },
]);
