import Menu from "/src/Menu"
export default function Relationship() {
    return (
        <>
            <Menu />
            <div className="content">
                <div className='context-text'>
                    <h1>Relationship</h1>
                    <p>Relationships are the elements that allow to connect concepts between themselves, there are 3 types of relationships:</p>
                    <ul>
                        <li><a href="#SR">Structural relationship</a></li>
                        <li><a href="#DR">Dynamic relationship</a></li>
                        <li><a href="#AR">Achievement relationship</a></li>
                    </ul>
                    <h2 id="SR">Structural relationship</h2>
                    <p>There are two type of structural relationships:</p>
                    <ul>
                        <li>Has relationship: It means that the class concept has a concept as an attribute. </li>
                        <li>Is relationship: This is a hierarchy where the class concept is a child of another concept. </li>
                    </ul>
                    <p>Example (Has):</p>
                    <img src="has.png"></img>
                    <p>Example (Is):</p>
                    <img src="is.png" width={550}></img>
                    <p>The bug report is a "child" of an incident</p>
                    <h2 id="DR">Dynamic relationship</h2>
                    <p>It represents actions between concepts of the system, it must change the state of other concept (the verb should affect the state of the system).</p>
                    <p>Rules:</p>
                    <ul>
                        <li>Create two or more different dynamic relationships if there are two or more class concepts with the same dynamic relationship. Never share the same dynamic relationship, even if it is from the same class concept.</li>
                        <li>Verbs should be in third-person singular present tense.</li>
                    </ul>
                    <p>Example:</p>
                    <img src="dynamic.png" width={550} height={430}></img>
                    <h2 id="AR">Achievement relationship</h2>
                    <p>It represents realization, maintenance and improvement verbs. This type of relationship can be connected to concepts and relationships (structural and dynamic).</p>
                    <p>Example:</p>
                    <img src="ar.png"></img>
                </div>
            </div>
            <div id="vl">
            </div>
        </>
    )
}