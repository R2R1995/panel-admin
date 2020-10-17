import React from "react";
import SearchInput from "../../InfraStructure/Input/SearchInput/Index";

const header = () => {
    return (
        <>
            <nav className="navbar fixed-top" >
                <div className="d-flex align-items-center navbar-left">
                    <a className="menu-button d-none d-md-block" href="/">
                        <svg className="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
                            <rect x="0.48" y="0.5" width="7" height="1"></rect><rect x="0.48" y="7.5" width="7" height="1"></rect>
                            <rect x="0.48" y="15.5" width="7" height="1"></rect>
                        </svg>
                        <svg className="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                            <rect x="1.56" y="0.5" width="16" height="1"></rect>
                            <rect x="1.56" y="7.5" width="16" height="1"></rect>
                            <rect x="1.56" y="15.5" width="16" height="1"></rect>
                        </svg>
                        <div></div>
                    </a>
                    <SearchInput
                        name="searchKeyword"
                        className="form-control"
                        placeholder="جستجو"
                        id="searchKeyword"
                        hasDisable={false}
                    />
                </div>
                <a aria-current="page" className="navbar-logo active" href="/app">
                    <span className="logo d-none d-xs-block"/>
                    <span className="logo-mobile d-block d-xs-none"/>
                </a>
                <div>
                    notif
                </div>
            </nav>
        </>
    )
}

export default header;