import Menu from "/src/Menu"
export default function Implication() {
    return (
        <>
            <Menu />
            <div className="content">
                <div className='context-text'>
                    <h1>Connection</h1>
                    <p>A connection is the link between concepts and relationships. It can connect references, concepts, and relationships. </p>
                    <p>Rules:</p>
                    <ul>
                        <li>There should be no intersections between connections, as this can make readability difficult.</li>
                        <li>Only one-way connections are allowed</li>
                    </ul>
                    <p>Style rules:</p>
                    <ul>
                        <li>Line is rounded.</li>
                        <li>Line end is sharp.</li>
                    </ul>
                    <p>Example:</p>
                    <img src="connection.png" height={300}></img>
                    <h1>Implication</h1>
                    <p>This type of connection is meant to express causality between dynamic relationships and achievement relationships.</p>
                    <h2>Implication (Dynamic relationship)</h2>
                    <p>Rules:</p>
                    <ul>
                        <li>Every dynamic relationship should have another element as a trigger, such as a dynamic relationship, event, or conditional</li>
                        <li>There should also be an origin for dynamic relationships, which can be a conditional or an event.</li>
                    </ul>
                    <p>Example:</p>
                    <img src="dIm.png"></img>
                    <h2>Implication (Achievement relationship)</h2>
                    <p>Rules:</p>
                    <ul>
                        <li>Every achievement relationship should have another achievement relationship as a trigger.</li>
                        <li>There should be an achievement relationship that functions as the origin.</li>
                    </ul>
                    <p>Example:</p>
                    <img src="AI.png"></img>
                    <h2>Conjunction</h2>
                    <p>It works as a joiner for implications.</p>
                    <p>Example:</p>
                    <img src="conjunc.png" height={450} width={550}></img>
                </div>
            </div>
            <div id="vl">
            </div>
        </>
    )
}