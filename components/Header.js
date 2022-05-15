import React, {useState} from 'react';
import Link from "next/link";
import {useSelector} from "react-redux";
import HeaderSearchBar from "./HeaderSearchBar";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showSearchBar, setShowSearchBar] = useState(false)

    const {categories} = useSelector(state => state.categories)

    const toggleMenu = () => {
        if(isMenuOpen) {
            setIsMenuOpen(false)
            document.querySelector('body').classList.remove('open-menu')
            return
        }
        document.querySelector('body').classList.add('open-menu')
        setIsMenuOpen(true)
        setShowSearchBar(false)
    }

    return (
        <>
            <div className="mobile-bar hidden-lg hidden-md">
                <div className="menu-icon-mobile hidden-lg hidden-md">
                    <i className="fa fa-navicon"></i>
                    <span>MENU</span>
                </div>
                <div className="search-icon-mobile">
                    <i className="fa fa-search"></i>
                </div>
                <div className="search-box-mobile">
                    <form>
                        <input type="search" value="" placeholder="Begin typing..." className="txt-search"/>
                    </form>
                </div>
            </div>
            <div className="menu-icon hidden-sm hidden-xs" onClick={toggleMenu}>
                <i className="fa fa-navicon"></i>
            </div>
            <header className="header">
                <div className="container">
                    <div className="logo-wrap">
                        <a href="#" className="logo">
                            <img alt="" src="images\logo.png"/>
                        </a>
                    </div>

                    <nav className="menu-main">
                        <div className={`menu-main-inner ${showSearchBar ? 'show-search' : ''}`}>
                            <ul className="hidden-sm hidden-xs">
                                <li className="menu-item-has-children">
                                    <Link href="/"><a><i className="fa fa-home"></i> Home </a></Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <a>
                                        Category
                                    </a>
                                    <ul className="sub-menu">
                                        {
                                            categories.map(category =>
                                                <li key={category.id}>
                                                    <Link href={'http://localhost:3000/category/'+category.id}>{category.name}</Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </li>
                            </ul>
                            <HeaderSearchBar
                                onOpen={() => setShowSearchBar(!showSearchBar)}
                            />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;