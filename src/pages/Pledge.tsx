import { BossPage } from "../components/BossPage";

export const Pledge = () => {
  return (
    <BossPage header="Our Pledge">
      <p className="text-center">
        Our pledge is what we say every meeting. All BOSS members must memorize
        it.
      </p>
      <div className="border-2 w-1/3 mx-auto mb-8 rounded-xl border-boss-green dark:border-boss-gold"></div>
      <div className="text-center">
        <p>We are boys of Superior Standard.</p>
        <p>
          <b>We are leaders</b> because we are model students and we hold each
          other accountable to be better and to do better.
        </p>
        <p>
          <b>We are good neighbors.</b> We look out for our community in order
          to keep it safe.
        </p>
        <p>
          <b>We will be loving husbands.</b> We will love and lead our wives
          selflessly.
        </p>
        <p>
          <b>We will be great fathers.</b> My children will not grow up without
          me. They will know that I love them and their mother.
        </p>
        <p>We are boys of superior standard.</p>
      </div>
    </BossPage>
  );
};
