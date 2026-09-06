import NavBar from './Components/NavBar'
import HomePageLogo from './Components/HomePageLogo'
import FeaturedAnalysis from './Components/FeaturedAnalysis'
import PlayersInHomeScreen from './Components/PlayersInHomeScreen'

export default function MainPage() {
  return (
    <div className="bg-[#030f1e] min-h-screen">

      {/* Hero */}
      <div className="bg-gradient-to-b from-[#07182d] to-[#030f1e]">

        <NavBar />

        <div
          className="
            max-w-[1200px]
            mx-auto

            px-4
            sm:px-6
            lg:px-8

            py-10
            sm:py-12
            lg:py-0

            min-h-0
            lg:min-h-[570px]

            flex
            flex-col
            lg:flex-row

            items-center
            justify-between

            gap-8
            sm:gap-10
            lg:gap-6
          "
        >

          {/* Left Side */}
          <div
            className="
              w-full
              max-w-[520px]

              text-center
              lg:text-left

              flex
              flex-col
              items-center
              lg:items-start
            "
          >

            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl

                font-bold

                leading-[1.08]
                lg:leading-[1.05]

                text-white
              "
            >
              Understand football

              <span className="text-blue-500">
                {' '}beyond the score.
              </span>
            </h1>


            <p
              className="
                text-sm
                sm:text-base
                lg:text-lg

                text-gray-400

                mt-5
                sm:mt-6

                max-w-[470px]

                leading-relaxed
              "
            >
              Explore players, teams and tournaments through advanced
              statistics, comparisons and data-driven football insights.
            </p>


            {/* Buttons */}
            <div
              className="
                w-full
                sm:w-auto

                flex
                flex-col
                sm:flex-row

                gap-3
                sm:gap-4

                mt-7
                sm:mt-8
              "
            >

              <button
                className="
                  w-full
                  sm:w-auto

                  bg-blue-600
                  text-white

                  px-6
                  sm:px-7

                  py-3

                  rounded-xl

                  hover:bg-blue-500

                  transition
                  duration-300
                "
              >
                Explore Analytics
              </button>


              <button
                className="
                  w-full
                  sm:w-auto

                  border
                  border-gray-700

                  text-white

                  px-6
                  sm:px-7

                  py-3

                  rounded-xl

                  hover:bg-white/5

                  transition
                  duration-300
                "
              >
                View Players
              </button>

            </div>


            {/* Statistics */}
            <div
              className="
                w-full

                grid
                grid-cols-3

                gap-3
                sm:gap-8
                lg:gap-10

                mt-8
                sm:mt-10
              "
            >

              <div>
                <p
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-white
                  "
                >
                  32
                </p>

                <p
                  className="
                    text-xs
                    sm:text-sm

                    text-gray-500
                  "
                >
                  Teams
                </p>
              </div>


              <div>
                <p
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-white
                  "
                >
                  800+
                </p>

                <p
                  className="
                    text-xs
                    sm:text-sm

                    text-gray-500
                  "
                >
                  Players
                </p>
              </div>


              <div>
                <p
                  className="
                    text-xl
                    sm:text-2xl

                    font-bold

                    text-white
                  "
                >
                  64
                </p>

                <p
                  className="
                    text-xs
                    sm:text-sm

                    text-gray-500
                  "
                >
                  Matches
                </p>
              </div>

            </div>

          </div>


          {/* Right Side */}
          <div
            className="
              w-full

              flex
              items-center
              justify-center

              mt-4
              lg:mt-0
            "
          >
            <HomePageLogo />
          </div>

        </div>

      </div>


      {/* Featured Analysis */}
      <FeaturedAnalysis />


      {/* Players */}
      <PlayersInHomeScreen />

    </div>
  )
}