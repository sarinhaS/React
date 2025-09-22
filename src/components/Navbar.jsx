import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 text-white">
      <Link to="/categories" className="font-bold">
        🍲 Receitinhas da mestre Sarinha
      </Link>
    </nav>
  );
}
