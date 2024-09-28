import { FunctionComponent } from "react";
import "./style.css";

interface HomeSectionProps {}

const HomeSection: FunctionComponent<HomeSectionProps> = () => {
  return (
    <div className="home-main-container custom-theme">
      <div className="avatar-section">
        <img src="avatar-girl.png" alt="Avatar" className="avatar" />
        <h1>
          Hello! I am <span>Ankita Vishwakarma</span>
        </h1>
        <p className="description">
          A designer who judges a book by its cover...
          <br />
          Because if the cover does not impress you, what else can?
        </p>
      </div>
      <div className="main-content">
        <h2>
          I'm a <span className="highlight">Software Engineer</span>.
        </h2>
        <p className="job-details">
          Currently, I'm a Software Engineer at <span>Facebook</span>.
        </p>
        <p className="about">
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
