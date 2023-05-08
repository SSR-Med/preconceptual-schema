import Menu from "/src/Menu"
export default function Conditional() {
    return (
        <>
            <Menu />
            <div className="content">
                <div className='context-text'>
                    <h1>Conditional</h1>
                    <p>It is made by the logical comparison of two concepts (=,&lt;,&gt;). Conditionals act as
                        triggers, initiating dynamic relationships.
                    </p>
                    <p>Example:</p>
                    <img src="conditional.png" width={550}></img>
                </div>
            </div>
            <div id="vl">
            </div>
        </>
    )
}