import React from 'react';
import Navbar from "../../shared/navbar/Navbar";

const Layout = (props) => {
    return (
        <>
            <Navbar/>
            <div className="container-fluid">
                {props.children}
            </div>
        </>
    );
}

export default Layout;