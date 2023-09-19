import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;