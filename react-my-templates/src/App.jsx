import { useState } from 'react'
import Nav from './comps/nav/nav';
import Home from './Apps/Home';
import About from './Apps/About';


let pageRoots=[
  {
    id:'home', 
    app:<Home></Home>
  },
  {
    id: 'about', 
    app:<About></About>
  }
]

function App() {
  function changeApp(newApp){
    pageRoots.forEach(root=>{if (root.id == newApp)setApp(root.app)})
  }
  let [app, setApp] = useState(<Home changeApp={changeApp} pageRoots={pageRoots}></Home>)
  return (
    <>
      {app}
    </>
  )
}

export default App
