import { PillarPage } from "../components/PillarPage";
import { PillarsLearnMore } from "../components/PillarsLearnMore";

export const LovingFathers = () => {
  return (
    <>
      <section id="loving-fathers">
        <PillarPage pillar="Loving Fathers">
          <p>
            At Boys of Superior Standard, we teach young men that being a loving
            father starts with showing up — consistently and intentionally. We
            encourage habits of presence: regular routines, meaningful
            conversations, and demonstrating emotional availability. Through
            BOSS mentorship, we emphasize that when fathers are steady in small
            daily acts of care and discipline, children grow with a sense of
            security that nurtures their minds, bodies, and spirits. We
            reinforce that consistency builds trust, models healthy boundaries,
            and gives kids a reliable framework for learning responsibility,
            empathy, and resilience.
          </p>

          <p>
            At BOSS, we frame fatherhood as a sacred stewardship that reflects
            God's goodness in the world. We equip our students to lead by
            service and example, investing time to nurture faith, character, and
            physical well-being so the next generation can flourish. We remind
            our young men that raising children who are better off in mind,
            body, and spirit is among the most powerful ways to multiply
            goodness across families and communities — a lifetime commitment of
            sacrifice, encouragement, and steady presence rather than occasional
            grand gestures.
          </p>
        </PillarPage>
      </section>

      <PillarsLearnMore
        leftText="Community Leaders"
        rightText="Faithful Husbands"
      />
    </>
  );
};
