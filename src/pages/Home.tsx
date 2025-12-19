import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import posts from "../data/posts";

const Home = () => {
  return (
    <>
      <Hero />
      <Pillars />

      <section id="blog-post" className="p-10 place-content-center">
        <h2 className="text-center mb-10!">See What We've Done</h2>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          {posts.map((p, idx) => (
            <div
              key={idx}
              className="card bg-base-100 shadow-sm border-boss-gold dark:border"
            >
              <figure className="h-52">
                <img className="object-fill" src={p.imgSrc} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {p.title}
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p className="text-xl!">{p.blurb}</p>
                <div className="card-actions justify-end hidden">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
