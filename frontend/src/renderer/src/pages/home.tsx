import { Link } from "react-router-dom"

export function Home(){
  return (
    <div>
      <h1>Página Home</h1>
      <Link to="/create">ir</Link>
    </div>
  )
}

