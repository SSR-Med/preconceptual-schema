export default function Menu() {
    return (
        <>
            <div className="menu">
                <div className="menu-items">
                    <p id="menu-title">PS documentation <br></br> v1.0.0</p>
                    <input type="text" id="input-menu" placeholder='Search'></input>
                    <ul id="principal-elements">
                        <li><a href="\">Introduction</a></li>
                        <li><a>Basic elements</a></li>
                        <ul id="secondary-elements">
                            <li><a href="/concept">Concept</a></li>
                            <li><a href="/relationship">Relationship</a></li>
                            <li><a href="/note">Note</a></li>
                            <li><a href="/negation">Negation</a></li>
                            <li><a href="/event">Event</a></li>
                            <li><a href="/conditional">Conditional</a></li>
                            <li><a href="/reference">Reference</a></li>
                            <li><a href="/implication">Connection</a></li>
                            <li><a href="/frame">Frame</a></li>
                        </ul>
                        <li><a href="/change">Changelog</a></li>
                        <li><a href="/additional">Extra</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}
