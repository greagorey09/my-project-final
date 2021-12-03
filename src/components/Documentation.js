import React from "react";


function Documentation() {
    return (
        <div>
            <h1>Documentation</h1>
            <h2>Instructions:</h2>
            <p>This is supposed to act like a simple online market similar to craiglist.
            </p>
            <ul>
                <li>Add Item: Creates a form where you give the item you want to sell a name, description
                    and a price under a user.
                </li>
                <li>Show all Users:
                    Lists all the items available in the website under each user.
                </li>
                <li>
                    Create new user:
                    Creates a user account asking for a username and password
                </li>
                <li>
                    Delete User:
                    Deletes the given account
                </li>
            </ul>
            <h2>Checklist:</h2>
            <ul>
                <li>Five components: Form, userForm, DeleteForm, UpdateItem, Home</li>
                <li>Event handlers: Adding, removing editing item</li>
                <li>Local storage for each user</li>
                <li>Client side routing: Documentation</li>
                <li>Public Api:</li>
                <li>Global State:</li>
            </ul>
        </div>
        
    );
  }
  
  export default Documentation;