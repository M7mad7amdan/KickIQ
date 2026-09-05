import Logo from "../Images/KickIQLOGO.png";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className="flex justify-center items-center">
      <nav className="bg-blue-300 shadow-md rounded-full w-[65%] flex justify-between items-center px-4 py-2">

        <img
          src={Logo}
          className="h-15 w-15"
          alt="KickIQ Logo"
        />

        <ul className="flex justify-between items-center py-2">

          <li className="px-4 py-2 text-white cursor-pointer hover:rounded-full hover:transition ease-in duration-700 hover:bg-blue-700/50">
            <Link to="/teams">Teams</Link>
          </li>

          <li className="px-4 py-2 text-white cursor-pointer hover:rounded-full hover:transition ease-in duration-700 hover:bg-blue-700/50">
            <Link to="/players">Players</Link>
          </li>

          <li className="px-4 py-2 text-white cursor-pointer hover:rounded-full hover:transition ease-in duration-700 hover:bg-blue-700/50">
            <Link to="/cups">Tournaments</Link>
          </li>

          <li className="px-4 py-2 text-white cursor-pointer hover:rounded-full hover:transition ease-in duration-700 hover:bg-blue-700/50">
            <Link to="/matches">Matches</Link>
          </li>

          {token ? (
            <>
              <li className="px-4 py-2 text-white cursor-pointer hover:rounded-full hover:transition ease-in duration-700 hover:bg-blue-700/50">
                <Link to="/favorites">Favorites</Link>
              </li>

              <li className="px-4 py-2 text-white cursor-pointer hover:rounded-full hover:transition ease-in duration-700 hover:bg-blue-700/50">
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-white cursor-pointer hover:rounded-full hover:transition ease-in duration-700 hover:bg-red-500/50"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="px-4 py-2 text-white cursor-pointer hover:rounded-full hover:transition ease-in duration-700 hover:bg-blue-700/50">
                <Link to="/login">Login</Link>
              </li>

              <li className="px-4 py-2 text-white cursor-pointer hover:rounded-full hover:transition ease-in duration-700 hover:bg-blue-700/50">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}

        </ul>
      </nav>
    </div>
  );
}