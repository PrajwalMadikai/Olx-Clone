import React from 'react';

const Footer = () => {
  return (
    <div className="pt-24">
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Popular Locations */}
          <section className="footer-column">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Popular Locations</h2>
            <ul className="space-y-2">
              <li><a href="/kolkata_g4157275" className="text-gray-600 hover:text-gray-900">Kolkata</a></li>
              <li><a href="/mumbai_g4058997" className="text-gray-600 hover:text-gray-900">Mumbai</a></li>
              <li><a href="/chennai_g4059162" className="text-gray-600 hover:text-gray-900">Chennai</a></li>
              <li><a href="/pune_g4059014" className="text-gray-600 hover:text-gray-900">Pune</a></li>
            </ul>
          </section>

          {/* Trending Locations */}
          <section className="footer-column">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Trending Locations</h2>
            <ul className="space-y-2">
              <li><a href="/bhubaneshwar_g4059049" className="text-gray-600 hover:text-gray-900">Bhubaneshwar</a></li>
              <li><a href="/hyderabad_g4058526" className="text-gray-600 hover:text-gray-900">Hyderabad</a></li>
              <li><a href="/chandigarh_g4058651" className="text-gray-600 hover:text-gray-900">Chandigarh</a></li>
              <li><a href="/nashik_g4059002" className="text-gray-600 hover:text-gray-900">Nashik</a></li>
            </ul>
          </section>

          {/* About Us */}
          <section className="footer-column">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">About Us</h2>
            <ul className="space-y-2">
              <li><a href="https://tech.olx.in/" className="text-gray-600 hover:text-gray-900">Tech@OLX</a></li>
            </ul>
          </section>

          {/* Corporate Links */}
          <section className="footer-column">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">OLX</h2>
            <ul className="space-y-2">
              <li><a href="https://www.olx.in/blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="https://help.olx.in/hc/en-us" className="text-gray-600 hover:text-gray-900">Help</a></li>
              <li><a href="/sitemap/most-popular" className="text-gray-600 hover:text-gray-900">Sitemap</a></li>
              <li>
                <a
                  href="https://help.olx.in/hc/en-us/categories/10781706981149-Legal-Privacy-information"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Legal & Privacy Information
                </a>
              </li>
              <li>
                <a href="https://bugbase.ai/programs/olx" className="text-gray-600 hover:text-gray-900">
                  Vulnerability Disclosure Program
                </a>
              </li>
            </ul>
          </section>

          {/* Follow Us */}
          <section className="footer-follow">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/olxindia/" target="_blank" rel="noopener noreferrer">
                <svg
                  width="30px"
                  height="30px"
                  fill="gray"
                  className="hover:fill-gray-900"
                  viewBox="0 0 1024 1024"
                  fillRule="evenodd"
                >
                  <path d="M697.376 565.332L719.489 410.898H581.163V310.679C581.163 268.429 600.485 227.246 662.442 227.246H725.334V95.7681C725.334 95.7681 668.257 85.3333 613.689 85.3333C499.764 85.3333 425.303 159.295 425.303 293.194V410.898H298.667V565.332H425.303V938.667H581.163V565.332H697.376V565.332Z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/olx_india/" target="_blank" rel="noopener noreferrer">
                <svg
                  width="30px"
                  height="30px"
                  fill="gray"
                  className="hover:fill-gray-900"
                  viewBox="0 0 1024 1024"
                  fillRule="evenodd"
                >
                  <path d="M511.979..."></path>
                </svg>
              </a>
              {/* Add other social links here */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
