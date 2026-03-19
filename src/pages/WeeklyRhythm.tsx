import { NavLink } from "react-router";

export const WeeklyRhythm = () => {
  return (
    <div className="boss-container">
      <h1 className="page-header">Our Weekly Rhythm</h1>
      <p>
        BOSS Members are expected to attend our weekly meetings after school.
        See below for the general outline of each meeting.
      </p>
      <article lang="en">
        <section>
          <h2>Check Ins</h2>
          <p>
            We start every meeting by going around the circle. Each student
            states their name and their current emotional state—no filter, no
            performance. "My name is Ja'Von and I'm checking in excited!" or "My
            name is Cameron and I'm checking in frustrated."
          </p>
          <p>
            This simple practice does something powerful: it normalizes
            emotional honesty. Instead of walking into the room wearing a mask,
            students learn to name what they're actually feeling. It sets the
            tone for authentic connection and helps everyone understand where
            their brothers are at before we dive into the work.
          </p>
          <p>
            This ties directly to our{" "}
            <NavLink
              to="/pillars/community-leaders"
              className="text-boss-gold hover:underline"
            >
              <b>Community Leaders</b>
            </NavLink>{" "}
            pillar. Real leaders don't hide their humanity—they acknowledge it.
            By practicing emotional awareness and transparency now, these young
            men are building the self-awareness and authenticity required to
            lead with integrity in their communities.
          </p>
        </section>

        <section>
          <h2>Highs and Lows</h2>
          <p>
            Each student shares a high point from their day—something that
            brought them joy, like acing a test or making a new friend. Then
            they share a low point—a moment of frustration, disappointment, or
            hurt, whether it's being sent out of class, dealing with conflict,
            or facing challenges at home.
          </p>
          <p>
            This practice creates space for both celebration and vulnerability.
            We celebrate each other's wins and practice opening up about the
            hard stuff—building empathy, emotional intelligence, and the kind of
            trust that real brotherhood requires.
          </p>
          <p>
            This ritual connects to our{" "}
            <b>
              <NavLink to="/pillar/community-leaders">
                Faithful Husbands
              </NavLink>
            </b>{" "}
            and{" "}
            <b>
              <NavLink to="/pillar/loving-fathers">Loving Fathers</NavLink>
            </b>{" "}
            pillars. Strong relationships aren't built on highlight
            reels—they're built on the willingness to be honest about struggles
            and to show up for each other in both triumph and hardship. By
            practicing this now, these young men are learning how to create
            safe, supportive spaces in their future marriages and families
            should they choose to have them.
          </p>
        </section>

        <section>
          <h2>Proverb of the Week</h2>
          <p>
            Each week, I select a student to memorize a proverb in 10 minutes.
            After the timer goes off, he stands before the group to recite it
            from memory, explain its meaning, and apply it to real situations at
            school. This exercise builds what we call the <b>C.A.C.</b>:{" "}
            <b>C</b>onfidence, <b>A</b>nalytical thinking, and <b>C</b>haracter.
          </p>
          <p>
            The rest of the group serves as judges, evaluating the speaker's
            presentation and whether they agree with his interpretation. If they
            disagree, they must articulate why and offer their own perspective.
            They also assess whether his real-world application was compelling
            and relevant.
          </p>
          <p>
            This activity directly aligns with our{" "}
            <b>
              <NavLink to="/pillar/community-leaders">
                Community Leaders
              </NavLink>
            </b>{" "}
            pillar. Great leaders don't just consume wisdom—they internalize it,
            communicate it clearly, and apply it to the contexts they navigate.
            By standing before their peers, defending their thinking, and
            receiving feedback, these young men practice the courage and
            critical thinking required to lead with conviction in their schools,
            neighborhoods, and eventually, their communities.
          </p>
        </section>

        <section>
          <h2>Miscellaneous Business</h2>
          <p>
            This is our flexible time to handle what needs attention—whether
            that's previewing upcoming events and field trips, unpacking a
            current event making headlines, working through real situations the
            boys are facing at school or home, or introducing new ideas and
            concepts that push their thinking forward. It's where we stay
            connected to what's happening in their world and in the world around
            them.
          </p>
        </section>

        <section>
          <h2>Lesson</h2>
          <p>
            This is our deep-dive discussion time. We tackle a specific
            topic—sometimes planned, sometimes driven by what the group needs in
            the moment. It's where we explore ideas, challenge assumptions, and
            build the critical thinking skills that turn boys into young men who
            can navigate complexity with wisdom.
          </p>
        </section>

        <section>
          <h2>Other Happenings</h2>
          <h3>20min Talks</h3>
          <p>
            We invite Black men from the community to come share their
            stories—whether it's the journey they've walked, the career they've
            built, or the lessons they've learned along the way. These 20-minute
            talks give our students direct access to real examples of success,
            resilience, and purpose. It's one thing to hear about what's
            possible; it's another to meet someone who's living it.
          </p>
        </section>
      </article>
    </div>
  );
};
