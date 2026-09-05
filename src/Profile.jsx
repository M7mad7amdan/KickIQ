import { Link , useNavigate } from "react-router-dom";

export default function Profile() {
 const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className="min-h-screen bg-[#f5f7fa]">

      {/* Header */}
      <section className="bg-[#030f1e]">
        <div className="max-w-[1050px] mx-auto px-6 pt-20 pb-16">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <div>
              <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Profile
              </p>

              <h1 className="text-white text-5xl font-semibold tracking-tight">
                {user.name}
              </h1>
            </div>

            <Link
              to="/favorites"
              className="
                inline-flex
                items-center
                justify-center
                bg-[#b9d8ff]
                text-blue-700
                font-medium
                rounded-full
                px-6
                py-3
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
      <main className="max-w-[1050px] mx-auto px-6 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8">

          <div className="
            bg-white
            border border-slate-200
            rounded-[26px]
            p-8
          ">

            <div className="
              w-24 h-24
              rounded-full
              bg-[#e8f2ff]
              flex
              items-center
              justify-center
              text-3xl
              font-semibold
              text-blue-600
              mb-6
            ">
              {user.name.charAt(0)}
            </div>

            <h2 className="text-2xl font-semibold text-[#030f1e]">
              {user.name}
            </h2>

            <p className="text-slate-500 mt-2">
              {user.email}
            </p>

            <div className="border-t border-slate-100 mt-8 pt-6">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Member since
              </p>

              <p className="text-sm font-medium text-[#030f1e] mt-2">
                {user.joined}
              </p>
            </div>

          </div>


          {/* Account Info */}
          <div className="space-y-6">

            <div className="
              bg-white
              border border-slate-200
              rounded-[26px]
              p-8
            ">

              <div className="flex items-center justify-between mb-8">

                <h2 className="text-2xl font-semibold text-[#030f1e]">
                  Account
                </h2>

                <button
                  className="
                    text-sm
                    font-medium
                    text-blue-600
                    hover:text-blue-700
                    transition
                  "
                >
                  Edit
                </button>

              </div>

              <div className="space-y-6">

                <div>
                  <p className="text-sm text-slate-400 mb-2">
                    Name
                  </p>

                  <p className="text-[#030f1e] font-medium">
                    {user.name}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <p className="text-sm text-slate-400 mb-2">
                    Email
                  </p>

                  <p className="text-[#030f1e] font-medium">
                    {user.email}
                  </p>
                </div>

              </div>

            </div>


            {/* Activity */}
            <div className="
              bg-[#030f1e]
              rounded-[26px]
              p-8
              flex
              items-center
              justify-between
            ">

              <div>
                <p className="text-slate-400 text-sm">
                  Saved players
                </p>

                <p className="text-white text-4xl font-semibold mt-2">
                  {user.favorites}
                </p>
              </div>

              <Link
                to="/favorites"
                className="
                  w-12 h-12
                  rounded-full
                  bg-[#b9d8ff]
                  text-blue-700
                  flex
                  items-center
                  justify-center
                  text-xl
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
        <div className="mt-10 flex justify-end">

          <button
            className="
              text-sm
              font-medium
              text-red-500
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