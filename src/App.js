import "./App.css";
import "./Responsive.css";
import logo from "./assets/images/viddle-text-logo.svg";
import companyLogo from "./assets/images/millsaps-logo.svg";
import onlyLogo from "./assets/images/logo.svg";
import apple_preorder from "./assets/images/preorder-apple.svg";
import x from "./assets/images/twitter.svg";
import linkedin from "./assets/images/linkedin.svg";
import ig from "./assets/images/ig.svg";

import image1 from "./assets/images/explore.png";
import image2 from "./assets/images/stay.png";
import image3 from "./assets/images/search.png";
import image4 from "./assets/images/details.png";

function App() {
  return (
    <div className="App">
      <div className="section1">
        <div className="navbar">
          <img className="logo-main" src={logo} alt="VIDDLE logo" />
          <img
            className="company-logo-main"
            src={companyLogo}
            alt="MillSaps logo"
          />
        </div>

        <div className="welcomer">
          <img className="big-logo" src={onlyLogo} alt="logo" />

          <p className="welcome-text">WELCOME TO VIDDLE!</p>
          <p className="desc-text">
            Discover the magic of cinema and TV with VIDDLE, your ultimate
            destination for all things movies and series. Whether you're a
            casual viewer or a die-hard cinephile, VIDDLE is designed to cater
            to your every entertainment need.
          </p>
          <div className="product-launchs">
            <a
              href="https://apps.apple.com/us/app/viddle/id6502989166"
              target="_blank"
            >
              <img
                className="apple-preorder"
                src={apple_preorder}
                alt="apple preorder logo"
              />
            </a>
            <a
              href="https://www.producthunt.com/posts/viddle?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-viddle"
              target="_blank"
            >
              <img
                style={{ width: 250, height: 54 }}
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=461264&theme=light"
                alt="VIDDLE - The&#0032;ultimate&#0032;pocket&#0032;entertainment&#0032;guide&#0046; | Product Hunt"
                width="250"
                height="54"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="section2">
        <p className="why-viddle">WHY VIDDLE?</p>

        <div className="container">
          <div className="container-text-area">
            <p className="container-spot-text">Explore In-Depth Film Details</p>
            <p className="container-desc">
              Immerse yourself in a rich database of films and series, where you
              can uncover everything from cast and crew information to detailed
              synopses and insightful reviews. VIDDLE offers a comprehensive
              look at each title, helping you appreciate the nuances and
              backstories of your favorite movies and shows.
            </p>
          </div>
          <img className="container-img" src={image1} alt="image1" />
        </div>

        <div className="container">
          <img className="container-img" src={image2} alt="image2" />
          <div className="container-text-area-reverse">
            <p className="container-spot-text-reverse">
              Stay updated with Trends
            </p>
            <p className="container-desc-reverse">
              Keep your finger on the pulse of the entertainment world by
              following the latest trends. With VIDDLE, you can see what's
              trending globally, get recommendations tailored to your tastes,
              and never miss out on the hottest films and series that everyone
              is talking about. Our trending section ensures you're always in
              the loop with what’s popular, helping you join the conversation
              and stay relevant with the latest hits.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="container-text-area">
            <p className="container-spot-text">Search with Ease</p>
            <p className="container-desc">
              Navigate our intuitive and powerful search feature to find exactly
              what you're looking for. Whether you're in the mood for a classic
              film, a new release, or an obscure series, VIDDLE's search
              capabilities make it effortless to discover content that matches
              your interests.
            </p>
          </div>
          <img className="container-img" src={image3} alt="image3" />
        </div>

        <div className="container">
          <img className="container-img" src={image4} alt="image4" />
          <div className="container-text-area-reverse">
            <p className="container-spot-text-reverse">Amazing Details</p>
            <p className="container-desc-reverse">
              Newly designed, with amazing user experience you don’t miss out
              any details of film. From slogan to recommended films everything
              under your finger.
            </p>
          </div>
        </div>
      </div>

      <div className="privacy-statement">
        <p className="statement-text">
          At MillSaps, we prioritize the security and privacy of our users'
          data. We meticulously handle and safeguard user data to ensure
          confidentiality and integrity. However, it's imperative to note that
          we do not store any sensitive personal information such as financial
          details, passwords, or social security numbers. Our commitment to data
          protection extends to transparent policies and robust encryption
          practices, fostering trust and confidence among our valued users.
        </p>
      </div>

      <div className="footer">
        <div className="footer-section1">
          <div className="footer-logo">
            <img className="logo-footer" src={logo} alt="VIDDLE logo" />
            <p className="by-text">is brand of MillSaps.</p>
          </div>
          <div className="logo-group">
            <img
              className="company-logo-footer"
              src={companyLogo}
              alt="MillSaps logo"
            />
            <div className="social-group">
              <a href="#">
                <img className="social-icon" src={x} alt="X logo" />
              </a>
              <a href="#">
                <img
                  className="social-icon"
                  src={linkedin}
                  alt="LinkedIn logo"
                />
              </a>
              <a href="#">
                <img className="social-icon" src={ig} alt="IG logo" />
              </a>
            </div>
          </div>
        </div>

        <p className="copyright">
          Copyright © 2024 MillSaps. All rights reserved. No part of this
          website may be reproduced, distributed, or transmitted in any form or
          by any means, including photocopying, recording, or other electronic
          or mechanical methods, without the prior written permission of
          MillSaps, except in the case of brief quotations embodied in critical
          reviews and certain other noncommercial uses permitted by copyright
          law. For permission requests, write to the publisher, addressed
          "Attention: Permissions Coordinator," at the address below.
        </p>
      </div>
    </div>
  );
}

export default App;
