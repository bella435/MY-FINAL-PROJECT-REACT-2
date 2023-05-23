import React from "react";
import { useState } from 'react';

const Contact = () => {


    function MyForm() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const handleSubmit = (event) => {
          event.preventDefault();
          alert(`The name you entered was: ${name}`)
          console.log(email);

        }
      
        return (
          <form onSubmit={handleSubmit}>
            <label>Name:
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>email:
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <input type="submit" />
          </form>
        )
      }




    return (
          
              <MyForm/>
    
    )
}
export default Contact


{/* <h2>Contact</h2>
            <h3>Bellagnaly@gmail.com</h3>
            <h3>347-986-4581</h3> */}
