import React from "react";

import Navbar from "../components/Navbar/Navbar.component";
import HomePage from "../Pages/HomePage";

const DefaultLayout =(props) =>{
    return(
        <div>
            <Navbar />
            <HomePage />
            {props.children}
        </div>

    );
};
export default DefaultLayout;
