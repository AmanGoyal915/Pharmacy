import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  const products = [
    { name: "Multiscan-G", image: "/p-51.png" },
    { name: "Acescan-SP", image: "/p-52.png" },
    { name: "Acescan-P", image: "/p-53.png" },
    { name: "Montiscan-L", image: "/p-54.png" },
    { name: "Multiscan-L", image: "/p-55.png" },
    { name: "Feroscan-XT", image: "/p-56.png" },
    { name: "Livscan 5G", image: "/p-57.png" },
    { name: "Protiscan", image: "/p-58.png" },
    { name: "Othoscan", image: "/p-6.png" },
  ];

  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3admp7k",
        "template_986jzby",
        formRef.current,
        "FpoXm8allvIU2S6D4"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 style={{ paddingLeft: "18px" }} className="logo">
          MediScan Pharmaceuticals
        </h1>
        <div>
          <button
            onClick={() => scrollToSection(homeRef)}
            className="nav-button"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="nav-button"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(productRef)}
            className="nav-button"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="nav-button"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="hero">
        <div className="wellness-container">
          <div className="wellness-background" />
          <div className="wellness-content">
            <h1>"Your Wellness, Our Mission."</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section about">
        {/* <h2>About Mediscan Pharmaceuticals</h2>
        <p>
          MediScan Pharmaceuticals is a dynamic and forward-thinking
          pharmaceutical company committed to transforming global healthcare
          through innovation, quality, and accessibility.
        </p> */}
        <div className="container">
          <div className="background" />
          <div className="content">
            <h1>About Mediscan Pharmaceuticals</h1>
            <p>
              MediScan Pharmaceuticals is a dynamic and forward-thinking
              pharmaceutical company committed to transforming global healthcare
              through innovation, quality, and accessibility. Established with a
              vision to improve patient outcomes and support healthcare
              professionals, we specialize in the research, development,
              manufacturing, and distribution of high-quality, affordable
              medicines.
            </p>
          </div>
          <div className="image-container">
            <img src="/p-2.jpeg" alt="Medical professionals" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services">
        <div className="services-container">
          <div className="services-background" />
          <div className="services-header">
            <h1>About Our Services</h1>
            <p>
              Mediscan Pharma is a leading pharmaceutical company involved in
              the trading, manufacturing, and distribution of high-quality
              pharmaceutical products.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <img src="/p-31.jpeg" alt="PCD Pharma Franchise" />
              <div className="service-content">
                <h2>PCD Pharma Franchise</h2>
                <p>
                  We offer pharma franchise opportunities, empowering pharma
                  professionals with strategic marketing support and
                  high-quality products to drive business growth.
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src="/p-32.jpeg" alt="Research & Innovation" />
              <div className="service-content">
                <h2>Research & Innovation</h2>
                <p>
                  Our Research and Development division introduces innovative
                  formulations and enhances existing ones to meet the evolving
                  needs of patients and caregivers.
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src="/p-33.jpeg" alt="Third Party Manufacturer" />
              <div className="service-content">
                <h2>Third Party Manufacturer</h2>
                <p>
                  Mediscan Pharmaceuticals is a fast-growing Indian
                  pharmaceutical company committed to providing high-quality,
                  affordable healthcare through GMP-WHO approved products.
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src="/p-34.jpeg" alt="Competitive Pricing" />
              <div className="service-content">
                <h2>Competitive Pricing</h2>
                <p>
                  We are committed to making essential medicines accessible
                  while upholding the highest quality standards and maintaining
                  competitive pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process">
        <div className="process-container">
          <div className="process-top">
            <img
              src="/p-4.jpeg"
              alt="Doctor with Patients"
              className="process-image"
            />
          </div>
          <div className="process-bottom"></div>
          <div className="process-content">
            <h1>We Process Every Detail</h1>
            <p>
              At Mediscan Pharmaceuticals, precision and quality are at the
              heart of everything we do. From research and development to
              manufacturing and distribution, we meticulously handle every
              detail to deliver safe, effective, and high-quality pharmaceutical
              products. Our commitment to excellence ensures that healthcare
              professionals and patients receive the best solutions for their
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section ref={productRef} className="section products">
        <div className="product-container">
          <h1 className="product-title">Products</h1>
          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-name">{product.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="section contact">
        <div className="healthcare-container">
          <h1 className="healthcare-title">Your Life Is Precious To Us</h1>
          <div className="healthcare-content">
            <div className="healthcare-left">
              <div className="healthcare-box">
                <div className="icon">🔹</div>
                <h2>We Are Always Ready For Your Health</h2>
                <p>
                  At Mediscan Pharmaceuticals, your health is our priority. We
                  are committed to providing high-quality medicines, innovative
                  solutions, and reliable healthcare support whenever you need
                  them. With a focus on excellence, accessibility, and patient
                  well-being, we ensure that you receive the best care at all
                  times.
                </p>
              </div>
              <div className="healthcare-box">
                <div className="icon">💉</div>
                <h2>Your Life Is Precious To Us</h2>
                <p>
                  At Mediscan Pharmaceuticals, we are dedicated to safeguarding
                  your health with high-quality medicines and innovative
                  healthcare solutions. Every step we take is driven by our
                  commitment to ensuring a healthier, happier life for you and
                  your loved ones. Your well-being is our mission.
                </p>
              </div>
            </div>
            <div className="healthcare-right">
              <img
                src="/p-7.jpeg"
                alt="Doctor with Stethoscope"
                className="healthcare-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="section contact">
        <div className="contact-container">
          <h1 className="contact-title">Get In Touch With Us</h1>
          <div className="contact-content">
            <div className="contact-left">
              <img
                src="/p-8.png"
                alt="Customer Support"
                className="contact-image"
              />
            </div>
            <form ref={formRef} onSubmit={sendEmail} className="contact-right">
              <input
                type="text"
                name="first_name"
                placeholder="Enter Your First Name"
                className="contact-input"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Enter Your Last Name"
                className="contact-input"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Enter Your Number Here"
                className="contact-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Here"
                className="contact-input"
                required
              />
              <textarea
                name="message"
                placeholder="Write your Enquiry here"
                className="contact-textarea"
                required
              ></textarea>
              <button type="submit" className="contact-button">
                SUBMIT YOUR ENQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Whatsapp */}
      <a
        href="https://wa.me/8968983355?text=Hi%20Mediscan%2C%20I%20have%20an%20enquiry"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp Chat"
          className="whatsapp-icon"
        />
      </a>
      {/* Toast */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
      />
    </div>
  );
};

export default App;
