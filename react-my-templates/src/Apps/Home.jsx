import Nav from '../comps/nav/nav.jsx';
import About from './About.jsx';

function Home({changeApp, pageRoots}){
    return(
        <Nav changeApp={changeApp} links={pageRoots}></Nav>
    )
}

export default Home;
