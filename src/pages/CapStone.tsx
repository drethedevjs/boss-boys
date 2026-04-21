import { NavLink } from "react-router";
import { BossPage } from "../components/BossPage";

export const CapStone = () => {
  return (
    <BossPage header="8th Grade Capstone">
      {/* ── INTRODUCTION ── */}
      <h2>Introduction</h2>
      <p>
        Throughout a student's BOSS experience, they will learn leadership
        skills through group and private discussions as well as be given
        opportunities to exercise what they've learned. All students who remain
        in the program through 8th grade must lead a group discussion with the
        other members in order to receive a certificate of completion.
      </p>
      <p>We make this a requirement for a few reasons:</p>
      <p>
        <span className="font-good-times! bg-boss-gold rounded-2xl pl-3 dark:text-white">
          ONE.
        </span>{" "}
        We want the boys to earn their certificate not just by remaining, but by
        putting forth real effort.
      </p>
      <p>
        <span className="font-good-times! bg-boss-gold rounded-2xl pl-3 dark:text-white">
          TWO.
        </span>{" "}
        We want to give them the experience of being a facilitator and
        instructor. They will get to see the peak of their growth — from a 6th
        grade learner to an 8th grade leader.
      </p>
      <p>
        <span className="font-good-times! bg-boss-gold rounded-2xl pl-3 dark:text-white">
          THREE.
        </span>{" "}
        We want them to experience what their teachers experience as instructors
        so that they gain a new respect for them and their role in the life of
        the school.
      </p>

      {/* ── DISCUSSION CRITERIA ── */}
      <h2>Discussion Criteria</h2>
      <p>Every Capstone discussion must meet the following standards:</p>
      <ul className="boss-ul">
        <li>Must be a topic that benefits their demographic.</li>
        <li>
          Must have at least two points that you want to drive home with your
          audience.
        </li>
        <li>
          Must have at least two discussion questions that challenge your
          audience to think — no yes or no questions, no obvious answers.
        </li>
      </ul>

      {/* ── HOW TO CHOOSE A TOPIC ── */}
      <h2>How to Choose a Topic</h2>
      <p>
        Your topic should be something that matters to Black boys and young men
        your age — something real, something worth talking about. A good topic
        isn't just interesting to you; it should be something your audience can
        connect to and learn from.
      </p>
      <p>Ask yourself these questions to find your topic:</p>
      <ul className="boss-ul">
        <li>
          What is something I've learned or experienced that changed how I
          think?
        </li>
        <li>What do I wish someone had told me when I was younger?</li>
        <li>
          What is a challenge that Black boys my age face that doesn't get
          talked about enough?
        </li>
        <li>
          What is something connected to being a Community Leader, Faithful
          Husband, or Loving Father?
        </li>
      </ul>
      <p>
        Once you have an idea, reach out to Mr. Thomas for approval before you
        start building your guide. He'll let you know if you're on the right
        track or help you sharpen your direction.
      </p>

      {/* ── HOW TO BUILD YOUR DISCUSSION ── */}
      <h2>How to Build Your Discussion</h2>
      <p>
        Think of your discussion like a road trip. Your topic is the
        destination, your points are the highways that get you there, and your
        questions are the exits that pull your audience in along the way. Use
        the steps below to build it out.
      </p>

      <p>
        <span className="font-good-times! bg-boss-gold rounded-2xl pl-3 dark:text-white">
          STEP 1.
        </span>{" "}
        <strong>Write your topic as a clear statement or question.</strong> It
        should be specific enough to focus the conversation but open enough to
        spark real discussion. Example:{" "}
        <em>"Making a Difference in One's Society"</em> — not just{" "}
        <em>"Society."</em>
      </p>

      <p>
        <span className="font-good-times! bg-boss-gold rounded-2xl pl-3 dark:text-white">
          STEP 2.
        </span>{" "}
        <strong>Identify your two main points.</strong> These are the ideas you
        most want your audience to walk away with. Write each one as a simple,
        direct statement. Example: <em>"You can make a difference"</em> and{" "}
        <em>"You can contribute right now, where you are."</em>
      </p>

      <p>
        <span className="font-good-times! bg-boss-gold rounded-2xl pl-3 dark:text-white">
          STEP 3.
        </span>{" "}
        <strong>Write one discussion question for each point.</strong> Questions
        should require thought — no yes or no answers, no obvious responses.
        Push the group to go deeper. Good follow-up prompts:{" "}
        <em>"Say more about that."</em> / <em>"What makes you say that?"</em> /{" "}
        <em>
          "Who do you know that has done that, and what was their impact?"
        </em>
      </p>

      <p>
        <span className="font-good-times! bg-boss-gold rounded-2xl pl-3 dark:text-white">
          STEP 4.
        </span>{" "}
        <strong>Plan your opening.</strong> Don't just jump into questions.
        Greet the group, introduce your topic, and consider sharing something
        personal to get the conversation started. Vulnerability opens doors.
      </p>

      <p>
        <span className="font-good-times! bg-boss-gold rounded-2xl pl-3 dark:text-white">
          STEP 5.
        </span>{" "}
        <strong>Plan your closing.</strong> Thank the group, summarize one or
        two strong things that were said, and leave them with a final thought
        that ties back to what it means to be a boy of superior standard.
      </p>

      {/* ── DISCUSSION GUIDE TEMPLATE ── */}
      <h2>Discussion Guide Template</h2>
      <p>
        Use the template below to plan and organize your discussion. Fill it out
        after your topic has been approved. Bring it with you on the day you
        present — it's your roadmap.
      </p>
      <NavLink
        to="/files/discussion-guide-template.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-5 inline-block bg-boss-gold text-white font-good-times rounded-2xl px-5 py-2 mt-2 hover:opacity-90 transition-opacity"
      >
        Download Discussion Guide Template
      </NavLink>

      {/* ── PRESENTATION DAY ── */}
      <h2>Presentation Day</h2>
      <p>
        You'll present on a Tuesday meeting of your choice. You get to pick your
        date — own it. The only rule is that it must happen{" "}
        <strong>before December 31st of your 8th grade year.</strong>
      </p>
      <p>
        Students who do not complete their Capstone discussion by that deadline
        will be asked to resign from BOSS.
      </p>
      <p>On your presentation day:</p>
      <ul className="boss-ul">
        <li>
          Arrive on time and come prepared with your completed discussion guide.
        </li>
        <li>You will open and lead the full discussion — this is your room.</li>
        <li>
          Mr. Thomas and the other members will participate as your audience.
        </li>
        <li>
          After you close, the group will be asked to critique your ability to
          lead a discussion. This is crustructive criticism so don't be afraid
          of it. You will have completed your capstone project. This is a moment
          to be proud of.
        </li>
      </ul>
      <p>
        Upon successful completion, you will be set to receive your{" "}
        <strong>BOSS Certificate of Completion</strong> during your 8th grade
        awards ceremony that the school hosts. This will be something you
        earned, not just something you were given.
      </p>
    </BossPage>
  );
};
