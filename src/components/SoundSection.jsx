import React from "react";

const SoundSection = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel the base</p>
          <span className="description">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <ul className="links">
            <li>
              <button className="button">buy</button>
            </li>
            <li>
              <a className="link" onClick={handleLearnMore}>
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
