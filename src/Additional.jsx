import Menu from './Menu.jsx'
export default function Additional() {
    return (
        <>
            <Menu />
            <div className="content">
                <div className='context-text'>
                    <h1>Additional Content</h1>
                    <p>Books:</p>
                    <ul>
                        <li>Jaramillo, C. (2012). The UNC-Method revisited: elements of the new approach: Eliciting software requirements in a complete, consistent, and correct way. https://www.amazon.com/UNC-Method-revisited-Eliciting-requirements-consistent/dp/3848407590</li>
                        <li>Jaramillo, C., Gelbukh, A., & Isaza, F. A. (2006). Pre-conceptual Schema: A Conceptual-Graph-Like Knowledge Representation for Requirements Elicitation. En Springer eBooks (pp. 27-37). https://doi.org/10.1007/11925231_3</li>
                    </ul>
                    <p>Videos:</p>
                    <ul>
                        <li>Solving logic problems with pre-conceptual schemas: https://www.youtube.com/watch?v=J2XwPxBF_1g</li>
                        <li>How you can represent a preconceptual schema in CASE tools: https://youtu.be/hb4aVWzyUFM</li>
                    </ul>
                </div>
            </div>
            <div id="vl">
            </div>
        </>
    )
}