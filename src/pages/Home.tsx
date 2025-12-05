import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import posts from "../data/posts";

const Home = () => {
  const truncate = (str: string, maxLength: number) => {
    return str.length <= maxLength ? str : str.slice(0, maxLength) + "...";
  };

  return (
    <>
      <Hero />
      <Pillars />

      <section id="blog-post" className="p-10 place-content-center">
        <h2 className="text-center text-2xl lg:text-5xl mb-10 text-boss-green">
          See What We've Done
        </h2>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          {posts.map((p, idx) => (
            <div key={idx} className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={
                    p.imgSrc ||
                    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  }
                  alt="Shoes"
                  className="rounded-xl hover:scale-105 transition-all max-h-40 object-fill"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{p.title}</h3>
                <p>{p.blurb || truncate(p.content[0], 100)}</p>
                <button className="boss-btn bg-boss-gold text-white">
                  Read
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
