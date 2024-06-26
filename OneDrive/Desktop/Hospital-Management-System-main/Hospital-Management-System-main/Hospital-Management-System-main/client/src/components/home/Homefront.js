import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../Context/UserContext'
export default function Homefront() {
  const navigate = useNavigate();
  const { currentUser, signInUser, isLoggedIn } = useContext(UserContext);
  const loginfunction=()=>{
    navigate("/login");
  }
//   useEffect(() => {
//     if (localStorage.getItem("token") != null && localStorage.getItem("currentUser") != null) {
//         let user = JSON.parse(localStorage.getItem("currentUser"));
//         let token = localStorage.getItem("token")
//         signInUser(user, token);
//     }
//     else {
//         navigate("/dashboard");
//     }
// }, [isLoggedIn]);
  return (
    <>
      {/* <!-- header start --> */}
      <header id="sticky-header" className="site-header">
        <div className="container custom-header">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3">
              <a href="index.html" className="site-logo">
                <img src="assets/images/logo/Logo-01.png" alt="" />
              </a>
              <div className="mobile-menu"></div>
            </div>
            <div className="col-xl-6 col-lg-9 my-auto">
              <div className="mainmenu">
                <nav id="mobile-menu">
                  <ul>
                    <li><a href="index.html">Home</a>
                    </li>
                    <li><a href="#services">Services</a>
                    </li>
                    <li><a href="#features">Features</a>
                    </li>
                    <li><a href="#about">About</a>
                    </li>
                    <li><a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 d-none d-xl-block">
              <div className="header-top-info d-flex align-items-center">
                <div className="hero-buttons">
                  <button className="site-btn" onClick={loginfunction}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header end -->

    <!-- Hero area start --> */}
      <section className="hero-area bg_img" data-background="assets/images/banner/01.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="title">Get Care With <br />
                  Our Doctors<span>.</span>
                </h1>
                <p>Healing with heart. Curing with care</p>
                <div className="hero-buttons">
                  <a href="index.html" className="site-btn">Our Departments</a>
                  <a href="index.html" className="site-btn red">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-ilustration-shape">
          <img src="assets/images/ilustration/Banner.png" alt="" />
        </div>
      </section>
      {/* <!-- Hero area end -->

    <!-- feature area start --> */}
      <section id="features" className="feature-area pb-120">
        <div className="container feature-container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 text-center">
              <div className="section-heading mb-70">
                <h2 className="section-title shape">Our Features</h2>
                <p>Experience exceptional care with our comprehensive hospital services..</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-none-50">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-8 mt-50 text-center">
              <div className="single-feature-box">
                <div className="icon">
                  <img src="assets/images/icons/feature-icon-01.png" alt="" />
                </div>
                <div className="content">
                  <h3 className="title">Medical Research</h3>
                  <p>Advancing healthcare through innovative medical research.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-8 mt-50 text-center">
              <div className="single-feature-box">
                <div className="icon">
                  <img src="assets/images/icons/feature-icon-02.png" alt="" />
                </div>
                <div className="content">
                  <h3 className="title">Appointment &amp; Support</h3>
                  <p>Effortlessly schedule appointments and receive unparalleled support with our healthcare services.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-8 mt-50 text-center">
              <div className="single-feature-box">
                <div className="icon">
                  <img src="assets/images/icons/feature-icon-03.png" alt="" />
                </div>
                <div className="content">
                  <h3 className="title">Cure Specialist</h3>
                  <p>rusted expertise for specialized care and personalized treatment plans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-area pb-160">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-thumb-wrap">
                <div className="about-thumb-small">
                  <img src="assets/images/about/02.jpg" alt="" />
                </div>
                <div className="about-thumb-big">
                  <img src="assets/images/about/01.jpg" alt="" />
                </div>
                <div className="about-thumb-shape-big">
                  <img src="assets/images/icons/plus-icon-big.png" alt="" />
                </div>
                <div className="about-thumb-shape-small">
                  <img src="assets/images/icons/plus-icon.png" alt="" />
                </div>
                <div className="about-thumb-shape-circle">
                  <img src="assets/images/ilustration/circle-shpae.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-50">
                <div className="section-heading mb-55">
                  <h4 className="sub-title">About Us</h4>
                  <h2 className="section-title">Expert Medical Writers <br /> &amp; Editors Makes</h2>
                  <p>Crafting precise and impactful medical content - Our team of expert writers and editors.</p>
                </div>
                <div className="about-list mt-none-20">
                  <div className="single-item d-flex align-items-center mt-20">
                    <div className="icon">
                      <i className="fal fa-check"></i>
                    </div>
                    <span>100+ Expert Doctor</span>
                  </div>
                  <div className="single-item d-flex align-items-center mt-20">
                    <div className="icon">
                      <i className="fal fa-check"></i>
                    </div>
                    <span>Instant Operation &amp; Appointment</span>
                  </div>
                  <div className="single-item d-flex align-items-center mt-20">
                    <div className="icon">
                      <i className="fal fa-check"></i>
                    </div>
                    <span>From Scientific Journals</span>
                  </div>
                  <div className="single-item d-flex align-items-center mt-20">
                    <div className="icon">
                      <i className="fal fa-check"></i>
                    </div>
                    <span>Medicine &amp; Instruments</span>
                  </div>
                </div>
                <div className="about-founder d-flex align-items-center">
                  <div className="founder-detals d-flex align-items-center">
                    <div className="thumb">
                      <img src="assets/images/about/authore.png" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="name">Jemilin D. William</h4>
                      <span className="designation">Founder</span>
                    </div>
                  </div>
                  <div className="founder-signature">
                    <img src="assets/images/about/signature.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="department-area bg-2 pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 text-center">
              <div className="section-heading mb-70">
                <h2 className="section-title shape">How We Work</h2>
                <p>At the heart of our work is a commitment to accuracy, clarity, and a deep understanding of medical science.</p>
              </div>
            </div>
          </div>
          <div className="row mt-none-50">
            <div className="col-xl-3 col-lg-6 col-md-6 mt-50 text-center">
              <div className="single-department">
                <div className="thumb">
                  <img src="assets/images/team/appointment.png" alt="" />
                  <span className="count bg-1">01</span>
                </div>
                <div className="content">
                  <h4 className="title">Make Appointment</h4>
                  <p>Book your appointment with confidence - Our experienced medical professionals are ready to provide you with exceptional care.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 mt-50 text-center">
              <div className="single-department small-box">
                <div className="thumb">
                  <img src="assets/images/team/certified-professional.png" alt="" />
                  <span className="count bg-2">02</span>
                </div>
                <div className="content">
                  <h4 className="title">Select Expert Doctor</h4>
                  <p>Choose from a team of highly skilled and knowledgeable doctors - Your health is in good hands with our experts.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 mt-50 text-center">
              <div className="single-department">
                <div className="thumb">
                  <img src="assets/images/team/consultation.png" alt="" />
                  <span className="count bg-3">03</span>
                </div>
                <div className="content">
                  <h4 className="title">Get Consultation</h4>
                  <p>Get personalized and comprehensive medical consultation - Our team of specialists is dedicated to helping you achieve optimal health.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 mt-50 text-center">
              <div className="single-department small-box">
                <div className="thumb">
                  <img src="assets/images/team/medical-care.png" alt="" />
                  <span className="count bg-4">04</span>
                </div>
                <div className="content">
                  <h4 className="title">Get Cure &amp; Relief</h4>
                  <p>Experience relief and healing - Our medical team uses the latest techniques and treatments to provide effective care for your specific needs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="appointment-box mt-80">
                <div className="row">
                  <div className="col-xl-7 col-lg-10">
                    <div className="section-heading">
                      <h4 className="sub-title">Get A Quote</h4>
                      <h2 className="section-title">Signup to get started<br /> Right Now<span>.</span></h2>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 my-auto text-right">
                    <a href="contact.html" className="site-btn">Signup</a>
                  </div>
                </div>
                <div className="appointment-ilustration">
                  <img src="assets/images/ilustration/ilustration-2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-expert-area bg-2 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 text-center">
              <div className="section-heading mb-70">
                <h2 className="section-title shape">Our Exparts</h2>
                <p>Our experts are leaders in their fields, with a commitment to staying at the forefront of medical advancements and providing the best possible care for our patients.</p>
              </div>
            </div>
          </div>
          <div className="row no-gutters expert-box-wrap">
            <div className="col-xl-6 col-lg-12">
              <div className="single-expert-box">
                <div className="expert-box-left">
                  <div className="thumb">
                    <img src="assets/images/team/team-1.jpg" alt="" />
                    <span className="icon"><img src="assets/images/icons/icon-tablate.png" alt="" /></span>
                  </div>
                  <div className="content">
                    <h5 className="name">Jemilin D. William.</h5>
                    <span className="designation">Founder</span>
                    <img src="assets/images/team/signature.png" alt="" className="signature" />
                  </div>
                </div>
                <div className="expert-box-right">
                  <div className="content">
                    <p>Founded by Rosalina Will, a passionate healthcare professional with a vision for delivering high-quality and compassionate medical care to all. Her dedication and expertise continue to inspire our team to strive for excellence in everything we do.</p>
                    <div className="expert-box-buttons">
                      <a href="#contact" className="site-btn">Contact Now</a>
                      <span className="comments-btn"><i className="fal fa-comments"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="single-expert-box">
                <div className="expert-box-left">
                  <div className="thumb">
                    <img src="assets/images/team/team-2.jpg" alt="" />
                    <span className="icon"><img src="assets/images/icons/icon-tablate.png" alt="" /></span>
                  </div>
                  <div className="content">
                    <h5 className="name">Dambul Ph.</h5>
                    <span className="designation">Dentist</span>
                    <img src="assets/images/team/signature.png" alt="" className="signature" />
                  </div>
                </div>
                <div className="expert-box-right">
                  <div className="content">
                    <p>Trust your smile to the experts at Dambul Ph. Dentistry - Our experienced and compassionate team is dedicated to providing you with exceptional dental care.</p>
                    <div className="expert-box-buttons">
                      <a href="#contact" className="site-btn">Contact Now</a>
                      <span className="comments-btn"><i className="fal fa-comments"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="single-expert-box">
                <div className="expert-box-left">
                  <div className="thumb">
                    <img src="assets/images/team/team-3.jpg" alt="" />
                    <span className="icon"><img src="assets/images/icons/icon-tablate.png" alt="" /></span>
                  </div>
                  <div className="content">
                    <h5 className="name">Arnold B.</h5>
                    <span className="designation">M.D.</span>
                    <img src="assets/images/team/signature.png" alt="" className="signature" />
                  </div>
                </div>
                <div className="expert-box-right">
                  <div className="content">
                    <p>Trust in the hands of a skilled practitioner - Dr. Arnold B M.D. brings expertise, compassion, and a personalized approach to your healthcare journey.</p>
                    <div className="expert-box-buttons">
                      <a href="#contact" className="site-btn">Contact Now</a>
                      <span className="comments-btn"><i className="fal fa-comments"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="single-expert-box">
                <div className="expert-box-left">
                  <div className="thumb">
                    <img src="assets/images/team/team-4.jpg" alt="" />
                    <span className="icon"><img src="assets/images/icons/icon-tablate.png" alt="" /></span>
                  </div>
                  <div className="content">
                    <h5 className="name">Lee Y.</h5>
                    <span className="designation">Dermatologist</span>
                    <img src="assets/images/team/signature.png" alt="" className="signature" />
                  </div>
                </div>
                <div className="expert-box-right">
                  <div className="content">
                    <p>Experience personalized care for your skin - Trust in the expertise of Dr. Lee Y, a renowned dermatologist committed to enhancing your skin health.</p>
                    <div className="expert-box-buttons">
                      <a href="#contact" className="site-btn">Contact Now</a>
                      <span className="comments-btn"><i className="fal fa-comments"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-feature-area pt-110 pb-110">
        <div className="container">
          <div className="row mb-70">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2 className="section-title">Core Features</h2>
                <p>Experience healthcare excellence with our core features - Advanced technology, compassionate care, and a commitment to your well-being.</p>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2 my-auto text-right">
              <a href="about.html" className="site-btn white">Learn More</a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="feature-carousel owl-carousel">
                <div className="singel-core-feature-box text-center">
                  <div className="icon">
                    <img src="assets/images/icons/feature-icon-04.png" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">24/7 Ambulance Trans</h3>
                    <span className="shape"><img src="assets/images/ilustration/shape.png" alt="" /></span>
                    <p>Timely and reliable ambulance transportation, available round-the-clock to ensure you receive the care you need, when you need it most.</p>
                  </div>
                </div>
                <div className="singel-core-feature-box text-center">
                  <div className="icon">
                    <img src="assets/images/icons/feature-icon-05.png" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Research & Test</h3>
                    <span className="shape"><img src="assets/images/ilustration/shape.png" alt="" /></span>
                    <p>Advancing medical knowledge through rigorous research and testing - Our team is dedicated to uncovering innovative solutions to improve patient outcomes.</p>
                  </div>
                </div>
                <div className="singel-core-feature-box text-center">
                  <div className="icon">
                    <img src="assets/images/icons/feature-icon-06.png" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Make Appointment</h3>
                    <span className="shape"><img src="assets/images/ilustration/shape.png" alt="" /></span>
                    <p>Book your appointment with confidence - Our experienced medical professionals are ready to provide you with exceptional care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-area bg-2 pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 text-center">
              <div className="section-heading mb-70">
                <h2 className="section-title shape">News Feeds</h2>
                <p>Stay informed with the latest medical breakthroughs and healthcare news from around the world - All in one place..</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-none-30">
            <div className="col-xl-4 col-lg-6 col-sm-12 mt-30">
              <div className="single-news-box">
                <div className="thumb">
                  <img src="assets/images/blog/01.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="news-meta-date">
                    <span>23</span>
                    Mar
                  </div>
                  <div className="news-meta">
                    <ul>
                      <li><a href="#0"><i className="fal fa-user"></i> Rosali D.</a></li>
                      <li><a href="#0"><i className="fal fa-calendar-alt"></i> 24th Feb 2020</a></li>
                    </ul>
                  </div>
                  <h4 className="title"><a href="blog-details.html">The Medical Department Is
                    Comprised Of Medical.</a></h4>
                  <a href="blog-details.html" className="inline-btn">Read More</a>
                  <span className="count">01</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12 mt-30">
              <div className="single-news-box">
                <div className="thumb">
                  <img src="assets/images/blog/02.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="news-meta-date">
                    <span>10</span>
                    Feb
                  </div>
                  <div className="news-meta">
                    <ul>
                      <li><a href="#0"><i className="fal fa-user"></i> Rosali D.</a></li>
                      <li><a href="#0"><i className="fal fa-calendar-alt"></i> 24th Feb 2020</a></li>
                    </ul>
                  </div>
                  <h4 className="title"><a href="blog-details.html">With In-depth Experience In
                    Broad Range Of Disease.</a></h4>
                  <a href="blog-details.html" className="inline-btn">Read More</a>
                  <span className="count">02</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12 mt-30">
              <div className="single-news-box">
                <div className="thumb">
                  <img src="assets/images/blog/03.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="news-meta-date">
                    <span>04</span>
                    Mar
                  </div>
                  <div className="news-meta">
                    <ul>
                      <li><a href="#0"><i className="fal fa-user"></i> Rosali D.</a></li>
                      <li><a href="#0"><i className="fal fa-calendar-alt"></i> 24th Feb 2020</a></li>
                    </ul>
                  </div>
                  <h4 className="title"><a href="blog-details.html">Experience In A Broad Range
                    of disease states.</a></h4>
                  <a href="blog-details.html" className="inline-btn">Read More</a>
                  <span className="count">03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer pt-100 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12 pr-50">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footer-widget">
                    <h4 className="widget-title">About Us</h4>
                    <p>At Green Hill Hospital, our mission is to provide compassionate and innovative healthcare solutions to our community, delivered by a team of skilled and dedicated professionals.</p>
                    <div className="social-links">
                      <a href="#0"><i className="fab fa-facebook-f"></i></a>
                      <a href="#0"><i className="fab fa-twitter"></i></a>
                      <a href="#0"><i className="fab fa-behance"></i></a>
                      <a href="#0"><i className="fab fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-7">
                  <div className="footer-widget">
                    <h4 className="widget-title">Links</h4>
                    <div className="row">
                      <div className="col-5 pr-10">
                        <ul>
                          <li><a href="index.html">Home</a></li>
                          <li><a href="index.html">Services</a></li>
                          <li><a href="index.html">About</a></li>
                          <li><a href="index.html">Contact</a></li>
                          <li><a href="index.html">Signup</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-5 col-lg-5">
                  <div className="footer-widget department">
                    <h4 className="widget-title">Department</h4>
                    <ul>
                      <li><a href="index.html">Emergency Department</a></li>
                      <li><a href="index.html">Obstetrics and Gynecology Department</a></li>
                      <li><a href="index.html">Cardiology Department</a></li>
                      <li><a href="index.html">Oncology Department</a></li>
                      <li><a href="index.html">Neurology Department</a></li>
                      <li><a href="index.html">Orthopedics Department</a></li>
                      <li><a href="index.html">Radiology Department</a></li>
                      <li><a href="index.html">Intensive Care Unit (ICU)</a></li>
                      <li><a href="index.html">Mental Health Department</a></li>
                      <li><a href="index.html">Infectious Disease Department</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text">
                    <p>Copyright By@<span>Green Hill Hospital</span> - 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 pl-0 pr-10">
              <div className="opening-hour-box bg_img ml-none-10" data-overlay="94" data-background="assets/images/bg/open-hour-bg.jpg">
                <div className="opening-hour-top">
                  <div className="icon">
                    <img src="assets/images/icons/clock-icon-white.png" alt="" />
                  </div>
                  <div className="content">
                    <h5 className="title">Opening Hours</h5>
                    <p>Timings for in person medical care. With online consultation we
                      are available 24/7.</p>
                    <p>Contact: +1(888) 8888</p>
                  </div>
                </div>
                <div className="opening-hour-list">
                  <ul>
                    <li>Monday - Friday<span>8:00 - 16:00</span></li>
                    <li>Saturday<span>8:00 - 12:00</span></li>
                    <li>Sunday<span><strong>Closed</strong></span></li>
                    <li>Lunch Break<span>9:15 - 22:45</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>



    </>
  )
}
