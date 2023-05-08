import { Link } from "react-router-dom";

export default function Menu() {
    function openMenu() {
        const sideMenu = document.getElementsByClassName("menu")[0];
        sideMenu.style.width = '230px';
        const content = document.getElementsByClassName("content")[0];
        content.style.opacity = '0.5';
        const top = document.getElementsByClassName("top-menu")[0];
        top.style.opacity = '0.5';
        content.addEventListener("click", function () {
            top.style.opacity = '1';
            content.style.opacity = '1';
            sideMenu.style.width = '0px';
        });
        top.addEventListener("click", function () {
            top.style.opacity = '1';
            content.style.opacity = '1';
            sideMenu.style.width = '0px';
        });
    }
    return (
        <>
            <div className="top-menu">
                <img src="menu.png" height={20} width={20} onClick={openMenu}></img>
                <p>PS documentation</p>
            </div>
            <div className="menu">
                <div className="menu-items">
                    <p id="menu-title">PS documentation <br></br> v1.0.0</p>
                    <input type="text" id="input-menu" placeholder='Search'></input>
                    <ul id="principal-elements">
                        <li><Link to="/">Introduction</Link></li>
                        <li><a>Basic elements</a></li>
                        <ul id="secondary-elements">
                            <li><Link to="/concept">Concept</Link></li>
                            <li><Link to="/relationship">Relationship</Link></li>
                            <li><Link to="/note">Note</Link></li>
                            <li><Link to="/negation">Negation</Link></li>
                            <li><Link to="/event">Event</Link></li>
                            <li><Link to="/conditional">Conditional</Link></li>
                            <li><Link to="/reference">Reference</Link></li>
                            <li><Link to="/implication">Connection</Link></li>
                            <li><Link to="/frame">Frame</Link></li>
                        </ul>
                        <li><Link to="/change">Changelog</Link></li>
                        <li><Link to="/additional">Extra</Link></li>
                    </ul>
                </div>

            </div>
        </>
    )
}
