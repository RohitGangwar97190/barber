import React, { useState, useEffect } from 'react';

const BarberShopLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`font-sans ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${darkMode ? 'bg-gray-900 border-b border-gray-700' : 'bg-black'} text-white sticky top-0 z-50`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">PRIME CUTS</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-yellow-500 transition">Home</a>
            <a href="#services" className="hover:text-yellow-500 transition">Services</a>
            <a href="#about" className="hover:text-yellow-500 transition">About</a>
            <a href="#gallery" className="hover:text-yellow-500 transition">Gallery</a>
            <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <i className="fas fa-sun text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon text-gray-400"></i>
              )}
            </button>
          </div>
          <div className="md:hidden">
            <div className="flex items-center">
              <button 
                onClick={toggleDarkMode} 
                className="p-2 mr-4 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <i className="fas fa-sun text-yellow-400"></i>
                ) : (
                  <i className="fas fa-moon text-gray-400"></i>
                )}
              </button>
              <button 
                className="focus:outline-none" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-6 py-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'}`}>
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="hover:text-yellow-500 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="hover:text-yellow-500 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="hover:text-yellow-500 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#gallery" 
                className="hover:text-yellow-500 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="hover:text-yellow-500 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="flex items-center h-screen bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop")` 
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Classic Cuts, Modern Style</h1>
          <p className="text-xl md:text-2xl mb-8">Premium barber services for the modern gentleman</p>
          <div className="flex justify-center">
            <a href="#appointment" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full transition mr-4">
              Book Now
            </a>
            <a href="#services" className="border-2 border-white hover:bg-white hover:text-black text-white font-bold px-8 py-3 rounded-full transition">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1`}>
              <div className="bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cut text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Haircut</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-center`}>Precision cuts tailored to your style, face shape, and personality.</p>
              <p className="text-xl font-bold text-center mt-4">$25</p>
            </div>

            {/* Service Card 2 */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1`}>
              <div className="bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-razor text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Beard Trim</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-center`}>Expert beard shaping and maintenance for a polished look.</p>
              <p className="text-xl font-bold text-center mt-4">$15</p>
            </div>

            {/* Service Card 3 */}
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1`}>
              <div className="bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-fire text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Hot Towel Shave</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-center`}>The ultimate relaxing traditional hot towel straight razor shave.</p>
              <p className="text-xl font-bold text-center mt-4">$35</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#appointment" className={`${darkMode ? 'bg-gray-900 hover:bg-black' : 'bg-black hover:bg-gray-900'} text-white font-bold px-8 py-3 rounded-full transition`}>
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?cs=srgb&dl=pexels-thgusstavo-1813272.jpg&fm=jpg" 
                alt="Barber Shop Interior w-600px h-600px" 
               
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                Founded in 2010, Prime Cuts has been providing premium barber services to gentlemen 
                who appreciate quality and style. Our master barbers combine traditional techniques 
                with modern trends to deliver exceptional results.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
                We pride ourselves on creating a welcoming atmosphere where you can relax and 
                enjoy the experience of being taken care of by skilled professionals.
              </p>
              <div className="flex space-x-6">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-500">10+</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Years Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-500">5</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Expert Barbers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-500">1000+</h3>
                  <p className="text-gray-700">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { id: 1, url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80", alt: "Classic Haircut" },
        { id: 2, url: "https://t4.ftcdn.net/jpg/02/13/03/89/360_F_213038977_OixVF24VDeUPSvtQSMxkvD7eXXlaSiZh.jpg", alt: "Beard Trim" },
        { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcSDOqa5kPzZhZjevLYfpZvu9MvyS4gIjTw&s", alt: "Hot Towel Shave" },
        { id: 4, url: "https://static.vecteezy.com/system/resources/thumbnails/028/287/247/small/man-with-a-low-fade-haircut-isolated-on-a-white-ai-generated-photo.jpg", alt: "Fade Haircut" },
        // ✅ Fixed URL
        { id: 5, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPpPCrE_Z7pVrJ5l0MiM1xOp6eCtjqX6v3g&s", alt: "Styling Products" },
        { id: 6, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPH9toCqzCpzg1Igv9N82XZmdw6Lh50PtBLA&s", alt: "Hair Coloring" },
        { id: 7, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj6ThdCJD9JI3yEFb85K3PIz92lLCtrJQKA&s", alt: "Modern Undercut" },
        { id: 8, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXi-w0MFjKjKMPb_bQ7DAUjVEAdyVUL0HEVg&s", alt: "Barber Tools" }
      ].map((item) => (
        <img 
          key={item.id}
          src={item.url} 
          alt={item.alt} 
          className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition"
          loading="lazy"
        />
      ))}
    </div>
  </div>
</section>



      {/* Testimonials Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">James Wilson</h4>
                  <div className="text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Best haircut I've ever had! The barber really took the time to understand what I wanted 
                and delivered perfectly. Will definitely be coming back."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">Michael Johnson</h4>
                  <div className="text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "The hot towel shave was amazing! Relaxing atmosphere and incredible service. 
                These guys really know what they're doing."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="/api/placeholder/102/100?text=Client+3" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Robert Davis</h4>
                  <div className="text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "I've been coming to Prime Cuts for years now. Consistently excellent service 
                and a great environment. Would highly recommend to anyone."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Book an Appointment</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 rounded-lg text-black" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 rounded-lg text-black" 
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Your Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 rounded-lg text-black" 
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label htmlFor="service" className="block mb-2">Service</label>
                <select id="service" className="w-full p-3 rounded-lg text-black">
                  <option value="haircut">Haircut - $25</option>
                  <option value="beard">Beard Trim - $15</option>
                  <option value="shave">Hot Towel Shave - $35</option>
                  <option value="combo">Haircut & Beard Trim - $35</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block mb-2">Preferred Date</label>
                <input type="date" id="date" className="w-full p-3 rounded-lg text-black" />
              </div>
              <div>
                <label htmlFor="time" className="block mb-2">Preferred Time</label>
                <input type="time" id="time" className="w-full p-3 rounded-lg text-black" />
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full transition"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                  <p className="text-gray-700 mb-2">
                    <i className="fas fa-map-marker-alt mr-2 text-yellow-500"></i> 
                    123 Main Street, Downtown, City
                  </p>
                  <p className="text-gray-700 mb-2">
                    <i className="fas fa-phone mr-2 text-yellow-500"></i> 
                    (123) 456-7890
                  </p>
                  <p className="text-gray-700 mb-2">
                    <i className="fas fa-envelope mr-2 text-yellow-500"></i> 
                    info@primecuts.com
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Hours</h3>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
               <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086282400222!2d-122.42177848468146!3d37.7749292797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2d8b6e3%3A0xe4a40c7ec7f47970!2sBarber%20Shop!5e0!3m2!1sen!2sin!4v1684200000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">PRIME CUTS</h3>
              <p className="text-gray-400 mt-2">Premium barber services since 2010</p>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="hover:text-yellow-500 transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
            <div>
              <a 
                href="#appointment" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded-full transition"
              >
                Book Now
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Prime Cuts Barber Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// For a complete React application, you would need to render this component
// Example:
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'; // Where Tailwind would be imported
// import BarberShopLandingPage from './BarberShopLandingPage';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <BarberShopLandingPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export default BarberShopLandingPage;