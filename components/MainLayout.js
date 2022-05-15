import React from 'react';
import Header from "./Header";
import TagCloud from "./TagCloud";
import Footer from "./Footer";


const MainLayout = ({title, children}) => {


    return (
        <div>
            <div className="page">
                <Header/>
                <div className="wrapper">
                    <div className="wrap">
                        <div className="big-page-caption">
                            <p> #{title}</p>
                        </div>
                        {children}
                        <div className="bottom">
                            <div className="bottom-inner">
                                <div className="bottom-col">
                                    <div className="col-caption">
                                        <span>RECENT POST</span>
                                    </div>
                                    <ul className="recent-post">
                                        <li>
                                            <p><a href="single-gallery.html"> Maecenas semper ante sed lectus egestas.</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p><a href="single.html"> Proin eget tortor risus.</a></p>
                                        </li>

                                        <li>
                                            <p><a href="single-fullwidth-special.html"> The beautifull girl.</a></p>
                                        </li>

                                        <li>
                                            <p><a href="single-fullwidth-three-column.html"> Simply dummy text</a></p>
                                        </li>

                                        <li>
                                            <p><a href="single-audio.html"> What The Font</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <TagCloud/>
                                <div className="bottom-col">
                                    <div className="col-caption">
                                        <span>INSTAGRAM</span>
                                    </div>
                                    <ul className="instagram-pics">
                                        <li>
                                            <a href="#">
                                                <img src="images\i1.jpg" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="images\i2.jpg" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="images\i3.jpg" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="images\i4.jpg" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="images\i5.jpg" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="images\i6.jpg" alt=""/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;