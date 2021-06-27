import { React } from 'react';
import { Link } from 'react-router-dom';

function SingleItem({ menuItems, ID }) {

    const IdItem = menuItems.filter((item) => item.id === ID);
    const { title, price, img, desc, category } = IdItem[0];

    return (
        <section className="singleItem">
            <div className="left">
                <img src={img} alt={title} className="itemImage" />
            </div>
            <div className="right">
                <h1 className="itemHeading"> {title} </h1>
                <h3 className="itemPrice">
                    <span className="sideHeading">Price: </span>
                    ${price}
                </h3>
                <div className="itemCategory">
                    <span className="sideHeading"> Category: </span>
                    {category}
                </div>
                <div className="itemDesc">
                    <span className="sideHeading"> Description: </span>
                    {desc}
                </div>
                <Link to="/">
                    <button className="backHome"> back home </button>
                </Link>
            </div>
        </section>
    );
}

export default SingleItem;