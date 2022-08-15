import React from 'react'
import {Link, NavLink} from "react-router-dom"
import "./nav_styles.css"

const composeDoorItems = [
    {to: "/about", title: "Design & Price Your Door"},
    {to: "/our_partners", title: "Composite Front Doors"},
    {to: "/our_partners", title: "Modern Composite Doors"},
    {to: "/our_partners", title: "Timber Solid Core Doors"},
    {to: "/our_partners", title: "Composite Fire Doors"},
    {to: "/our_partners", title: "Composite Stable Doors"},
    {to: "/our_partners", title: "Non-Woodgrain Composite Doors"},
    {to: "/our_partners", title: "Side Panels"},
    {to: "/our_partners", title: "Top Lights"},
]
const upvcDoors = [
    {to: "/about", title: "UPVC Front Doors"},
    {to: "/our_partners", title: "UPVC Back Doors"},
    {to: "/our_partners", title: "UPVC Cottage Doors"},
    {to: "/our_partners", title: "UPVC Stable Doors"},
]
const navHeader = () => {

    return (
        <div className="nav_container">
            <Link to='/' className="title">Home</Link>
            <img src='/logo192.png' className="logo" alt="main_logo"/>

            <nav className="menu_container">

                <CustomMenuLink className="menu_parent" title="COMPOSITE DOORS" menuLinks={composeDoorItems}/>
                <CustomMenuLink className="menu_parent" title="UPVC DOORS" menuLinks={upvcDoors}/>
                <CustomMenuLink className="menu_parent" title="PATIO DOORS" menuLinks={composeDoorItems}/>
                <CustomMenuLink className="menu_parent" title="BIFOLD DOORS" menuLinks={composeDoorItems}/>
                <CustomMenuLink className="menu_parent" title="UPVC WINDOWS" menuLinks={composeDoorItems}/>

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
                    {printLinks(menuLinks)}

                </div>
            </div>
        </div>
    )
}

function printLinks(menuLinks) {
    return (menuLinks.map(e => {
        return (<NavLink to={e.to}>{e.title}</NavLink>)
    }));

}

function MenuComponent() {
    return (
        <div>

        </div>
    )
}

export default navHeader