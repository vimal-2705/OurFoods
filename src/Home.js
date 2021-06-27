import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { v4 as uuid } from "uuid";
import { Link } from 'react-router-dom';
import items from './data';

function Home({ setMenu, Menu, filterItems, allCategories, setCategories }) {
    const [State, setState] = useState({
        id: uuid(),
        title: '',
        category: '',
        price: '',
        img: '',
        desc: ''
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Submit = () => {
        let num = items.length;
        setMenu([State, ...Menu]);
        handleClose();
        const obj = {
            id: State.id,
            title: State.title,
            category: State.category,
            price: State.price,
            img: State.img,
            desc: State.desc,
        }
        items[num] = obj;
        const newCategories = ['all', ...new Set(items.map((item) => item.category))];
        setCategories(newCategories);
    };

    const onchange = (event) => {
        setState({ ...State, [event.target.name]: event.target.value })
    };

    return (
        <section>
            <div className="navbar">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}> <div className="home">LOGO</div> </Link>
                <button className="itemadd" onClick={handleShow}> add item </button>
            </div>
            <div class="heading">
                <h1>Our Foods</h1>
            </div>
            <Modal show={show} onHide={handleClose} >
                <Modal.Body>
                    <div class="heading">
                        <h2>Add Item</h2>
                    </div>
                    <form>
                        <label for="name">Item Name</label>
                        <input type="text" className="inputName" id="name" name="title" onChange={onchange} required /><br /><br />
                        <label for="category">Category</label>
                        <input type="text" className="inputCategory" id="category" name="category" onChange={onchange} required /><br /><br />
                        <label for="image" className="noteText">Item Image</label>
                        <input type="text" className="inputImage" id="image" name="img" onChange={onchange} required /><br /><br />
                        <label for="amount">Amount</label>
                        <input type="text" className="inputAmount" id="amount" name="price" onChange={onchange} required /><br /><br />
                        <label for="description">Description</label>
                        <input type="text" className="inputDescription" id="description" name="desc" onChange={onchange} required /><br /><br />
                        <div className="note"> ! Refreshing the page will delete the Added Items </div>
                        <div className="form-btn">
                            <button className="close-btn" onClick={handleClose}> Close </button>
                            <button className="saveChanges-btn" onSubmit={Submit}> Save Changes </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </section >
    );
}

export default Home;