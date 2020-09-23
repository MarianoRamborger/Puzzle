import React from 'react';
import './App.css';

import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'
import Password from './Password/Password.js'

import Data from './Data'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
  //Link
} from "react-router-dom";




const App = () => {

  const [State, ChangeState] = React.useState("inicial");

  return (

    <Router>

      <div className="app-wrapper">
        <div className={`content-wrapper ${State}`}>

        <Switch>

          <Route exact path="/">
          
            <Main ChangeState={ChangeState}  State={State} text={Data[0].texto} />
            
          </Route>


          <Route exact path="/p457">
          
            <Main State={State} ChangeState={ChangeState} text={Data[1].texto}/ >

            <Password ChangeState={ChangeState} State={State} />

          </Route>

          <Route exact path="/9r353n7">

            <Main State={State} ChangeState={ChangeState} text={Data[2].texto}/ >

            <Password ChangeState={ChangeState} State={State} />

          </Route>


           <Route exact path="/fu7u23">

              <Main State={State} ChangeState={ChangeState} text={Data[3].texto} fontStyle={"white"} />

            <Password ChangeState={ChangeState} State={State} />

          </Route>


           <Route exact path="/1nf1n173">

              <Main State={State} ChangeState={ChangeState} text={Data[4].texto} fontStyle={"white"} />

          <Password ChangeState={ChangeState} State={State} />

          </Route>



        </Switch>

      </div>
    </div>
    <Footer />

    </Router>



  );
}

export default App;
