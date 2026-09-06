import Logo from "../Images/KickIQLOGO.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setMenuOpen(false);

    navigate("/login");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="flex justify-center items-center px-4 pt-4">

      <nav
        className="
          relative
          bg-blue-300
          shadow-md

          rounded-2xl
          lg:rounded-full

          w-full
          max-w-[1200px]

          flex
          justify-between
          items-center

          px-4
          sm:px-6

          py-2

          z-50
        "
      >

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={Logo}
            className="
              w-12
              h-12
              sm:w-14
              sm:h-14
              object-contain
            "
            alt="KickIQ Logo"
          />
        </Link>


        {/* Desktop Menu */}
        <ul
          className="
            hidden
            lg:flex

            items-center

            gap-1
          "
        >

          <li>
            <Link
              to="/teams"
              className="
                block
                px-4
                py-2

                text-white

                rounded-full

                hover:bg-blue-700/50

                transition
                duration-300
              "
            >
              Teams
            </Link>
          </li>


          <li>
            <Link
              to="/players"
              className="
                block
                px-4
                py-2

                text-white

                rounded-full

                hover:bg-blue-700/50

                transition
                duration-300
              "
            >
              Players
            </Link>
          </li>


          <li>
            <Link
              to="/cups"
              className="
                block
                px-4
                py-2

                text-white

                rounded-full

                hover:bg-blue-700/50

                transition
                duration-300
              "
            >
              Tournaments
            </Link>
          </li>


          <li>
            <Link
              to="/matches"
              className="
                block
                px-4
                py-2

                text-white

                rounded-full

                hover:bg-blue-700/50

                transition
                duration-300
              "
            >
              Matches
            </Link>
          </li>


          {token ? (
            <>
              <li>
                <Link
                  to="/favorites"
                  className="
                    block
                    px-4
                    py-2

                    text-white

                    rounded-full

                    hover:bg-blue-700/50

                    transition
                    duration-300
                  "
                >
                  Favorites
                </Link>
              </li>


              <li>
                <Link
                  to="/profile"
                  className="
                    block
                    px-4
                    py-2

                    text-white

                    rounded-full

                    hover:bg-blue-700/50

                    transition
                    duration-300
                  "
                >
                  Profile
                </Link>
              </li>


              <li>
                <button
                  onClick={handleLogout}
                  className="
                    px-4
                    py-2

                    text-white

                    rounded-full

                    hover:bg-red-500/50

                    transition
                    duration-300

                    cursor-pointer
                  "
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="
                    block
                    px-4
                    py-2

                    text-white

                    rounded-full

                    hover:bg-blue-700/50

                    transition
                    duration-300
                  "
                >
                  Login
                </Link>
              </li>


              <li>
                <Link
                  to="/register"
                  className="
                    block
                    px-4
                    py-2

                    text-white

                    rounded-full

                    hover:bg-blue-700/50

                    transition
                    duration-300
                  "
                >
                  Register
                </Link>
              </li>
            </>
          )}

        </ul>


        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden

            w-10
            h-10

            flex
            items-center
            justify-center

            rounded-full

            text-white

            hover:bg-blue-700/30

            transition
          "
          aria-label="Toggle navigation menu"
        >

          {menuOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}

        </button>


        {/* Mobile Menu */}
        {menuOpen && (

          <div
            className="
              absolute

              top-[70px]
              left-0

              w-full

              bg-[#07182d]

              border
              border-white/10

              rounded-2xl

              shadow-xl

              p-4

              lg:hidden
            "
          >

            <ul className="flex flex-col gap-2">

              <li>
                <Link
                  to="/teams"
                  onClick={closeMenu}
                  className="
                    block
                    px-4
                    py-3

                    text-white

                    rounded-xl

                    hover:bg-blue-600/20

                    transition
                  "
                >
                  Teams
                </Link>
              </li>


              <li>
                <Link
                  to="/players"
                  onClick={closeMenu}
                  className="
                    block
                    px-4
                    py-3

                    text-white

                    rounded-xl

                    hover:bg-blue-600/20

                    transition
                  "
                >
                  Players
                </Link>
              </li>


              <li>
                <Link
                  to="/cups"
                  onClick={closeMenu}
                  className="
                    block
                    px-4
                    py-3

                    text-white

                    rounded-xl

                    hover:bg-blue-600/20

                    transition
                  "
                >
                  Tournaments
                </Link>
              </li>


              <li>
                <Link
                  to="/matches"
                  onClick={closeMenu}
                  className="
                    block
                    px-4
                    py-3

                    text-white

                    rounded-xl

                    hover:bg-blue-600/20

                    transition
                  "
                >
                  Matches
                </Link>
              </li>


              {token ? (
                <>
                  <li>
                    <Link
                      to="/favorites"
                      onClick={closeMenu}
                      className="
                        block
                        px-4
                        py-3

                        text-white

                        rounded-xl

                        hover:bg-blue-600/20

                        transition
                      "
                    >
                      Favorites
                    </Link>
                  </li>


                  <li>
                    <Link
                      to="/profile"
                      onClick={closeMenu}
                      className="
                        block
                        px-4
                        py-3

                        text-white

                        rounded-xl

                        hover:bg-blue-600/20

                        transition
                      "
                    >
                      Profile
                    </Link>
                  </li>


                  <li>
                    <button
                      onClick={handleLogout}
                      className="
                        w-full

                        text-left

                        px-4
                        py-3

                        text-red-400

                        rounded-xl

                        hover:bg-red-500/10

                        transition

                        cursor-pointer
                      "
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      onClick={closeMenu}
                      className="
                        block
                        px-4
                        py-3

                        text-white

                        rounded-xl

                        hover:bg-blue-600/20

                        transition
                      "
                    >
                      Login
                    </Link>
                  </li>


                  <li>
                    <Link
                      to="/register"
                      onClick={closeMenu}
                      className="
                        block
                        px-4
                        py-3

                        text-white

                        rounded-xl

                        hover:bg-blue-600/20

                        transition
                      "
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}

            </ul>

          </div>

        )}

      </nav>

    </div>
  );
}