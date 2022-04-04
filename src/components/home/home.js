import React from "react";
import Animal from "../animal/animal";
import './home.scss'

const Home = () => {

    const alphabetTV = ["a", "b", "c", "d", "đ", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "ư", "v", "w", "x", "y", "z"]
    return (
        <>
            <div className="container-fluid wraper">
                <div className="container">
                    <div className="row clearfix">
                        <div className="title">Search our animal</div>
                        <div className="search-animal">
                            <select className="search-animal__select">
                                <option>Tiếng Việt</option>
                                <option>Tên khoa học</option>
                            </select>
                            <input type="text" className="search-animal__ip-text" />
                            <button className="search-animal__btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </div>
                <div className="container" >
                    <div className="row clearfix">
                        <div className="wrap-list-animal">
                            <div className="wrap-list-animal__title">
                                Sắp xếp theo tên tiếng Việt
                            </div>
                            <div className="wrap-list-animal__alphabet">
                                {
                                    alphabetTV.map((item, idx) => (
                                        <span className="alphabet-item" key={idx}>{item}</span>
                                    ))
                                }
                            </div>

                            <div className="list-animal">
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                                <Animal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;