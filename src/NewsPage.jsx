import { useEffect, useState } from "react";

export default function News() {
  const [category, setCategory] = useState("All");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    "All",
    "Premier League",
    "Champions League",
    "Players",
    "Analysis",
  ];

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        setError("");

        let url = "http://localhost:3000/api/news";

        if (category !== "All") {
          url += `?category=${encodeURIComponent(category)}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        console.log("NEWS RESPONSE:", data);

        if (!response.ok) {
          throw new Error(data.message || "Unable to load news");
        }

        if (!Array.isArray(data)) {
          throw new Error("Invalid news data received");
        }

        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.message);
        setNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [category]);

  const featured = news[0];
  const remainingNews = news.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F6F7F9] flex items-center justify-center">
        <p className="text-sm text-slate-500">Loading news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F6F7F9] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-xl font-semibold text-[#08111F]">
          News unavailable
        </h2>

        <p className="text-sm text-slate-500 mt-2">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F7F9]">

      {/* Header */}
      <section className="bg-[#08111F]">
        <div className="max-w-[1120px] mx-auto px-6 py-16">

          <div className="flex flex-col gap-8">

            <div>
              <p className="text-sm text-slate-400 mb-3">
                Football
              </p>

              <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
                News
              </h1>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">

              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`
                    whitespace-nowrap
                    px-4
                    py-2.5
                    rounded-full
                    text-sm
                    transition
                    ${
                      category === item
                        ? "bg-white text-[#08111F] font-medium"
                        : "bg-white/5 text-slate-400 border border-white/10 hover:text-white"
                    }
                  `}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* Content */}
      <main className="max-w-[1120px] mx-auto px-6 py-12">

        {featured ? (
          <>

            {/* Featured News */}
            <a
              href={featured.link}
              target="_blank"
              rel="noreferrer"
              className="group block mb-12"
            >

              <article
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-[1.25fr_0.75fr]
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  overflow-hidden
                "
              >

                <div className="h-[320px] lg:h-[420px] bg-slate-100 overflow-hidden">

                  <img
                    src={
                      featured.image ||
                      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={featured.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />

                </div>


                <div className="p-7 md:p-9 flex flex-col justify-end">

                  <div className="flex items-center gap-3 mb-5">

                    <span className="text-xs font-medium text-[#4F8FEA]">
                      {featured.source || "Unknown source"}
                    </span>

                    <span className="w-1 h-1 rounded-full bg-slate-300" />

                    <span className="text-xs text-slate-400">
                      {featured.date || "Recent"}
                    </span>

                  </div>

                  <h2
                    className="
                      text-2xl
                      md:text-3xl
                      font-semibold
                      leading-tight
                      text-[#08111F]
                      transition
                      group-hover:text-[#4F8FEA]
                    "
                  >
                    {featured.title}
                  </h2>

                  <p className="text-sm text-slate-500 mt-5">
                    Read full story →
                  </p>

                </div>

              </article>

            </a>


            {/* News Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-10">

              {remainingNews.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >

                  <article>

                    <div
                      className="
                        h-[245px]
                        rounded-2xl
                        overflow-hidden
                        bg-slate-100
                        border
                        border-slate-200
                      "
                    >

                      <img
                        src={
                          item.image ||
                          "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=80"
                        }
                        alt={item.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          transition
                          duration-500
                          group-hover:scale-[1.03]
                        "
                      />

                    </div>


                    <div className="pt-5">

                      <div className="flex items-center gap-3 mb-3">

                        <span className="text-xs font-medium text-[#4F8FEA]">
                          {item.source || "Unknown source"}
                        </span>

                        <span className="w-1 h-1 rounded-full bg-slate-300" />

                        <span className="text-xs text-slate-400">
                          {item.date || "Recent"}
                        </span>

                      </div>

                      <h2
                        className="
                          text-xl
                          font-semibold
                          leading-snug
                          text-[#08111F]
                          transition
                          group-hover:text-[#4F8FEA]
                        "
                      >
                        {item.title}
                      </h2>

                    </div>

                  </article>

                </a>
              ))}

            </section>

          </>
        ) : (

          <div className="min-h-[350px] flex flex-col items-center justify-center text-center">

            <h2 className="text-xl font-semibold text-[#08111F]">
              No news found
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Try another category.
            </p>

          </div>

        )}

      </main>

    </div>
  );
}