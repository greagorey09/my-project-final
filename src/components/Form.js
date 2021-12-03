import React, { useState } from "react";

function Form(props) {

  const [nProduct, setnProduct] = useState({
    name: ''
})
  const [dProduct, setdProduct] = useState({
    description: ''
  })
  const [uProduct, setuProduct] = useState({
    username: ''
  })
  const [pProduct, setpProduct] = useState({
    price: ''
  })
  
  
  function changeName(e)
  {
    setnProduct({name: e.target.value});
  }
  function changeDescription(e){
    setdProduct({description: e.target.value});
  }
  function changeUserName(e){
    setuProduct({username: e.target.value});
  }
  function changePrice(e){
    setpProduct({price: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addProduct(nProduct.name, dProduct.description,uProduct.username,pProduct.price);
    setnProduct({name: ""
              });
    setdProduct({
      description: ""
    });
    setuProduct({
      username: ""
    })
  }
  return (
    <form className = "center" onSubmit={handleSubmit}>
      <h2>
        <label>
          Please enter your username:
        </label>
      </h2>
      <input
        type="text"
        name="text"
        value={uProduct.username}
        onChange={changeUserName}
      />
      <h2>
        <label>
          Product Name:
        </label>
      </h2>
      <input
        type="text"
        name="text"
        value={nProduct.name}
        onChange={changeName}
      />
      <h2>
        <label>
          Description:
        </label>
      </h2>
      <input
        type="text"
        name="text"
        value={dProduct.description}
        onChange={changeDescription}
      />
      <h2>
        <label>
          Please enter the price:
        </label>
      </h2>
      <input
        type="text"
        name="text"
        value={pProduct.price}
        onChange={changePrice}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;