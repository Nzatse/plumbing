"use client";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesRef = useRef(null);
  const locationsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cities = [
    "St. Paul, MN", "Bloomington, MN", "Plymouth, MN", "Maple Grove, MN",
    "Woodbury, MN", "Eagan, MN", "Eden Prairie, MN", "Coon Rapids, MN",
    "Blaine, MN", "Lakeville, MN", "Edina, MN", "Minnetonka, MN"
  ];

  const services = [
    ["Emergency Plumbing", "/services/emergency-plumbing"],
    ["Plumbing Repairs", "/services/plumbing-repairs"],
    ["Plumbing Installation", "/services/plumbing-installation"],
    ["Drain Cleaning", "/services/drain-cleaning"],
    ["Drain Repairs", "/services/drain-repairs"],
    ["Sewer Line Repair & Replacement", "/services/sewer-line-repair"],
    ["Water Line Repair & Replacement", "/services/water-line-repair"],
    ["Leak Detection", "/services/leak-detection"],
    ["Pipe Repair", "/services/pipe-repair"],
    ["Pipe Installation & Repiping", "/services/pipe-installation-repiping"],
    ["Water Heater Repair", "/services/water-heater-repair"],
    ["Water Heater Installation & Replacement", "/services/water-heater-installation"],
    ["Tankless Water Heater Services", "/services/tankless-water-heaters"],
    ["Faucet Repair & Replacement", "/services/faucet-repair-replacement"],
    ["Sink Repair & Replacement", "/services/sink-repair-replacement"],
    ["Toilet Repair & Installation", "/services/toilet-repair-installation"],
    ["Shower & Bathtub Repair", "/services/shower-bathtub-services"],
    ["Garbage Disposal Repair & Installation", "/services/garbage-disposal-services"],
    ["Water Filtration Systems", "/services/water-filtration-systems"],
    ["Water Softener Installation & Repair", "/services/water-softener-services"],
    ["Sump Pump Repair & Installation", "/services/sump-pump-services"],
    ["Gas Line Repair & Installation", "/services/gas-line-services"],
    ["Maintenance & Tune-Ups", "/services/maintenance-tune-ups"]
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="logo">
          <img src="/assets/logo-CCslVaxw.png" alt="Skyview Plumbing" />
        </a>

        {/* Desktop Menu */}
        <div className="menu desktop-menu">
          <a href="/">Home</a>

          <div className="dropdown" ref={servicesRef}>
            <button onClick={() => setServicesOpen(!servicesOpen)}>
              Services <span className={servicesOpen ? "arrow open" : "arrow"}>▼</span>
            </button>
            {servicesOpen && (
              <div className="dropdown-content mega-menu">
                {services.map(([name, link]) => (
                  <a key={name} href={link}>{name}</a>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown" ref={locationsRef}>
            <button onClick={() => setLocationsOpen(!locationsOpen)}>
              Service Areas <span className={locationsOpen ? "arrow open" : "arrow"}>▼</span>
            </button>
            {locationsOpen && (
              <div className="dropdown-content">
                {cities.map(city => (
                  <a key={city} href={`/locations/${city.toLowerCase().replace(/[\s.]/g, "-")}`}>
                    {city}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* Get a Quote Button */}
        <div className="quote-button-container">
          <a href="/contact" >  <button className="quote-button">Get a Quote</button></a>

        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/locations">Service Areas</a>
          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact Us</a>
          <button className="quote-button mobile-quote">Get a Quote</button>
        </div>
      )}

      <style jsx>{`
        nav.navbar {
          background: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 50;
          font-family: Arial, sans-serif;
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          height: 96px;
        }
        .logo img {
          height: 80px;
        }
        .menu.desktop-menu {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .menu a, .dropdown button {
          color: #333;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          font-size: 16px;
        }
        .menu a:hover, .dropdown button:hover {
          color: #d63626;
        }
        .dropdown {
          position: relative;
        }
        .arrow {
          margin-left: 4px;
          display: inline-block;
          transition: transform 0.3s;
        }
        .arrow.open {
          transform: rotate(180deg);
        }
        .dropdown-content {
        width: max-content;
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          border-radius: 8px;
          border: 1px solid #ddd;
          margin-top: 8px;
          display: grid;
          grid-template-columns: 1fr;
          min-width: 220px;
          z-index: 100;
        }
        .mega-menu {
          grid-template-columns: repeat(3, 1fr);
          padding: 16px;
        }
        .dropdown-content a {
          padding: 8px 12px;
          color: #333;
          text-decoration: none;
          transition: all 0.2s;
        }
        .dropdown-content a:hover {
          background: #d63626;
          color: #fff;
          border-radius: 4px;
        }
        .quote-button-container .quote-button,
        .mobile-menu .quote-button.mobile-quote {
          background: #d63626;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s;
        }
        .quote-button:hover, .mobile-menu .quote-button.mobile-quote:hover {
          background: #b32a20;
        }
        .mobile-toggle {
          display: none;
          font-size: 28px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .mobile-menu {
          display: flex;
          flex-direction: column;
          background: #fff;
          padding: 16px;
          gap: 8px;
          border-top: 1px solid #ddd;
        }
        .mobile-menu a {
          color: #333;
          text-decoration: none;
          padding: 8px 0;
        }
        .mobile-menu a:hover {
          color: #d63626;
        }
        @media (max-width: 1024px) {
          .desktop-menu {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}