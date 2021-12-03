import React, { useState, useRef, useEffect } from "react";
import Form from "./Form";
import UserForm from "./userForm";
import UpdateItem from "./UpdateItem";
import DeleteForm from "./DeleteForm";
import { nanoid } from "nanoid";

function Home() {
  const [state, setState] = useState({
    visible: 0
  })
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    const data = localStorage.getItem('listOfUsers');
    if(data){
      setUsers(JSON.parse(data));
    }
  }, []);
  useEffect(() =>{
    localStorage.setItem('listOfUsers', JSON.stringify(users));
  });

  function addProduct(name, description, username, price){
    const newProduct = { id: "todo-" + nanoid(), name: name, description: description, price: price}

    users.map(i =>{
      if(i.username === username){
        const newArray = [...i.items, newProduct]
        i.items = newArray
        
      }
    });

  }

  function addUsers(username, password){
    const newUser = {id: "todo-" + nanoid(), username: username, password: password, items: []}
    setUsers([...users, newUser]);
    
  }

  function editItem(id,username, newDescription){
    users.map(i =>{
      if(i.username === username){
        i.items.map(j =>{
          if(j.id === id){
            j.description = newDescription;
          }
        });
      }
    });
  
  }
  

  function deleteUser(username, password){
    const remainingUsers = users.filter(user => username !== user.username && password !== user.password);
    setUsers(remainingUsers);
  }

  const listUsers = users.map(i => (
    <div className="liproducts">
      <h2>
        {i.username}:
      </h2>
    
    {i.items.map(j => (
      <UpdateItem
        username={i.username}
        id={j.id}
        name={j.name}
        price={j.price}
        description={j.description}
        editItem={editItem}
        />

    ))
    }
    </div>
));

  
  
  return (
    <div className="btn">
      <h1 className="center" >Project</h1>

      <button type="Button"  onClick={() => {setState({visible: 0}); }}>
        Add Items
      </button>
      <button type="button" onClick={() => {setState({visible: 1}); }}>
        Show All Users
      </button>

      <button type="button"  onClick={() => {setState({visible: 2});}}>
        Create New User
      </button>
      <button type="button" onClick={() => {setState({visible: 3});}}>
        Delete User
      </button>

     {state.visible===0 ? (<Form addProduct={addProduct} /> ) : state.visible===1  ? (listUsers) : (state.visible===2 ? (<UserForm addUsers={addUsers} />)  : <DeleteForm deleteUser={deleteUser} />    )}
      
    </div>
  );
}

export default Home;
