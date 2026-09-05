import  { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }
        else {
            alert("User registered successfully!");
            setName("");
            setEmail("");
            setPassword("");
            navigate("/login");
        }
        console.log(data);
    } catch (error) {
        console.error("Error registering user:", error);
    }
}
  return (
    <div className="min-h-screen bg-[#f5f7fa] flex">

      <div className="hidden lg:flex w-1/2 bg-[#0B1220] relative overflow-hidden items-end p-16">

        <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10 -top-32 -left-32"></div>
        <div className="absolute w-[280px] h-[280px] rounded-full border border-blue-500/20 top-20 left-20"></div>

        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
              KickIQ
            </span>
          </div>

          <h2 className="text-white text-5xl font-semibold leading-[1.1]">
            Football.
            <br />
            Understood better.
          </h2>

          <p className="text-gray-400 mt-6 text-base leading-7">
            Explore players, teams, matches and the numbers behind the game.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">

        <div className="w-full max-w-[420px]">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-12"
          >
            ← Back to home
          </Link>

          <div className="mb-10">
            <p className="text-blue-600 font-semibold text-sm mb-3">
              KICKIQ ACCOUNT
            </p>

            <h1 className="text-[42px] leading-tight font-bold text-[#111827]">
              Create your account
            </h1>

            <p className="text-gray-500 mt-4">
              Start building your own football experience.
            </p>
          </div>


          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="
                  w-full
                  bg-white
                  border border-gray-200
                  rounded-xl
                  px-4 py-3.5
                  text-gray-900
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="
                  w-full
                  bg-white
                  border border-gray-200
                  rounded-xl
                  px-4 py-3.5
                  text-gray-900
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="
                  w-full
                  bg-white
                  border border-gray-200
                  rounded-xl
                  px-4 py-3.5
                  text-gray-900
                  outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />
            </div>


            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                rounded-xl
                py-3.5
                transition
                mt-2
              "
            >
              Create account
            </button>

          </form>


          <p className="text-center text-gray-500 text-sm mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}