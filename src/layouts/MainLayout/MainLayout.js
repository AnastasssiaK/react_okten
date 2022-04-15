import css from './MainLayout.module.css';
import {Outlet, NavLink} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={"/users"}>Users</NavLink>
                <NavLink to={"/posts"}>Posts</NavLink>
            </div>
            <div className={css.outlet}>
            <Outlet/>
            </div>
        </div>
    );
};
export {
    MainLayout
}