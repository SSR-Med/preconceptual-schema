import Menu from "/src/Menu"
export default function Note() {
    return (
        <>
            <Menu />
            <div className="content">
                <div className='context-text'>
                    <h1>Notes</h1>
                    <p>It is usually connected to concepts, but sometimes it can be connected to dynamic relationships (although this is rarely used). Notes connected to concepts are used to provide adjectives or examples.
                    </p>
                    <p>Example:</p>
                    <img src="note.png" width={450} height={400}></img>
                </div>
            </div>
            <div id="vl">
            </div>
        </>
    )
}