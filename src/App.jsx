import { useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'

function App() {
  // Concept: Class concept and leaf concept (Intersection too)
  // Relations: Structural relation, dynamic relation and achievement relation.
  // Note.
  // Negation.
  // Events.
  // Conditionals.
  // Conjunctions
  return (
    <>
      <Menu />
      <div className="content">
        <div className='context-text'>
          <h1>PS: Preconceptual Schema</h1>
          <p>The objective of this project is to improve understanding of preconceptual schemas and how to use them. It also serves as a repository for different versions of preconceptual schemas, with a focus on explaining the latest version. Our secondary objective is to make learning about preconceptual schemas a positive and rewarding experience, as we believe in the tremendous benefits of utilizing this powerful tool.</p>
          <h2>What is a Preconceptual Schema?</h2>
          <p>It's a graphical representation for a system or idea,  which serves as a basis for creating other popular schemas such as class diagrams, state machine diagrams, and communication diagrams.<br></br> Some examples of the applications of preconceptual schemas include:</p>
          <ul>
            <li>Functions of a QA.</li>
            <li>A game of volleyball.</li>
            <li>Elicitation of videogame requirements.</li>
          </ul>
          <p>There are more examples, which you can check in this <a href="https://www.linkedin.com/groups/12461017/">Linkedln group</a>.</p>
        </div>
      </div>
      <div id="vl">
      </div>
    </>
  )
}

export default App
