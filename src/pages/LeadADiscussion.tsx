import { BossPage } from "../components/BossPage";
import { steps, topics } from "../data/discussions";

export const LeadADiscussion = () => {
  return (
    <BossPage>
      {/* Hero */}
      <section className="lead-hero">
        <img
          src="/images/other/other-1.jpg"
          alt="Black men leading the way"
          className="lead-hero-image-placeholder"
        />
        <div className="lead-hero-text">
          <h1 className="page-header">Lead a Discussion</h1>
          <p className="lead-hero-sub">
            You have lived through things these boys haven't faced yet. Your
            story — the wins, the setbacks, the lessons — is exactly what they
            need to hear. Come spend 20 minutes with them.
          </p>
          <div className="space-x-3 mt-6">
            <a
              href="mailto:info@bossboys.group"
              className="boss-btn boss-btn-gold-alt"
            >
              I'm Interested
            </a>
            <a href="tel:+17064263022" className="boss-btn boss-btn-green">
              Call Us
            </a>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* What This Is */}
      <section className="lead-section lead-what-section">
        <img
          src="/images/other/other-2.jpg"
          alt="Man speaking to a group of boys"
          className="lead-what-image-placeholder"
        />
        <div className="lead-what-text">
          <h2 className="section-title">What This Is</h2>
          <p className="section-body">
            Once a week, BOSS gathers Black middle school boys from the CSRA for
            mentorship, discussion, and growth. We invite Black men from the
            community to come in and lead a{" "}
            <strong>20-minute conversation</strong> — not a lecture, not a
            sermon, just a real talk.
          </p>
          <p className="section-body">
            Share a life lesson. Talk about your career path. Tell them about a
            time you failed and what you did next. Speak about something you
            wish someone had told you when you were their age.
          </p>
          <p className="section-body">
            These boys are hungry for representation. They need to see Black men
            who are doing meaningful things and who are willing to pour back
            into them.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Topic Ideas */}
      <section className="lead-section">
        <h2 className="section-title text-center">Topic Ideas</h2>
        <p className="section-body text-center">
          Not sure what to talk about? Here are a few areas that resonate with
          our boys — but feel free to bring your own.
        </p>
        <div className="lead-topics-grid">
          {topics.map(topic => (
            <div key={topic.title} className="lead-topic-card">
              <div className="lead-topic-icon">{topic.icon}</div>
              <h3 className="lead-topic-title">{topic.title}</h3>
              <p className="lead-topic-desc">{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-divider" />

      {/* How It Works */}
      <section className="lead-section">
        <h2 className="section-title">How It Works</h2>
        <div className="lead-steps">
          {steps.map(step => (
            <div key={step.number} className="lead-step">
              <div className="lead-step-number">{step.number}</div>
              <div>
                <h3 className="lead-step-title">{step.title}</h3>
                <p className="lead-step-detail">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-divider" />

      {/* Quote / inspiration block */}
      <section className="lead-quote-section">
        <img
          src="/images/other/other-3.jpg"
          alt="Boy listening intently"
          className="lead-quote-image-placeholder"
        />
        <blockquote className="lead-quote">
          <p>
            "To see and hear from Black men who are in occupations they don't
            normally see Black men do — that's what changes the ceiling for
            these boys."
          </p>
          <cite>— Andre Thomas, BOSS Founder</cite>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="lead-cta">
        <h2 className="cta-heading">Ready to Speak Into Their Lives?</h2>
        <p className="cta-sub">
          It only takes 20 minutes. The impact can last a lifetime. Reach out
          and let's get you on the schedule.
        </p>
        <div className="space-x-3">
          <a
            href="mailto:info@bossboys.group"
            className="boss-btn boss-btn-gold"
          >
            Email Us
          </a>
          <a href="tel:+17064263022" className="boss-btn boss-btn-color">
            Call Us
          </a>
        </div>
      </section>
    </BossPage>
  );
};
