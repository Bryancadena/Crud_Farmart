import React from "react";
import * as bootstrap from "bootstrap";
import { Link } from "@inertiajs/react";
import * as Icon from "react-bootstrap-icons";
import "../../css/material-dashboard.min.css";

const Style = {
    overflow: "hidden",
    textoverflow: "ellipsis",
    whitespace: "nowrap",
};
export default function Sidebar({ user }) {
    return (
        <aside
            className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
            id="sidenav-main"
        >
            <div className="sidenav-header">
                <i
                    className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                    aria-hidden="true"
                    id="iconSidenav"
                ></i>
                <a className="navbar-brand m-0" target="_blank">
                    <span className="ms-1 font-weight-bold text-white">
                        FARMART - PANEL DE ADMIN{" "}
                    </span>
                </a>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div
                className="navbar-collapse  w-auto ">
                <ul className="navbar-nav">
                    <li className="nav-item mb-2 mt-0">
                        <a
                            data-bs-toggle="collapse"
                            href="#ProfileNav"
                            className="nav-link text-white collapsed"
                            aria-controls="ProfileNav"
                            role="button"
                            aria-expanded="false"
                        >
                            <span
                                className="nav-link-text ms-2 ps-1"
                                style={Style}
                            >
                                {user.name}
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white " href="#">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <Icon.CardList/>
                            </div>
                            <span className="nav-link-text ms-1">
                                Facturación
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white " href="#">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <Icon.PersonSquare/>
                            </div>
                            <span className="nav-link-text ms-1">Clientes</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white " href="#">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <Icon.BoxSeam/>
                            </div>
                            <span className="nav-link-text ms-1">Productos</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white " href="#">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <Icon.CardList/>
                            </div>
                            <span className="nav-link-text ms-1">
                                Notifications
                            </span>
                        </a>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                            Administrar Cuenta
                        </h6>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white " href="#">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <Link  to={route('logout')}><Icon.BoxArrowInRight/></Link>
                            </div>
                            <span className="nav-link-text ms-1">Sign In</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
