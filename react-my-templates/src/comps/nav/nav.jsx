function NavItem({changeApp, title}){
    return (
        <div className="nav-item">
            <a onClick={changeApp}>{title}</a>
        </div>
    )
}

function Nav({changeApp, links}){
    return(
        <nav className="faste-nav">
            <div className="nav-container">
                {
                    
                    links.map((lnk, i)=>{
                        <NavItem changeApp={changeApp} key={i} title={lnk.title}></NavItem>
                    })
                }
            </div>
        </nav>
    )
}
export default Nav;