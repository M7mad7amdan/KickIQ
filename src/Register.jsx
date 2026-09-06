import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:3000/api/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
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

      setName("");
      setEmail("");
      setPassword("");

      navigate("/login");

    } catch (error) {
      console.error("Error registering user:", error);

      setError(error.message);

    } finally {
      setLoading(false);
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

        {/* Decorative Circles */}
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
        <div
          className="
            relative
            z-10
            max-w-md
          "
        >

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
            Football.
            <br />
            Understood better.
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
            Explore players, teams, matches and the numbers behind the game.
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

          {/* Back */}
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


          {/* Header */}
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
                text-[32px]
                sm:text-[36px]
                lg:text-[42px]

                leading-tight

                font-bold

                text-[#111827]
              "
            >
              Create your account
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
              Start building your own football experience.
            </p>

          </div>


          {/* Error */}
          {error && (
            <div
              className="
                mb-5

                bg-red-50

                border
                border-red-200

                text-red-600

                text-sm

                rounded-xl

                px-4
                py-3
              "
            >
              {error}
            </div>
          )}


          {/* Form */}
          <form
            className="
              space-y-5
              sm:space-y-6
            "
            onSubmit={handleSubmit}
          >

            {/* Name */}
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
                Name
              </label>

              <input
                type="text"
                value={name}
                required
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Your name"
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
                required
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

              <label
                className="
                  block

                  text-sm
                  font-medium

                  text-gray-700

                  mb-2
                "
              >
                Password
              </label>

              <input
                type="password"
                value={password}
                required
                minLength={8}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Minimum 8 characters"
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
              disabled={loading}
              className="
                w-full

                bg-blue-600

                hover:bg-blue-700

                disabled:bg-blue-400
                disabled:cursor-not-allowed

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
              {loading
                ? "Creating account..."
                : "Create account"}
            </button>

          </form>


          {/* Login */}
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
            Already have an account?{" "}

            <Link
              to="/login"
              className="
                text-blue-600

                font-semibold

                hover:text-blue-700

                transition
              "
            >
              Sign in
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}