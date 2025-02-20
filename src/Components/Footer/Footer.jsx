import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaApple, FaGooglePlay } from 'react-icons/fa';
// import RedLogo from '../../Assets/Images/RedLogo';
import WhiteLogo from '../../assets/Images/WhiteLogo';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/Images/mainLogo.jpeg'

const Footer = () => {
  return (
    <div className="footer bg-mainColor w-full text-white p-4">
      <div className="w-full px-5">
        
        {/* Logo Section */}
        <div className="flex items-center gap-x-2 mb-5">
          <WhiteLogo width={45} />
          <span className="text-3xl text-white font-TextFontRegular">Food2go</span>
        </div>

        {/* Footer Grid */}
        <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
          
          {/* Connect Us Section */}
          <div className="content">
            <h2 className="text-gray-200 font-bold">Connect Us</h2>
            <ul className="space-y-4 mt-4">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-3xl text-mainColor bg-white rounded-sm p-2"  />
                <span>Phone: +201111771103</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaWhatsapp className="text-3xl text-mainColor bg-white rounded-sm p-2"  />
                <span>WhatsApp: +201111771103</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-3xl text-mainColor bg-white rounded-sm p-2" />
                <span>Email: Info@food2go.online</span>
              </li>
              {/* <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-3xl text-mainColor bg-white rounded-sm p-2" />
                <span>Address: 329 Queensberry St, Melbourne</span>
              </li> */}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="content">
            <h2 className="text-gray-200 font-bold">Pages</h2>
            <ul className="gap-4 mt-4 flex flex-row md:flex-col">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `hover:text-white underline ${isActive ? 'text-white' : 'text-gray-300'}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="menu"
                  className={({ isActive }) =>
                    `hover:text-white underline ${isActive ? 'text-white' : 'text-gray-300'}`
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact_us"
                  className={({ isActive }) =>
                    `hover:text-white underline ${isActive ? 'text-white' : 'text-gray-300'}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Section */}
          <div className="content">
            <h2 className="text-gray-200 font-bold">Mobile</h2>
            <ul className="gap-2 mt-4 flex flex-row md:flex-col">
              <li className="border w-[50%] border-white rounded-lg p-2 flex items-center gap-4">
                <FaApple className="text-3xl text-white p-1" />
                <div>
                  <p className="text-sm">App Store</p>
                  {/* <p className="text-xs text-gray-400">Available now</p> */}
                </div>
              </li>
              <li className="border w-[50%] border-white rounded-lg p-2 flex items-center gap-4">
                <FaGooglePlay className="text-3xl text-white p-1" />
                <div>
                  <p className="text-sm">Google Play</p>
                  {/* <p className="text-xs text-gray-400">Get it on</p> */}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        {/* <div className="footer-bottom mt-10 flex justify-between items-center text-sm border-t-2 pt-3 border-gray-400">
          <div className="footer-left">
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-white ${isActive ? 'text-white font-bold' : 'text-black font-bold'}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-white ${isActive ? 'text-white font-bold' : 'text-black font-bold'}`
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact_us"
                  className={({ isActive }) =>
                    `hover:text-white ${isActive ? 'text-white font-bold' : 'text-black font-bold'}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-right text-lg">
            <p>©2024 . All rights reserved</p>
          </div>
        </div> */}
          <div className="flex justify-center items-center gap-3 text-sm mt-4">
            <Link to="https://food2go.online/" target="_blank" className="flex items-center justify-center gap-2">
            <p>©2025 . All rights reserved</p>
            <h1 className="text-white font-semibold text-xl">Food2go</h1>
            </Link>
          </div>

      </div>
    </div>
  );
};

export default Footer;
