import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

async function handleSubmit(e) {
    e.preventDefault(); 
    try {
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }
        else {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            alert("Login successful!");
            setEmail("");
            setPassword("");
            navigate("/");
        }
        console.log(data);
    } catch (error) {
        console.error("Error logging in:", error);
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
            Back to
            <br />
            the game.
          </h2>

          <p className="text-gray-400 mt-6 text-base leading-7">
            Your players, favorites and football data in one place.
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
              Welcome back
            </h1>

            <p className="text-gray-500 mt-4">
              Sign in to continue to KickIQ.
            </p>
          </div>


          <form className="space-y-6" onSubmit={handleSubmit}>

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
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </button>
              </div>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
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
              Sign in
            </button>

          </form>


          <p className="text-center text-gray-500 text-sm mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Create account
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}