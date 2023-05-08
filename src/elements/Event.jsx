import Menu from "/src/Menu"
export default function Event() {
    return (
        <>
            <Menu />
            <div className="content">
                <div className='context-text'>
                    <h1>Event</h1>
                    <p>Events are the elements that allow the system to start. A dynamic relationship needs a previous item (conditional, event, another dynamic relationship) to start.
                        Events are similar to dynamic relationships, but the difference is that an event doesn't need another item to start. One suggestion
                        is to never use a dynamic triad as an event. Instead, try to think of the event for that dynamic triad.
                    </p>
                    <p>Example of a normal event:</p>
                    <img src="normalEvent.png" width={250} height={230}></img>
                    <p>Example of a dynamic triad (event):</p>
                    <img src="anormalEvent.png" width={250} height={230}></img>
                </div>
            </div>
            <div id="vl">
            </div>
        </>
    )
}