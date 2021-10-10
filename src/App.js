import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News  from './Components/News';

import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



const App=()=> {

const [progress, setProgress] = useState(0)
const [mode, setMode] = useState("light")

const DarkMode=()=>{
  if (mode==='light'){
   setMode("dark")
   document.body.style.backgroundColor="black"
}
  else{
setMode("light")
document.body.style.backgroundColor="white"
    }
}
return (
      <div>
        <Router>
        <Navbar DarkMode={DarkMode} mode={mode}/>
        

        <LoadingBar
        height= {2}
        color='#f11946'
        progress={progress}
        />
        

        <Switch>
          <Route exact path="/"><News setProgress={setProgress}   pagesize="24" key="general" country="in" category="general" mode={mode}/> </Route>
          <Route exact path="/business"><News setProgress={setProgress} pagesize="24"  key="business" country="in" category="business"  mode={mode}/> </Route>
          <Route exact path="/technology"><News setProgress={setProgress} pagesize="24"  key="echnology" country="in" category="technology" mode={mode}/> </Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} pagesize="24"  key="entertainment" country="in" category="entertainment" mode={mode}/> </Route>
          <Route exact path="/science"><News setProgress={setProgress} pagesize="24"  key="science" country="in" category="science" mode={mode}/> </Route>
          <Route exact path="/health"><News setProgress={setProgress} pagesize="24"  key="health" country="in" category="health" mode={mode}/> </Route>
          <Route exact path="/sports"><News setProgress={setProgress} pagesize="24"  key="sports" country="in" category="sports" mode={mode}/> </Route>

        </Switch>
        </Router>
        
      </div>
    )
  
}
export default App