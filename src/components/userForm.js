import React, { useState } from "react";

function UserForm(props) {

    const [userName, setUser] = useState({
        username: ''
    });
    const [password, setPass] = useState({
        password: ''
    });
    
    function changeUserName(e)
    {
      setUser({username: e.target.value});
    }
    function changePassword(e)
    {
      setPass({password: e.target.value});
    }


    function handleSubmit(e) {
        e.preventDefault();
        props.addUsers(userName.username, password.password);
        setUser({username: "" });
        setPass({password: ""});
    }
  


  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label>
          Username:
        </label>
      </h2>
      <input
        type="text"
        id={props.id}
        name="text"
        className = "center"
        value={userName.username}
        onChange={changeUserName}
      />
      <h2>
        <label>
          Password:
        </label>
      </h2>
      <input
        type="text"
        name="text"
        className = "center"
        value={password.password}
        onChange={changePassword}
      />
      <button type="submit">
        Submit
      </button>

    </form>
  );
}

export default UserForm;