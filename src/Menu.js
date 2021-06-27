import React from 'react';
import { Link } from 'react-router-dom'

function Menu({ menuItems, setID }) {
    return (
        <div className="menu">
            {menuItems.map((item) => {
                const { id, title, price, img, desc } = item;
                return (
                    <article className="item" onClick={() => setID(id)}>
                        <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
                            <img src={img} alt={title} className="image" />
                            <div className="details">
                                <div className="main-details">
                                    <p className="name"> {title} </p>
                                    <p className="amount"> ${price} </p>
                                </div>
                                <div className="line"></div>
                                <div className="desc"> {desc} </div>
                            </div>
                        </Link>
                    </article>
                );
            })}
        </div>
    )
}

export default Menu;