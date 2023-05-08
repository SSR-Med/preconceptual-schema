import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <>
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
