import { NavLink } from "react-router";
import { BossPage } from "../components/BossPage";

export const Volunteer = () => {
  const pillars = [
    {
      icon: "🤝",
      title: "Community Leaders",
      path: "/pillar/community-leaders"
    },
    {
      icon: "💍",
      title: "Faithful Husbands",
      path: "/pillar/faithful-husbands"
    },
    { icon: "👨‍👦", title: "Loving Fathers", path: "/pillar/loving-fathers" }
  ];

  const responsibilities = [
    "Chaperone meetings and field trips",
    "Be ready to lead a discussion or two",
    "Come prepared to share your story as occasion may require",
    "Support the boys with positive affirmation while also challenging them to excel — in their character and in their education"
  ];
  return (
    <BossPage>
      {/* <!-- Hero --> */}
      <section className="volunteer-hero">
        <h1 className="page-header">Join the Mission</h1>
        <h2>These Boys Need What You Have to Offer</h2>
        <p className="volunteer-sub">
          Boys of Superior Standard (or BOSS) is looking for positive men who
          are ready to show up and invest in the next generation — right here in
          the CSRA.
        </p>
      </section>

      {/* <!-- About BOSS --> */}
      <section className="volunteer-section">
        <h2 className="section-title">About BOSS</h2>
        <p className="section-body">
          BOSS is a mentorship program for Black middle school boys in the CSRA.
          We meet every Tuesday from
          <strong> 3:15 PM - 5:15 PM</strong> and focus on developing young men
          across three pillars:
        </p>
        <div className="pillars-grid">
          {pillars.map(pillar => {
            return (
              <ul
                className="ml-8 text-base lg:text-2xl mb-5 list-disc"
                key={pillar.title}
              >
                <NavLink to={pillar.path}>
                  <li className="pillar-label">
                    <span className="pillar-icon">{pillar.icon}</span>{" "}
                    {pillar.title}
                  </li>
                </NavLink>
              </ul>
            );
          })}
        </div>
        <p className="section-body">
          Everything we do is intentional — from our discussions to our field
          trips to the men we bring into the room.
        </p>
      </section>

      {/* <!-- Divider --> */}
      <div className="gold-divider" />

      {/* <!-- What We're Looking For --> */}
      <section className="volunteer-section">
        <h2 className="section-title">What We're Looking For</h2>
        <p className="section-body">
          We need positive men who are ready to show up and invest. Here's what
          that looks like:
        </p>
        <ul className="ml-8 text-base lg:text-2xl mb-5 list-disc">
          {responsibilities.map(item => {
            return (
              <li key={item}>
                <span className="bullet" />
                {item}
              </li>
            );
          })}
        </ul>
      </section>

      {/* <!-- Divider --> */}
      <div className="gold-divider" />

      {/* <!-- Commitment --> */}
      <section className="volunteer-section commitment-block">
        <h2 className="section-title">Commitment</h2>
        <p className="section-body">
          We ask for a <strong>minimum semester commitment</strong>, but ideally
          we'd love volunteers who are in it for at least a year. These boys
          need consistency — and the men who show up regularly are the ones who
          make the deepest impact.
        </p>
      </section>

      {/* <!-- CTA --> */}
      <section className="volunteer-cta">
        <h2 className="cta-heading">Ready to Make an Impact?</h2>
        <p className="cta-sub">
          Reach out directly or visit the site to learn more. If you're
          interested, we'll map out next steps together.
        </p>
        <div className="space-x-3">
          <a href="tel:+17064263022" className="boss-btn boss-btn-green">
            Call Us
          </a>
          <a
            href="mailto:info@bossboys.group"
            className="boss-btn boss-btn-green"
          >
            Send a Message
          </a>
        </div>
      </section>
    </BossPage>
  );
};
