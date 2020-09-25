import React from 'react'

import {Link} from 'react-router-dom'

import './Password.css'
import Lock from './lock.png'


const Password = (props) => {

    const [passwordText, ChangePasswordText] = React.useState("")
    const [correctAnswer, checkAnswer] = React.useState(false)
 
    const HandleChangePasswordText = (event) => {

        
        ChangePasswordText(event.target.value)
        handleCheckAnswer(event.target.value)

    }

    const handleCheckAnswer = (password) => {

        checkAnswer(false)


        if ((props.State === "past") && (password.toLowerCase() === "aleph")) {
            checkAnswer(true)
        }
        if ((props.State === "present") && (password === '3719')) {
            checkAnswer(true)
        }
        if ((props.State === "present") && (password === '3574159')) {
            checkAnswer(true)
        }
        if ((props.State === "future") && (password.toLowerCase() === 'universo infinito')) {
            checkAnswer(true)
        }
        if ((props.State === "infinite") && (password.toLowerCase() === 'la meta es descubrir el infinito valor de ti mismo')) {
            checkAnswer(true)
        }

        

    }


    const HandleChangeState = () => {

        let form = document.getElementById("Input")
        form.value = ""; checkAnswer(false); ChangePasswordText("")

        if (props.State === "past") {
            props.ChangeState("present")
        }

        if (props.State === "present") {
            props.ChangeState("future")
        }

        if (props.State === "future") {
            props.ChangeState("infinite")
        }
        
        if (props.State === "infinite") {
            props.ChangeState("end")
        }

    }


    return(
        <div className="password-div">
            
        <form className="password-form" onSubmit={e => { e.preventDefault(); }}>

        {
            props.State === "inicial" ? null 
            :   
            <img className="lock-image" src={Lock} alt="Candado" />
      
        }

        {
            props.State === "inicial" ? null 
            :    
            <input id="Input" className="password-input " type="text" onChange={HandleChangePasswordText} />
      
        }

        {
            props.State !== "inicial" ? 
             
                passwordText === "" ? <button  disabled  type="button" className="password-button "> Intentá </button>
                :

                correctAnswer ? null :   <button  disabled  type="button" className="password-button incorrect"> Intentá </button>
                    
            :null
        }
        
        {
                correctAnswer ?
                props.State === "past" ?
                    passwordText.toLowerCase() === "aleph" ?  <Link to="/9r353n7"> <button type="button" className="password-button correct" onClick={HandleChangeState}> Intentá </button> </Link>
                        :  null
                : null
            :null
  
        }

        {
                correctAnswer ?
                props.State === "present" ?
                     <Link to="/fu7u23"> <button type="button" className="password-button correct" onClick={HandleChangeState}> Intentá </button> </Link>
                       
                : null
            :null
  
        }

        {
                correctAnswer ?
                props.State === "future" ?
                     <Link to="/1nf1n173"> <button type="button" className="password-button correct" onClick={HandleChangeState}> Intentá </button> </Link>
                       
                : null
            :null
  
        }

        {
                correctAnswer ?
                props.State === "infinite" ?
                     <Link to="/3nd"> <button type="button" className="password-button correct" onClick={HandleChangeState}> Intentá </button> </Link>
                       
                : null
            :null
  
        }

        </form>
        </div>
    )
}

export default Password