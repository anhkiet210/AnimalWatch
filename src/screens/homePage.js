import React from "react";
import FooterSearch from "../components/footerSearch/footerSearch";
import Home from "../components/home/home";
import Header from "../components/UI/header/Header";

const HomePage = () => {
    return(
        <>
            <Header />
            <Home />
            <FooterSearch />
        </>
    )
}

export default HomePage;