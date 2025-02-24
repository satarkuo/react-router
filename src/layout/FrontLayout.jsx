import { NavLink, Outlet } from "react-router-dom";

const FrontLayout = () => {
    const routes = [
        {path: '/', name: '首頁'},
        {path: '/products', name: '產品列表'},
        {path: '/login', name: '登入'}
    ]

    return (<div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>前台</h1>
        <ul style={{display: 'flex', justifyContent: 'center', gap: '10px', listStyle: 'none', padding: 0 }}>
            {routes.map(route => (
                <li className="" key={route.path}><NavLink to={route.path}>{route.name}</NavLink></li>
            ))}
            
        </ul>
        <Outlet />
    </div>)
}

export default FrontLayout;