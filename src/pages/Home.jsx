import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Catalog from "../components/Catalog";
import WhatsApp from "../components/WhatsApp";
import Garantias from "../components/Garantias";
import FacebookFeed from "../components/FacebookFeed";
import Testimonials from "../components/Testimonials";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Brands from "../components/Brands";
import ScrollToTop from "../components/ScrollToTop";
import Delivery from "../components/Delivery";



export default function Home() {
  return (
    <main className="font-sans scroll-smooth">
      <div className="pt-20">
        <Navbar /> 
        <Hero />
        <About />
        <Brands />
         <Catalog />
        <Delivery />
        <WhatsApp />
        <Garantias />
        <Testimonials />
        <FacebookFeed />
        <ContactForm />
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </div>
    </main>
  );
}
