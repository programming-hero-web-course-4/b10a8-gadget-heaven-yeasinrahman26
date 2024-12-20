import { Helmet } from "react-helmet-async";


const About = () => {
    return (
      <div>
        <Helmet>
          <title>Gadget | About </title>
        </Helmet>
        <section className="bg-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* About Us Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <p className="text-gray-600">
                At Gadget Heaven, we are passionate about delivering the latest
                and greatest in technology to enhance your lifestyle.
              </p>
            </div>

            {/* Mission and Values */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Mission */}
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To lead the way in innovation by providing cutting-edge
                  technology solutions that improve lives and empower
                  communities.
                </p>
              </div>
              {/* Core Values */}
              <div className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Core Values
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Customer-Centric Approach</li>
                  <li>Innovation and Excellence</li>
                  <li>Integrity and Transparency</li>
                  <li>Sustainability and Responsibility</li>
                </ul>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
                What Our Customers Say
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Review 1 */}
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    "Gadget Heaven truly lives up to its name. The quality of
                    their products and customer service is unmatched!"
                  </p>
                  <div className="text-gray-800 font-semibold">
                    – Alex Johnson
                  </div>
                </div>
                {/* Review 2 */}
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    "Fast delivery and amazing gadgets. I've been a loyal
                    customer for years, and they never disappoint."
                  </p>
                  <div className="text-gray-800 font-semibold">
                    – Priya Singh
                  </div>
                </div>
                {/* Review 3 */}
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    "A tech lover's paradise! The support team is always helpful
                    and friendly."
                  </p>
                  <div className="text-gray-800 font-semibold">
                    – Michael Lee
                  </div>
                </div>
                {/* Review 4 */}
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    "Absolutely love their gadgets! They're sleek, modern, and
                    work flawlessly. Customer support is also excellent."
                  </p>
                  <div className="text-gray-800 font-semibold">
                    – Sarah Parker
                  </div>
                </div>
                {/* Review 5 */}
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    "I've purchased several items from Gadget Heaven, and every
                    experience has been top-notch. Highly recommend!"
                  </p>
                  <div className="text-gray-800 font-semibold">– David Kim</div>
                </div>
                {/* Review 6 */}
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    "Their gadgets are innovative and of high quality. I'm
                    always excited to see what they release next."
                  </p>
                  <div className="text-gray-800 font-semibold">
                    – Emily Jones
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Want to Know More?
              </h3>
              <p className="text-gray-600 mb-6">
                Join us on our journey to innovation. Explore our latest
                products and stay updated with cutting-edge tech.
              </p>
              <a
                href="#explore"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500"
              >
                Explore Now
              </a>
            </div>
          </div>
        </section>
      </div>
    );
};

export default About;