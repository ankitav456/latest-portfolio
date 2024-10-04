import { FunctionComponent } from "react";
import "./style.css";
import avatar from "../images/image-avatar.png"; // Use correct path for image import
import Image from "next/image";

interface HomeSectionProps {}

const HomeSection: FunctionComponent<HomeSectionProps> = () => {
  return (
    <div className="home-main-container custom-theme">
      <div className="home-main-section">
        <div className="home-avatar-section">
          <Image
            src={avatar}
            alt="Avatar"
            className="avatar"
            width={260}
            height={260}
          />
        </div>
        <div className="home-content-section">
          <div className="description">
            <span>Hello! I am Ankita Vishwakarma</span>
            <h1>A designer who judges a book by its cover...</h1>
            <p>Because if the cover does not impress you, what else can?</p>
          </div>
          <div className="main-content">
            <h2>
              I'm a <span className="highlight">Software Engineer</span>.
            </h2>
            <p className="job-details">
              Currently, I'm a Software Engineer at <span>Facebook</span>.
            </p>
            <p className="about">
              A self-taught UI/UX designer, functioning in the industry for 3+
              years now. I make meaningful and delightful digital products that
              create an equilibrium between user needs and business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
