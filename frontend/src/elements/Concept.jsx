import Menu from "/src/Menu"
export default function Concept() {
    return (
        <>
            <Menu />
            <div className="content">
                <div className='context-text'>
                    <h1>Concepts</h1>
                    <p>A concept is the simplest element of language and is used to represent ideas and thoughts.
                        The meaning of a concept is not fixed and can vary depending on the context and the rules that govern its use. In terms of the relationship between concepts and PS , concepts are the foundational elements of PS, and can be used to represent entities such as people, groups, organizations, attributes, etc. Interactions between concepts can affect the behavior of both the concepts and the system as a whole. The dynamic nature of a system can lead to changes, and it is the role of the analyst to represent these changes. </p>
                    <p>There are 3 types of concepts:</p>
                    <ul>
                        <li><a href="#CC">Class concept</a></li>
                        <li><a href="#LC">Leaf concept</a></li>
                        <li><a href="#IC">Intersection concept</a></li>
                    </ul>
                    <h3>Basic rules:</h3>
                    <ul>
                        <li>Keep it simple and avoid using complex concepts. If a concept is too complex, try to break it down into simpler ones or search for a more straightforward alternative.</li>
                        <li>Use singular nouns only; for example, "Bear" is an accepted concept, not "Bears".</li>
                        <li>Avoid using acronyms and use the complete words instead. Remember that the reader should be able to understand the system just by reading the preconceptual schema.</li>
                        <li>Make sure your statements are clear and easy to understand.</li>
                        <li>0 adjectives, just sustantives.</li>
                    </ul>
                    <h2 id="CC">Class Concept</h2>
                    <p>A class concept is an element that has any type of relationship, whether structural or dynamic.
                        It is important to note that individuals are the only type of class concept accepted
                        for dynamic relationships, meaning that objects are not available for dynamic relationships. Groups of individuals are also not recommended for dynamic relationships; instead, it is important to identify the individual who is responsible for the action within the group.
                    </p>
                    <h3>Rules:</h3>
                    <ul>
                        <li>Class concepts can't be repeated, use references if your space is limited. </li>
                        <li>Class concepts should have attributes.</li>
                        <li>"Developer", "manager" and "business analyst" are class concepts that can have dynamic relationships,
                            while "Beer", "Team", "Organization" are class concepts that can't have dynamic relationships. </li>
                    </ul>
                    <h3>Style rules:</h3>
                    <ul>
                        <li>Color: 00B0F0</li>
                        <li>Font Color: 000000</li>
                        <li>Shape: Rectangular</li>
                    </ul>
                    <h2 id="LC">Leaf Concept</h2>
                    <p>A leaf concept is an element used as an attribute for a class concept. Unlike class concepts, leaf concepts can be repeated.</p>
                    <h3>Style rules:</h3>
                    <ul>
                        <li>Color: BFBFBF</li>
                        <li>Font Color: 000000</li>
                        <li>Shape: Rectangular</li>
                    </ul>
                    <h2 id="IC">Intersection Concept</h2>
                    <p>This is a special type of concept: It only exists when it is being used by two or more classes as an attribute.</p>
                    <h3>Style rules:</h3>
                    <ul>
                        <li>Color: 92D050</li>
                        <li>Font Color: 000000</li>
                        <li>Shape: Rectangular</li>
                    </ul>
                </div>
            </div>
            <div id="vl">
            </div>
        </>
    )
}