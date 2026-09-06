import Logo from '../Images/KickIQLOGO.png'

import { BiFootball, BiNews } from "react-icons/bi"
import { FaChartBar } from "react-icons/fa"
import { TbTournament } from "react-icons/tb"
import { IoPersonSharp } from "react-icons/io5"
import { MdPeopleAlt } from "react-icons/md"

export default function HomePageLogo() {

  const nodes = [
    {
      name: "Matches",
      icon: BiFootball,
      position: "left-[250px] top-[10px]",
    },
    {
      name: "Statistics",
      icon: FaChartBar,
      position: "left-[458px] top-[130px]",
    },
    {
      name: "Players",
      icon: IoPersonSharp,
      position: "left-[458px] top-[370px]",
    },
    {
      name: "Teams",
      icon: MdPeopleAlt,
      position: "left-[250px] top-[490px]",
    },
    {
      name: "Cups",
      icon: TbTournament,
      position: "left-[42px] top-[370px]",
    },
    {
      name: "News",
      icon: BiNews,
      position: "left-[42px] top-[130px]",
    },
  ]

  const lineRotations = [
    -90,
    -30,
    30,
    90,
    150,
    210,
  ]

  return (
    <div
      className="
        flex
        justify-center
        items-center

        w-[300px]
        h-[300px]

        sm:w-[420px]
        sm:h-[420px]

        lg:w-[600px]
        lg:h-[600px]

        overflow-visible
      "
    >

      <div
        className="
          relative
          w-[600px]
          h-[600px]

          scale-[0.5]
          sm:scale-[0.7]
          lg:scale-100

          origin-center

          shrink-0
        "
      >

        {/* Outer Circle */}
        <div
          className="
            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[480px]
            h-[480px]

            rounded-full

            border
            border-blue-500/10
          "
        />


        {/* Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[350px]
            h-[350px]

            rounded-full

            bg-blue-500/5

            blur-3xl
          "
        />


        {/* Lines */}
        {lineRotations.map((rotation) => (
          <div
            key={rotation}
            className="
              absolute

              left-1/2
              top-1/2

              w-[240px]
              h-[1px]

              bg-gradient-to-r

              from-blue-500/40
              to-transparent

              origin-left
            "
            style={{
              transform: `rotate(${rotation}deg)`
            }}
          />
        ))}


        {/* Center Logo */}
        <div
          className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[190px]
            h-[190px]

            rounded-full

            bg-[#07182d]

            border
            border-blue-500/30

            shadow-[0_0_60px_rgba(59,130,246,0.15)]

            flex
            justify-center
            items-center

            z-20
          "
        >

          <div
            className="
              w-[155px]
              h-[155px]

              rounded-full

              bg-white

              flex
              justify-center
              items-center
            "
          >

            <img
              src={Logo}
              alt="KickIQ Logo"
              className="
                w-[105px]
                h-[105px]
                object-contain
              "
            />

          </div>

        </div>


        {/* Nodes */}
        {nodes.map((item) => {

          const Icon = item.icon

          return (
            <div
              key={item.name}
              className={`absolute ${item.position} z-30`}
            >

              <div
                className="
                  w-[100px]
                  h-[100px]

                  rounded-2xl

                  bg-[#081b31]/90

                  border
                  border-blue-500/20

                  flex
                  flex-col
                  justify-center
                  items-center

                  gap-2

                  text-white

                  shadow-lg

                  backdrop-blur-md

                  hover:-translate-y-2
                  hover:border-blue-500/50
                  hover:bg-[#0b2340]

                  transition-all
                  duration-300
                "
              >

                <Icon
                  className="
                    text-[28px]
                    text-blue-400
                  "
                />

                <h3
                  className="
                    text-sm
                    font-medium
                  "
                >
                  {item.name}
                </h3>

              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}