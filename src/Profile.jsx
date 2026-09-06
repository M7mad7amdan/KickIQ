import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f5f7fa] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#030f1e]">
          No profile found
        </h2>

        <p className="text-sm text-slate-500 mt-2">
          Please sign in to view your profile.
        </p>

        <Link
          to="/login"
          className="
            mt-6
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-full
            text-sm
            font-medium
            hover:bg-blue-700
            transition
          "
        >
          Sign in
        </Link>
      </div>
    );
  }

  const firstLetter = user.name?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className="min-h-screen bg-[#f5f7fa]">

      {/* Header */}
      <section className="bg-[#030f1e]">

        <div
          className="
            max-w-[1050px]
            mx-auto

            px-4
            sm:px-6
            lg:px-8

            pt-12
            sm:pt-16
            lg:pt-20

            pb-10
            sm:pb-12
            lg:pb-16
          "
        >

          <div
            className="
              flex
              flex-col

              md:flex-row
              md:items-end
              md:justify-between

              gap-6
              md:gap-8
            "
          >

            <div className="min-w-0">

              <p
                className="
                  text-blue-400

                  text-xs
                  sm:text-sm

                  font-semibold

                  tracking-widest
                  uppercase

                  mb-2
                  sm:mb-3
                "
              >
                Profile
              </p>

              <h1
                className="
                  text-white

                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-semibold

                  tracking-tight

                  break-words
                "
              >
                {user.name}
              </h1>

            </div>

            <Link
              to="/favorites"
              className="
                inline-flex
                items-center
                justify-center

                w-full
                sm:w-auto

                bg-[#b9d8ff]

                text-blue-700

                font-medium

                rounded-full

                px-5
                sm:px-6

                py-3

                text-sm

                transition

                hover:bg-[#a8cefb]
              "
            >
              View Favorites
            </Link>

          </div>

        </div>

      </section>


      {/* Content */}
      <main
        className="
          max-w-[1050px]
          mx-auto

          px-4
          sm:px-6
          lg:px-8

          py-8
          sm:py-10
          lg:py-14
        "
      >

        <div
          className="
            grid
            grid-cols-1

            lg:grid-cols-[0.8fr_1.2fr]

            gap-5
            sm:gap-6
            lg:gap-8
          "
        >

          {/* Profile Card */}
          <div
            className="
              bg-white

              border
              border-slate-200

              rounded-2xl
              sm:rounded-[26px]

              p-5
              sm:p-6
              lg:p-8
            "
          >

            <div
              className="
                w-20
                h-20

                sm:w-24
                sm:h-24

                rounded-full

                bg-[#e8f2ff]

                flex
                items-center
                justify-center

                text-2xl
                sm:text-3xl

                font-semibold

                text-blue-600

                mb-5
                sm:mb-6
              "
            >
              {firstLetter}
            </div>


            <h2
              className="
                text-xl
                sm:text-2xl

                font-semibold

                text-[#030f1e]

                break-words
              "
            >
              {user.name}
            </h2>


            <p
              className="
                text-sm
                sm:text-base

                text-slate-500

                mt-2

                break-all
              "
            >
              {user.email}
            </p>


            <div
              className="
                border-t
                border-slate-100

                mt-6
                sm:mt-8

                pt-5
                sm:pt-6
              "
            >

              <p
                className="
                  text-[10px]
                  sm:text-xs

                  uppercase

                  tracking-wider

                  text-slate-400
                "
              >
                Member since
              </p>

              <p
                className="
                  text-sm

                  font-medium

                  text-[#030f1e]

                  mt-2
                "
              >
                {user.joined || "Not available"}
              </p>

            </div>

          </div>


          {/* Right Side */}
          <div
            className="
              space-y-5
              sm:space-y-6
            "
          >

            {/* Account */}
            <div
              className="
                bg-white

                border
                border-slate-200

                rounded-2xl
                sm:rounded-[26px]

                p-5
                sm:p-6
                lg:p-8
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between

                  gap-4

                  mb-6
                  sm:mb-8
                "
              >

                <h2
                  className="
                    text-xl
                    sm:text-2xl

                    font-semibold

                    text-[#030f1e]
                  "
                >
                  Account
                </h2>

                <button
                  className="
                    text-xs
                    sm:text-sm

                    font-medium

                    text-blue-600

                    hover:text-blue-700

                    transition
                  "
                >
                  Edit
                </button>

              </div>


              <div
                className="
                  space-y-5
                  sm:space-y-6
                "
              >

                <div>

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      text-slate-400

                      mb-2
                    "
                  >
                    Name
                  </p>

                  <p
                    className="
                      text-sm
                      sm:text-base

                      text-[#030f1e]

                      font-medium

                      break-words
                    "
                  >
                    {user.name}
                  </p>

                </div>


                <div
                  className="
                    border-t
                    border-slate-100

                    pt-5
                    sm:pt-6
                  "
                >

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      text-slate-400

                      mb-2
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      text-sm
                      sm:text-base

                      text-[#030f1e]

                      font-medium

                      break-all
                    "
                  >
                    {user.email}
                  </p>

                </div>

              </div>

            </div>


            {/* Activity */}
            <div
              className="
                bg-[#030f1e]

                rounded-2xl
                sm:rounded-[26px]

                p-5
                sm:p-6
                lg:p-8

                flex
                items-center
                justify-between

                gap-4
              "
            >

              <div>

                <p
                  className="
                    text-slate-400

                    text-xs
                    sm:text-sm
                  "
                >
                  Saved players
                </p>

                <p
                  className="
                    text-white

                    text-3xl
                    sm:text-4xl

                    font-semibold

                    mt-2
                  "
                >
                  {user.favorites ?? 0}
                </p>

              </div>


              <Link
                to="/favorites"
                className="
                  shrink-0

                  w-10
                  h-10

                  sm:w-12
                  sm:h-12

                  rounded-full

                  bg-[#b9d8ff]

                  text-blue-700

                  flex
                  items-center
                  justify-center

                  text-lg
                  sm:text-xl

                  transition

                  hover:scale-105
                "
              >
                →
              </Link>

            </div>

          </div>

        </div>


        {/* Logout */}
        <div
          className="
            mt-8
            sm:mt-10

            flex
            justify-center
            sm:justify-end
          "
        >

          <button
            className="
              w-full
              sm:w-auto

              text-sm
              font-medium

              text-red-500

              border
              border-red-200

              rounded-full

              px-5
              py-2.5

              hover:bg-red-50
              hover:text-red-600

              transition
            "
            onClick={handleLogout}
          >
            Log out
          </button>

        </div>

      </main>

    </div>
  );
}