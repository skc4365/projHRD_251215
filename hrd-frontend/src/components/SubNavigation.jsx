import { NavLink } from "react-router-dom";
import './Sub.css'

export const SubNavigation = ({ basePath = "", value }) => {
    return (
        <ul>
            {value.map((item, index) => {
                const to = item.path
                    ? `${basePath}/${item.path}`.replace(/\/+/g, "/")
                    : basePath;

                return (
                    <span key={index}>
                        <NavLink
                            to={to}
                            end={item.path === ""}
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            {item.label}
                        </NavLink>
                    </span>
                );
            })}
        </ul>
    );
};
