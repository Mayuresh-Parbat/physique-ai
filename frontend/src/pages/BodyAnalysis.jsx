import Navbar from "../components/Navbar";

function BodyAnalysis() {
return ( <div className="min-h-screen bg-[#050816] text-white">

```
  <Navbar />

  <div className="max-w-7xl mx-auto px-8 pt-32 pb-20">

    <h1 className="text-6xl font-black mb-4">
      AI Body Analysis
    </h1>

    <p className="text-slate-400 text-xl mb-12">
      Upload your physique photo and receive AI-powered insights.
    </p>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Upload Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

        <h2 className="text-3xl font-bold mb-6">
          Upload Photo
        </h2>

        <div className="border-2 border-dashed border-cyan-500 rounded-3xl h-80 flex items-center justify-center text-center">

          <div>

            <p className="text-cyan-400 text-2xl font-bold mb-4">
              Drag & Drop Image
            </p>

            <p className="text-slate-500">
              JPG, PNG up to 10MB
            </p>

          </div>

        </div>

        <button className="mt-8 w-full bg-cyan-400 text-black py-4 rounded-2xl font-bold text-lg hover:bg-cyan-300 transition">
          Analyze Physique
        </button>

      </div>

      {/* Results Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

        <h2 className="text-3xl font-bold mb-8">
          AI Results
        </h2>

        <div className="space-y-6">

          <div className="bg-slate-950 rounded-2xl p-5">
            <p className="text-slate-400 mb-2">
              Estimated Body Fat
            </p>

            <h3 className="text-4xl font-black text-cyan-400">
              18%
            </h3>
          </div>

          <div className="bg-slate-950 rounded-2xl p-5">
            <p className="text-slate-400 mb-2">
              Muscle Development
            </p>

            <h3 className="text-2xl font-bold text-green-400">
              Above Average
            </h3>
          </div>

          <div className="bg-slate-950 rounded-2xl p-5">
            <p className="text-slate-400 mb-2">
              AI Recommendation
            </p>

            <p className="text-slate-300">
              Increase protein intake to 150g daily and focus on progressive overload training.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>


);
}

export default BodyAnalysis;
