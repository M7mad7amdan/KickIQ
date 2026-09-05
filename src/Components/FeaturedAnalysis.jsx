import FeaturedAnalysisimg from "../Images/FeaturedAnalysisPicture.png";
import FinalWorldCup from "../Images/FinalWorldCup.png";
export default function FeaturedAnalysis() {
  return (
    <section className="max-w-[1200px] mx-auto py-20 px-6">

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">

          <div className="w-full h-[260px]">
            <img
              className="w-full h-full object-cover"
              src={FeaturedAnalysisimg}
              alt="France vs Argentina analysis"
            />
          </div>

          <div className="flex flex-col items-start p-8">

           

            <h2 className="text-3xl font-bold text-gray-900">
              The Lusail War
            </h2>

            <h3 className="text-lg text-gray-600 mt-2">
              France vs Argentina
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              The night that made football history. Relive one of the most
              unforgettable finals through data, moments, and analysis.
            </p>

            <button className="mt-7 text-blue-600 font-medium hover:text-blue-700 transition">
              Read Full Analysis 
            </button>

          </div>
        </div>


        <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">

          <div className="w-full h-[260px]">
            <img
              className="w-full h-full object-cover"
              src={FinalWorldCup}
              alt="Tactical football analysis"
            />
          </div>

          <div className="flex flex-col items-start p-8">

           
            <h2 className="text-3xl font-bold text-gray-900">
              Inside the Final
            </h2>

            <h3 className="text-lg text-gray-600 mt-2">
              How the match changed
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              A deeper look at the tactical shifts, key moments, and decisions
              that shaped one of football's greatest finals.
            </p>

            <button className="mt-7 text-blue-600 font-medium hover:text-blue-700 transition">
              Read Full Analysis 
            </button>

          </div>
        </div>

      </div>

    </section>
  );
}