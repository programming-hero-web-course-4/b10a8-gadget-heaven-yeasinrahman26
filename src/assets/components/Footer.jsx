

const Footer = () => {
    return (
      <footer className="bg-gray-100 py-8 font-semibold ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Gadget Heaven</h2>
            <p className="text-gray-600 font-semibold">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Services</h3>
              <ul className="text-gray-600 space-y-1">
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Product Support
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Company</h3>
              <ul className="text-gray-600 space-y-1">
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Legal</h3>
              <ul className="text-gray-600 space-y-1">
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-gray-800">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );

};

export default Footer;