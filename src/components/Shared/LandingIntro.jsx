import Intro from "./Intro";
import logo from "../../assets/images/logo-red.svg";
import introImg from "../../assets/images/intro.png";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <div className="flex items-center justify-center">
            <img src={logo} className="w-4/5" alt="fusionsync-logo" />
          </div>

          <div className="my-12 text-center">
            <img
              src={introImg}
              alt="Dashwind Admin Template"
              className="inline-block w-48"
            ></img>
          </div>

          <Intro />
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;
