import React from "react";

const MyButton = (props) => {
    const handleClick = () =>{
        //alert("clicked!")
        props.onButtonClick(props.text)
    }
    return( 
        <button onClick={handleClick}> {props.text} </button>
        
    )
}
export default MyButton