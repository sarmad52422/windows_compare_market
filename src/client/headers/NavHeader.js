import {Link, NavLink} from "react-router-dom"
import "./nav_styles.css"

const navHeader = () => {
    return (
        <nav className="nav_style">
            <Link to='/' className="title">Home</Link>
            <ul>
                <CustomLink routePath="/about" title="About"/>
                <CustomLink routePath="/our_partners" title="Partners"/>
            </ul>

        </nav>
    )
}

function CustomLink({routePath, title}) {
    return (
        <li>
            <NavLink to={routePath} activeClassName="active">{title}</NavLink>
        </li>
    )

}

export default navHeader