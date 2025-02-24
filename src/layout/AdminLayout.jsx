import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
    const routes = [
        {path: '/admin/adminProduct' , name: '產品列表'},
        {path: '/admin/adminOrder', name: '訂單列表'},
        {path: '/', name: '返回首頁'}
    ]
    return (<div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>後台</h1>
        <ul style={{display: 'flex', justifyContent: 'center', gap: '10px', listStyle: 'none', padding: 0 }}>
            {routes.map(route => (
                <li className="" key={route.path}><NavLink to={route.path}>{route.name}</NavLink></li>
            ))}
            
        </ul>
        <Outlet />
    </div>)
}

export default AdminLayout;