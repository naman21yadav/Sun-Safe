import "./App.css";
import Header from "./components/Header";
import UniPage from "../src/pages/UviPage";

function App() {
  return (
    <>
      <Header />
      <SectionHero />
      <UniPage />
      <Features />
    </>
  );
}

function SectionHero() {
  return (
    <section className=" section-hero">
      <div className="header-container">
        <div className="header-container-inner">
          <h1>Sun Safe, Fun Safe!</h1>
          <p>
            Your pocket guide to sun safety. Real-time UV alerts, protective
            tips, and more—for sunny days made safer.
          </p>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section-feature">
      <div className="container feature-heading">
        <h2>Your pocket guide to sun safety</h2>
        <p>
          Real-time UV alerts, protective tips, and more—for sunny days made
          safer.
        </p>
      </div>

      <div className=" container grid grid--3-cols">
        <a href="/uvi" className="feature-link feature-card">
          <div className="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M229.33,98.21,53.41,33l-.16-.05A16,16,0,0,0,32.9,53.25a1,1,0,0,0,.05.16L98.21,229.33A15.77,15.77,0,0,0,113.28,240h.3a15.77,15.77,0,0,0,15-11.29l23.56-76.56,76.56-23.56a16,16,0,0,0,.62-30.38ZM224,113.3l-76.56,23.56a16,16,0,0,0-10.58,10.58L113.3,224h0l-.06-.17L48,48l175.82,65.22.16.06Z"></path>
            </svg>
            <p className="feature-title">View UV Levels locations</p>
            <p className="feature-text">
              View UV index of different locations. Decide the right time to go
              outside.
            </p>
          </div>
        </a>
        <a href="/reminder" className="feature-link feature-card">
          <div className="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.85-32A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z"></path>
            </svg>
            <p className="feature-title">Sunscreen reminders</p>
            <p className="feature-text">
              Track your sunscreen reminders. Keep your children safe and
              healthy in the sun.
            </p>
          </div>
        </a>
        <a href="/impact" className="feature-link feature-card">
          <div className="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M200,152a31.84,31.84,0,0,0-19.53,6.68l-23.11-18A31.65,31.65,0,0,0,160,128c0-.74,0-1.48-.08-2.21l13.23-4.41A32,32,0,1,0,168,104c0,.74,0,1.48.08,2.21l-13.23,4.41A32,32,0,0,0,128,96a32.59,32.59,0,0,0-5.27.44L115.89,81A32,32,0,1,0,96,88a32.59,32.59,0,0,0,5.27-.44l6.84,15.4a31.92,31.92,0,0,0-8.57,39.64L73.83,165.44a32.06,32.06,0,1,0,10.63,12l25.71-22.84a31.91,31.91,0,0,0,37.36-1.24l23.11,18A31.65,31.65,0,0,0,168,184a32,32,0,1,0,32-32Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM80,56A16,16,0,1,1,96,72,16,16,0,0,1,80,56ZM56,208a16,16,0,1,1,16-16A16,16,0,0,1,56,208Zm56-80a16,16,0,1,1,16,16A16,16,0,0,1,112,128Zm88,72a16,16,0,1,1,16-16A16,16,0,0,1,200,200Z"></path>
            </svg>
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <p className="feature-title">Data about UV impacts</p>
            <p className="feature-text">
              Understand the danger that UV presents in Australia. Making sun
              safety fun for children.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default App;
