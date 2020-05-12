import React, { useState, useEffect } from "react";
import axios from "axios";
import trashIcon from "../images/icon-trash.svg";

export default function ShoppingList() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");


    useEffect(() => {
        async function fetchItems() {
            try {
                // Make req to API
                const result = await axios("/api/items");

                setItems(result.data);
            } catch (err) {
                console.error(err);
            }
            
        }

        fetchItems();
    }, []);

    async function handleSubmitItem(event) {
        event.preventDefault();

        const newItem = {
            name: name
        }

        try {
            // Make req to API
            const addedItem = await axios.post("/api/items", newItem);

            setItems([
                ...items,
                addedItem.data
            ]);

            setName(""); // Clear input
        } catch (err) {
            console.error(err);
        }
    }

    async function deleteItem(id) {
        try {
            setItems(items.filter(item => item._id !== id));
            
            // Make req to API
            await axios.delete(`/api/items/${id}`);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <main className="main">
            <form onSubmit={handleSubmitItem} className="form">
                <div className="form-group">
                    <input
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        name="name"
                        id="item"
                        placeholder="Enter new item"
                        type="text"
                        className="form-group__input"
                    />
                </div>
                <button type="submit" className="form-group__submit">Add Item</button>
            </form>
            <ul className="shopping-list">
                {items.map(({ _id, name }) => (
                    <li className="shopping-list__item" key={_id}>
                        <button onClick={()=> deleteItem(_id)} className="shopping-list__item__delete">
                            <img src={trashIcon} alt="Trashcan delete icon" className="delete-icon"/>
                        </button>
                        <span>
                            {name}
                        </span>
                    </li>
                ))}
            </ul>
        </main>
    );
}