import Menu from "/src/Menu"
export default function Reference() {
    return (
        <>
            <Menu />
            <div className="content">
                <div className='context-text'>
                    <h1>Reference</h1>
                    <p>References are used to connect items that are not able to connect due to their distance, making the text easier to understand.</p>
                    <h3>Basic rules:</h3>
                    <ul>
                        <li>There should be only one pair of references with the same number.</li>
                        <li>There is no problem with using different colors for the references; just don't use a lot of colors.</li>
                        <li>References are like portals; use them wisely.</li>
                    </ul>
                    <p>Example:</p>
                    <img src="reference.png"></img>
                </div>
            </div>
            <div id="vl">
            </div>
        </>
    )
}