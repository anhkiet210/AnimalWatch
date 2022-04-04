import React from "react";
import { Link } from "react-router-dom";
import imgLoad from '../../img/load.jpg'
import './animal.scss'

const Animal = () => {
    return (
        <div className="animal">
            <div className="animal__img">
                <Link to="/">
                    <img src={imgLoad}></img>
                </Link>
            </div>
            <div className="animal__name">
                <Link to="/">Tên động vật</Link>
            </div>
        </div>
    )
}

export default Animal;