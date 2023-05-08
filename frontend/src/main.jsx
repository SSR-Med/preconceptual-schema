import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './Error.jsx'
import Concept from './elements/Concept.jsx'
import Note from './elements/Note.jsx'
import Negation from './elements/Negation.jsx'
import Event from './elements/Event.jsx'
import Reference from './elements/Reference.jsx'
import Relationship from './elements/Relationship.jsx'
import Conditional from './elements/Conditional.jsx'
import Change from './elements/Change.jsx'
import Implication from './elements/Implication.jsx'
import Additional from './Additional.jsx'
import Frame from './elements/Frame.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/concept",
    element: <Concept />,
  },
  {
    path: "/note",
    element: <Note />,
  },
  {
    path: "/negation",
    element: <Negation />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/reference",
    element: <Reference />,
  },
  {
    path: "/relationship",
    element: <Relationship />,
  },
  {
    path: "/conditional",
    element: <Conditional />,
  },
  {
    path: "/change",
    element: <Change />,
  },
  {
    path: "/implication",
    element: <Implication />,
  },
  {
    path: "/additional",
    element: <Additional />,
  },
  {
    path: "/frame",
    element: <Frame />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
