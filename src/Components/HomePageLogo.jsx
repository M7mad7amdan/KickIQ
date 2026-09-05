import Logo from '../Images/KickIQLOGO.png'
import { BiFootball, BiNews } from "react-icons/bi";
import { FaChartBar } from "react-icons/fa";
import { TbTournament } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";

export default function HomePageLogo() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-[600px] h-[600px] MainDivHomePage">

                {/* Lines */}
                <div className="absolute left-1/2 top-1/2 w-[240px] h-[1px] bg-gray-500/60 origin-left rotate-[-90deg]"></div>
                <div className="absolute left-1/2 top-1/2 w-[240px] h-[1px] bg-gray-500/60 origin-left rotate-[-30deg]"></div>
                <div className="absolute left-1/2 top-1/2 w-[240px] h-[1px] bg-gray-500/60 origin-left rotate-[30deg]"></div>
                <div className="absolute left-1/2 top-1/2 w-[240px] h-[1px] bg-gray-500/60 origin-left rotate-[90deg]"></div>
                <div className="absolute left-1/2 top-1/2 w-[240px] h-[1px] bg-gray-500/60 origin-left rotate-[150deg]"></div>
                <div className="absolute left-1/2 top-1/2 w-[240px] h-[1px] bg-gray-500/60 origin-left rotate-[210deg]"></div>


                {/* Center */}
                <div
                    className="
                    absolute left-1/2 top-1/2
                    -translate-x-1/2 -translate-y-1/2
                    w-[200px] h-[200px]
                    rounded-full bg-white shadow-md
                    flex justify-center items-center
                    z-10
                    MainLogoHomePage
                    "
                >
                    <img
                        src={Logo}
                        className="w-[120px] h-[120px]"
                        alt="KickIQ Logo"
                    />
                </div>


                {/* Matches */}
                <div className="absolute left-[250px] top-[10px]">
                    <div className="MatchLogoHomePage">
                        <div className="node">
                            <BiFootball className="text-3xl text-blue-700" />
                            <h3>Matches</h3>
                        </div>
                    </div>
                </div>


                {/* Statistics */}
                <div className="absolute left-[458px] top-[130px]">
                    <div className="StatisticsLogoHomePage">
                        <div className="node">
                            <FaChartBar className="text-3xl text-blue-700" />
                            <h3>Statistics</h3>
                        </div>
                    </div>
                </div>


                {/* Players */}
                <div className="absolute left-[458px] top-[370px]">
                    <div className="PlayersLogoHomePage">
                        <div className="node">
                            <IoPersonSharp className="text-3xl text-blue-700" />
                            <h3>Players</h3>
                        </div>
                    </div>
                </div>


                {/* Teams */}
                <div className="absolute left-[250px] top-[490px]">
                    <div className="TeamsLogoHomePage">
                        <div className="node">
                            <MdPeopleAlt className="text-3xl text-blue-700" />
                            <h3>Teams</h3>
                        </div>
                    </div>
                </div>


                {/* Cups */}
                <div className="absolute left-[42px] top-[370px]">
                    <div className="CupsLogoHomePage">
                        <div className="node">
                            <TbTournament className="text-3xl text-blue-700" />
                            <h3>Cups</h3>
                        </div>
                    </div>
                </div>


                {/* News */}
                <div className="absolute left-[42px] top-[130px]">
                    <div className="NewsLogoHomePage">
                        <div className="node">
                            <BiNews className="text-3xl text-blue-700" />
                            <h3>News</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}