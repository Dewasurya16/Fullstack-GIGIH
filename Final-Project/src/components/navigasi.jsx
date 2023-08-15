import { Link } from "react-router-dom";

const Navigasi = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-5xl mx-auto py-4 mb-8">
        <Link to="/">
          <span className="">Home</span>
        </Link>
      </div>
    </div>
  )
}

export default Navigasi;