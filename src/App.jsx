import { Link } from "react-router-dom"



function App() {
  return (
  <div>
      <div className="d-flex justify-content-center mt-1">
    <Link to={"/projects"}>
      <h1 id="projects">Projects</h1>
    </Link>
    </div>
      <div className="d-flex justify-content-center mt-1">
    <Link to={"/Contact"}>
      <h1 id="projects">Contact</h1>
    </Link>
    </div>
      <div className="d-flex justify-content-center mt-1">
      <Link to="/Aboutme">
      <h1 id="projects">About</h1>
    </Link>
    </div>
    <div className="d-flex justify-content-center" id="h6left">
      <h5 id="h6font">Owen Coombs</h5>
    </div>
      <div className="d-flex justify-content-center" id="h6left">
        <p>Full-Stack Software Engineer</p>
      </div>
      
  </div>
  )
}


export default App
