import Article from "../comps/cont-comps/blog/article";
import Nav from "../comps/nav/nav";
import "../styles/index.css";


function About(){

    return(
        <>
            <Nav links={[{hr:"../../public/about-us.html",title:"About us"}, {hr:"../../public/index.html",title:"Home"}]}></Nav>
            <Article content={"Un articulo"}></Article>
        </>
    )
}

export default About;