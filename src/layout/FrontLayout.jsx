import { NavLink, Outlet } from "react-router-dom";

const FrontLayout = () => {
    const routes = [
        {path: '/', name: '首頁'},
        {path: '/products', name: '產品列表'},
        {path: '/login', name: '登入'}
    ]

    return (<>
        <h1>FrontLayout</h1>
        <ul style={{display: 'flex', gap: '10px', listStyle: 'none'}}>
            {routes.map(route => (
                <li className="" key={route.path}><NavLink to={route.path}>{route.name}</NavLink></li>
            ))}
            
        </ul>
        <Outlet />
    </>)
}

export default FrontLayout;