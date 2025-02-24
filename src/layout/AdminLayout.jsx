import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
    const routes = [
        {path: '/admin/list' , name: '產品列表'},
        {path: '/admin/order', name: '訂單列表'}
    ]
    return (<>
        <h1>AdminLayout</h1>
        <ul style={{display: 'flex', gap: '10px', listStyle: 'none'}}>
            {routes.map(route => (
                <li className="" key={route.path}><NavLink to={route.path}>{route.name}</NavLink></li>
            ))}
            
        </ul>
        <Outlet />
    </>)
}

export default AdminLayout;