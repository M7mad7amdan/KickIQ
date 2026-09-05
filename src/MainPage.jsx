import NavBar from './Components/NavBar'
import HomePageLogo from './Components/HomePageLogo'
import FeaturedAnalysis from './Components/FeaturedAnalysis'
import PlayersInHomeScreen from './Components/PlayersInHomeScreen'
export default function MainPage() {
    return (
        <div>

                <NavBar />
              <div className="bg-[#030f1e] overflow-hidden mt-10">
  <div className="flex justify-between max-w-[1200px] mx-auto items-center min-h-[700px] px-6">

    <div className="flex flex-col items-start max-w-[450px]">
      <h1 className="text-5xl font-bold leading-tight text-white">
        Understand the game like never before
      </h1>

      <p className="text-lg text-gray-400 mt-4">
        In-depth analysis and insights you won't find anywhere else
      </p>

      <button className="self-center bg-blue-600 mt-8 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
        Get Started
      </button>
    </div>

    <div>
      <HomePageLogo />
    </div>

  </div>
</div>
                <FeaturedAnalysis />
                <PlayersInHomeScreen />
            </div>
      
    )
}