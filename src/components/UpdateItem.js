import React, { useEffect, useRef, useState } from "react";


export default function UpdateItem(props){
    const [isEditing, setEditing] = useState(false);
    const [newDescription, setNewDescription] = useState('');

    function handleChange(e) {
        setNewDescription(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.editItem(props.id, props.username, newDescription);
        setNewDescription("");
        setEditing(false);
    }
    const editingTemplate =(
        <form   onSubmit={handleSubmit}>
            <div>
                <label htmlFor={props.id}>
                    New description for {props.name}
                </label>
                <input
                    id={props.id}
                    type="text"
                    value={newDescription}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="button" onClick={() => setEditing(false)}>
                    Cancel
                </button>
                <button type="submit">
                    Save
                </button>
            </div>
        </form>
    );


    const viewTemplate =(
        <div>
            <div>
                <h3>
                    {props.name} ${props.price}
                </h3>
                <ul className="liproducts">
                    <li>{props.description}</li>
                </ul>
                    
                
            </div>
            <div>
                <button type="button" onClick={() => setEditing(true)}>
                    Edit 
                </button>
            </div>
        </div>



    );
    return <li>{isEditing ? editingTemplate : viewTemplate}</li>


}