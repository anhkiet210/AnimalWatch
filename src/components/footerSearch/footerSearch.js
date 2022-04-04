import React from "react";
import './footerSearch.scss'

const FooterSearch = () => {
    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row clearfix">
                    <div className="footer">
                        <div className="search justify-content-md-center col-md-7">
                            <div className="col-md-10 no-pd">
                                <input type="text" className="search__input" placeholder="Search..." />
                            </div>
                            <div className="col-md-2 no-pd">
                                <button className="search__btn"><i className="fa-solid fa-magnifying-glass icon-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSearch;