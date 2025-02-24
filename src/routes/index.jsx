import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layout/FrontLayout";
import Home from "../views/front/Home";
import ProductList from "../views/front/ProductList";
import Login from "../views/front/Login";
import AdminLayout from "../layout/AdminLayout";
import AdminOrder from "../views/admin/AdminOrder";
import AdminProduct from "../views/admin/AdminProduct";
import NotFound from "../views/front/NotFound";

const router = createHashRouter([
    {
        path: '/',
        element: <FrontLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'products',
                element: <ProductList />,
            },
            {
                path: 'login',
                element: <Login />,
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'adminProduct',
                element: <AdminProduct />,
            },
            {
                path: 'adminOrder',
                element: <AdminOrder />,
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    }
])

export default router;