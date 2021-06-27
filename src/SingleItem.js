import { React } from 'react';
import { Link } from 'react-router-dom';

function SingleItem({ menuItems }) {
    const x = window.location.href;
    const y = x.split("/");
    let z = y[y.length - 1];
    const IdItem = menuItems.filter((item) => (item.id) == z);
    const { title, price, img, desc, category } = IdItem[0];

    return (
        <section className="singleItem">
            <div className="singleItemContainer">
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
            </div>
        </section>
    );
}

export default SingleItem;