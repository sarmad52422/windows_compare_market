import {Link, NavLink} from "react-router-dom"
import "./nav_styles.css"

const navHeader = () => {
    return (
        <div className="nav_container">
            <Link to='/' className="title">Home</Link>
            <img src='/logo192.png' className="logo" alt="main_logo"/>

            <nav className="menu_container">

                <CustomMenuLink className="menu_parent" title="COMPOSITE DOORS"/>
                <CustomMenuLink className="menu_parent" title="UPVC DOORS"/>
                <CustomMenuLink className="menu_parent" title="PATIO DOORS"/>
                <CustomMenuLink className="menu_parent" title="BIFOLD DOORS"/>
                <CustomMenuLink className="menu_parent" title="UPVC WINDOWS"/>

            </nav>
        </div>
    )
}



function CustomMenuLink({className, title, menuLinks}) {
    return (
        <div className={className}>
            <NavLink to='#'>{title}</NavLink>
            <div className="inner_menu_container">
                <div className="ul_class">
                    <NavLink to='/about'>Inner Menu 1</NavLink>
                    <NavLink to='#'>Inner Menu 1</NavLink>
                    <NavLink to='#'>Inner Menu 1</NavLink>
                    <NavLink to='#'>Inner Menu 1</NavLink>

                </div>
            </div>
        </div>
    )
}

export default navHeader