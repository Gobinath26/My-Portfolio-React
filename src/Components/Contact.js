import "../Styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container" id="contact-container">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title text-center mt-5">CONTACT</h2>
          </div>

          {/* <div className="contact-details-container"> */}
            <div className="row mt-5">
              <div className="col-12 col-sm-6  d-flex justify-content-center">
                <div className="location-box">
                  <div className="location-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      fill="currentColor"
                      color="rgb(65, 201, 255)"
                      className="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </div>
                  <div className="location-details">
                    <p className="location-title text-center pt-2">Location</p>
                    <p className="location-subtitle">Karaikal, India.</p>
                  </div>
                </div>
              </div>
              {/* /-- */}
              <div className="col-12 col-sm-6  d-flex justify-content-center">
                <div className="email-box">
                  <div className="email-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      fill="currentColor"
                      color="rgb(65, 201, 255)"
                      className="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                  </div>
                  <div className="email-details">
                    <p className="email-title text-center">E-Mail</p>
                    <p className="email-subtitle">gobi3336@gmail.com</p>
                  </div>
                </div>
              </div>
              {/* /-- */}
              {/* <div className="row mt-5"> */}
                <div className="col-12 col-sm-6 d-flex justify-content-center">
                  <div className="linkedin-box">
                    <div className="linkedin-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        color="rgb(65, 201, 255)"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </div>
                    <div className="linkedin-details">
                      <p className="linledin-title text-center">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/gobinath-m-98019021a/" target={"_blank"}
                        className="linledin-subtitle"
                      >
                        gobinath-m
                      </a>
                    </div>
                  </div>
                </div>
                {/* /-- */}
                <div className="col-12 col-sm-6 d-flex justify-content-center">
                  <div className="mobile-box">
                    <div className="mobile-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="46"
                        color="rgb(65, 201, 255)"
                        fill="currentColor"
                        className="bi bi-phone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                      </svg>
                    </div>
                    <div className="mobile-details">
                      <p className="mobile-title text-center">Mobile</p>
                      <p className="mobile-subtitle">+91-9345178521</p>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </div>
          {/* 
           */}
        </div>
      </div>
    </section>
  );
}
