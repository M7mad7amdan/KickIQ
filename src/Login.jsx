import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong"
        );
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login successful!");

      setEmail("");
      setPassword("");

      navigate("/");

    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  return (
    <div
      className="
        min-h-screen
        bg-[#f5f7fa]
        flex
      "
    >

      {/* Left Side */}
      <div
        className="
          hidden
          lg:flex

          lg:w-1/2

          bg-[#0B1220]

          relative
          overflow-hidden

          items-end

          p-10
          xl:p-16
        "
      >

        {/* Decorative circles */}
        <div
          className="
            absolute

            w-[320px]
            h-[320px]

            xl:w-[420px]
            xl:h-[420px]

            rounded-full

            border
            border-white/10

            -top-24
            -left-24

            xl:-top-32
            xl:-left-32
          "
        />

        <div
          className="
            absolute

            w-[220px]
            h-[220px]

            xl:w-[280px]
            xl:h-[280px]

            rounded-full

            border
            border-blue-500/20

            top-16
            left-16

            xl:top-20
            xl:left-20
          "
        />


        {/* Left Content */}
        <div className="relative z-10 max-w-md">

          <div
            className="
              flex
              items-center
              gap-3

              mb-6
              xl:mb-8
            "
          >

            <div
              className="
                w-3
                h-3

                bg-blue-500

                rounded-full
              "
            />

            <span
              className="
                text-blue-400

                text-xs
                xl:text-sm

                font-semibold

                tracking-widest

                uppercase
              "
            >
              KickIQ
            </span>

          </div>


          <h2
            className="
              text-white

              text-4xl
              xl:text-5xl

              font-semibold

              leading-[1.1]
            "
          >
            Back to
            <br />
            the game.
          </h2>

          <p
            className="
              text-gray-400

              mt-5
              xl:mt-6

              text-sm
              xl:text-base

              leading-7
            "
          >
            Your players, favorites and football data in one place.
          </p>

        </div>

      </div>


      {/* Right Side */}
      <div
        className="
          w-full
          lg:w-1/2

          flex
          items-center
          justify-center

          px-4
          sm:px-6
          md:px-8

          py-10
          sm:py-12
          lg:py-16
        "
      >

        <div className="w-full max-w-[420px]">

          {/* Back Link */}
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2

              text-xs
              sm:text-sm

              text-gray-500

              hover:text-gray-900

              mb-8
              sm:mb-10
              lg:mb-12

              transition
            "
          >
            ← Back to home
          </Link>


          {/* Heading */}
          <div
            className="
              mb-8
              sm:mb-10
            "
          >

            <p
              className="
                text-blue-600

                font-semibold

                text-xs
                sm:text-sm

                mb-2
                sm:mb-3
              "
            >
              KICKIQ ACCOUNT
            </p>

            <h1
              className="
                text-[34px]
                sm:text-[38px]
                lg:text-[42px]

                leading-tight

                font-bold

                text-[#111827]
              "
            >
              Welcome back
            </h1>

            <p
              className="
                text-sm
                sm:text-base

                text-gray-500

                mt-3
                sm:mt-4
              "
            >
              Sign in to continue to KickIQ.
            </p>

          </div>


          {/* Form */}
          <form
            className="
              space-y-5
              sm:space-y-6
            "
            onSubmit={handleSubmit}
          >

            {/* Email */}
            <div>

              <label
                className="
                  block

                  text-sm
                  font-medium

                  text-gray-700

                  mb-2
                "
              >
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="name@example.com"
                className="
                  w-full

                  bg-white

                  border
                  border-gray-200

                  rounded-xl

                  px-4

                  py-3
                  sm:py-3.5

                  text-sm
                  sm:text-base

                  text-gray-900

                  outline-none

                  transition

                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />

            </div>


            {/* Password */}
            <div>

              <div
                className="
                  flex
                  items-center
                  justify-between

                  gap-4

                  mb-2
                "
              >

                <label
                  className="
                    text-sm
                    font-medium

                    text-gray-700
                  "
                >
                  Password
                </label>

                <button
                  type="button"
                  className="
                    text-xs
                    sm:text-sm

                    text-blue-600

                    hover:text-blue-700

                    transition
                  "
                >
                  Forgot password?
                </button>

              </div>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Your password"
                className="
                  w-full

                  bg-white

                  border
                  border-gray-200

                  rounded-xl

                  px-4

                  py-3
                  sm:py-3.5

                  text-sm
                  sm:text-base

                  text-gray-900

                  outline-none

                  transition

                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="
                w-full

                bg-blue-600

                hover:bg-blue-700

                text-white

                font-semibold

                rounded-xl

                py-3
                sm:py-3.5

                transition

                mt-1
                sm:mt-2
              "
            >
              Sign in
            </button>

          </form>


          {/* Register */}
          <p
            className="
              text-center

              text-gray-500

              text-xs
              sm:text-sm

              mt-6
              sm:mt-8
            "
          >
            Don't have an account?{" "}

            <Link
              to="/register"
              className="
                text-blue-600

                font-semibold

                hover:text-blue-700

                transition
              "
            >
              Create account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}