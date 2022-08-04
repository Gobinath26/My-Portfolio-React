import "../Styles/About.css";
export default function About() {
  return (
    <section id="about">
      <di className="container" id="about-container">
        <div className="row">
          <div className="col-12">
          <h2 className="about-head text-center">ABOUT</h2>
            <h1 className="about-title">LET'S GET TO KNOW ME</h1>
            <h3 className="about-subtitle">FullStack Web Developer / MERN Stack</h3>
            <p className="about-para">
              I seek to work in a competitive field and ready to accept the
              challenges, utilizing my skills, would like to work with a highly
              esteemed company which gives me a platform to use my expertise and
              skills for mutual growth and benefit of company and myself.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <ul style={{ listStyle: "none" }}>
              <li>
                <i
                  className="bi bi-caret-right-fill"
                  style={{ color: "green" }}
                ></i>
                <strong> Full Nmae :</strong><span style={{ color: "green",fontWeight:"900" }}> M.Gobinath</span> 
              </li>
              <li>
                <i
                  className="bi bi-caret-right-fill"
                  style={{ color: "green" }}
                ></i>
                <strong> Born :</strong><span style={{ color: "green",fontWeight:"900" }}> 26 March 2000</span> 
              </li>
              <li>
                <i
                  className="bi bi-caret-right-fill"
                  style={{ color: "green" }}
                ></i>
                <strong> Departmet :</strong><span style={{ color: "green",fontWeight:"900" }}> ECE</span>
              </li>
              <li>
                <i
                  className="bi bi-caret-right-fill"
                  style={{ color: "green" }}
                ></i>
                <strong> Degree :</strong><span style={{ color: "green",fontWeight:"900" }}> Engineering</span> 
              </li>
              <li>
                <i
                  className="bi bi-caret-right-fill"
                  style={{ color: "green" }}
                ></i>
                <strong> Nationality :</strong><span style={{ color: "green",fontWeight:"900" }}> Indian</span> 
              </li>
              <li>
                <i
                  className="bi bi-caret-right-fill"
                  style={{ color: "green" }}
                ></i>
                <strong> Languages :</strong><span style={{ color: "green",fontWeight:"900" }}> English, Tamil</span>
              </li>
              <li>
                <i
                  className="bi bi-caret-right-fill"
                  style={{ color: "green" }}
                ></i>
                <strong> City :</strong><span style={{ color: "green",fontWeight:"900" }}> Karaikal, India</span> 
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="about-para">
              I Started off my self-learning journey with online tutorials
              Google, YouTube, Learnmall, SoloLearn, etc and take a step further
              and Enrolled in the GUVI IIT MADRAS Fullstack developer Nanodegree
              Program which involved extensive programming and real world
              projects. Later, I learned MERN Stack From Guvi and built an
              Website using React JS, Node, Express Js, MongoDB.
            </p>
          </div>
        </div>
      </di>
    </section>
  );
}
