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

        <p className={props.fontStyle}>
            {
                props.State === "inicial" ?
                Data[0].texto : props.text
            
            }
        </p>

        
        {
            props.State === "inicial" ?
            <Link to="p457"><button className="main-button" onClick={handleChangeState}> Intentá </button></Link>
            :
            null
        }
        



        </div>
    )


}

export default Main