import React from 'react'
import './Main.css'

import {Link} from 'react-router-dom'
import Data from '../Data'

const Main = (props) => {

    const handleChangeState = () => {
        props.ChangeState("past")
    }


    return(
        <div className="main-div">

        {
            props.State === "inicial" ?

            Data[0].texto.map(data => {
               return  <p key={Math.random()}> {data} </p>
            }) 
            

            :
            props.text.map(data => {
               return <p key={Math.random()}> {data} </p>
            }) 
      
        }

        <div className="center-div">
        {
            props.State === "inicial" ?
            <Link to="p457"><button className="main-button" onClick={handleChangeState}> Intentá </button></Link>
            :
            null
        }
        
        { 
            props.State === "inicial" ? null :

                props.link ? <a href={props.link} target="blank" className="message-link"> Mensaje </a>
                
                : null
        }
        </div>

        </div>
    )
}

export default Main