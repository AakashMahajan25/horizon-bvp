import React from 'react';
import { Users, Calendar, MessageSquare, Award, ArrowRight, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4 px-6 flex items-center justify-between border-b">
        <div className="text-xl font-bold text-[#303131] orbitron-900 cursor-pointer">HORIZON</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-[#303131] hover:text-[#71e5de]">Home</a>
          <a href="#about" className="text-[#303131] hover:text-[#71e5de]">About Us</a>
          <a href="#events" className="text-[#303131] hover:text-[#71e5de]">Events</a>
          <a href="#team" className="text-[#303131] hover:text-[#71e5de]">Team</a>
          {/* <a href="#gallery" className="text-[#303131] hover:text-[#71e5de]">Gallery</a> */}
          <a href="#contact" className="text-[#303131] hover:text-[#71e5de]">Contact</a>
        </div>
        <a href="mailto:me@aakashmahajan.com" className="bg-[#71e5de] text-[#303131] px-4 py-2 rounded-full hover:bg-[#303131] hover:text-[#71e5de]">
          Join Now
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen" id="home">
        <div className="absolute inset-0">
          <img 
            src="/1.jpg"
            className="w-full h-full object-cover"
            alt="Debate session"
          />
          <div className="absolute inset-0 bg-[#303131]/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Expand your Horizons</h1>
            {/* <p className="text-xl mb-8">BVP's Premier Public Speaking Society | Fostering Leadership, Critical Thinking & Communication Excellence Since 2020</p> */}
            <p className="text-lg mb-8 max-w-2xl mx-auto">Join a community of passionate debaters and public speakers who are shaping the future of discourse at Bharati Vidyapeeth</p>
            <a href="mailto:me@aakashmahajan.com" className="bg-[#71e5de] text-[#303131] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#303131] hover:text-[#71e5de] border-2 border-[#71e5de]">
              Join Our Next Debate
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6" id="about">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#303131]">About Horizon</h2>
          <p className="text-[#303131]/80 mb-12 max-w-3xl">
            Horizon is BVP's premier debating society, fostering intellectual discourse 
            and critical thinking since 2020. We provide a platform for students to develop 
            their oratory skills, analytical abilities, and confidence through structured 
            debates.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2 text-[#71e5de]">8+</p>
              <p className="text-[#303131]">Years Active</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2 text-[#71e5de]">100+</p>
              <p className="text-[#303131]">Current Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2 text-[#71e5de]">12+</p>
              <p className="text-[#303131]">Annual Events</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="2.jpg" 
              alt="Team meeting"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="5.jpg" 
              alt="Workshop session"
              className="w-full h-48 object-cover rounded-lg"
            />
             <img 
              src="3.jpg" 
              alt="Debate competition"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="4.jpg" 
              alt="Handshake"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-6 bg-[#303131]/5" id="events">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#303131]">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#71e5de]/20">
              <img 
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80" 
                alt="National Debate"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#303131]">National Debate Championship</h3>
                <p className="text-[#303131]/70 mb-4">Annual flagship event featuring top debaters from across the country</p>
                <a href="mailto:me@aakashmahajan.com" className="text-[#71e5de] font-medium hover:text-[#303131]">Register Now</a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#71e5de]/20">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
                alt="Workshop"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#303131]">Public Speaking Workshop</h3>
                <p className="text-[#303131]/70 mb-4">Interactive session on mastering the art of public speaking</p>
                <a href="mailto:me@aakashmahajan.com" className="text-[#71e5de] font-medium hover:text-[#303131]">Register Now</a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#71e5de]/20">
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80" 
                alt="Mock Parliament"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#303131]">Mock Parliament</h3>
                <p className="text-[#303131]/70 mb-4">Simulation of parliamentary proceedings and policy debates</p>
                <a href="mailto:me@aakashmahajan.com" className="text-[#71e5de] font-medium hover:text-[#303131]">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-6" id="team">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#303131]">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" 
                alt="Sarah Johnson"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#71e5de]"
              />
              <h3 className="font-medium text-[#303131]">Sarah Johnson</h3>
              <p className="text-[#303131]/70 text-sm">President</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" 
                alt="Michael Chen"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#71e5de]"
              />
              <h3 className="font-medium text-[#303131]">Michael Chen</h3>
              <p className="text-[#303131]/70 text-sm">Vice President</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" 
                alt="Emily Rodriguez"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#71e5de]"
              />
              <h3 className="font-medium text-[#303131]">Emily Rodriguez</h3>
              <p className="text-[#303131]/70 text-sm">Secretary</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" 
                alt="David Kim"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-[#71e5de]"
              />
              <h3 className="font-medium text-[#303131]">David Kim</h3>
              <p className="text-[#303131]/70 text-sm">Treasurer</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Membership Section */}
      <section className="py-20 px-6 bg-[#303131]/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#303131]">Become a Member</h2>
          <p className="text-[#303131]/70 mb-12">Join our community of passionate debaters and develop your public speaking skills</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border border-[#71e5de]/20">
              <div className="text-2xl font-bold mb-4 text-[#71e5de]">01</div>
              <h3 className="text-xl font-bold mb-2 text-[#303131]">Register</h3>
              <p className="text-[#303131]/70">Fill out the membership form</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#71e5de]/20">
              <div className="text-2xl font-bold mb-4 text-[#71e5de]">02</div>
              <h3 className="text-xl font-bold mb-2 text-[#303131]">Interview</h3>
              <p className="text-[#303131]/70">Brief interaction with the team</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#71e5de]/20">
              <div className="text-2xl font-bold mb-4 text-[#71e5de]">03</div>
              <h3 className="text-xl font-bold mb-2 text-[#303131]">Welcome</h3>
              <p className="text-[#303131]/70">Start your journey with Horizon</p>
            </div>
          </div>

          <a href="mailto:me@aakashmahajan.com" className="bg-[#71e5de] text-[#303131] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#303131] hover:text-[#71e5de] border-2 border-[#71e5de]">
            Apply Now
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#303131]">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg border border-[#71e5de]/30 focus:outline-none focus:ring-2 focus:ring-[#71e5de]"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg border border-[#71e5de]/30 focus:outline-none focus:ring-2 focus:ring-[#71e5de]"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full px-4 py-3 rounded-lg border border-[#71e5de]/30 focus:outline-none focus:ring-2 focus:ring-[#71e5de]"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#71e5de]/30 focus:outline-none focus:ring-2 focus:ring-[#71e5de]"
                  ></textarea>
                </div>
                <a href="mailto:me@aakashmahajan.com" className="bg-[#71e5de] text-[#303131] mt-12 px-6 py-3 rounded-full hover:bg-[#303131] hover:text-[#71e5de] border-2 border-[#71e5de]">
                  Send Message
                </a>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2 text-[#303131]">Address</h3>
                <p className="text-[#303131]/70">A-4 Block, Baba Ramdev Marg, Shiva Enclave, Paschim Vihar, New Delhi, Delhi, 110063</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-[#303131]">Email</h3>
                <p className="text-[#303131]/70">me@aakashmahajan.com</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-[#303131]">Phone</h3>
                <p className="text-[#303131]/70">+91 95827 99219</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#303131] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#71e5de]">HORIZON</h3>
              <p className="text-white/70">Premier Debating Society fostering intellectual discourse and critical thinking</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#71e5de]">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-white/70 hover:text-[#71e5de]">About Us</a></li>
                <li><a href="#events" className="text-white/70 hover:text-[#71e5de]">Events</a></li>
                <li><a href="#team" className="text-white/70 hover:text-[#71e5de]">Team</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-[#71e5de]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#71e5de]">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-[#71e5de]">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-[#71e5de]">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-[#71e5de]">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <img src="footer.jpg" alt="logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="text-center text-white/70 text-sm">
            <div className="flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-[#71e5de] fill-[#71e5de]" />
              <span>by <a href='https://www.linkedin.com/in/aakash-mahajan/' target='blank' className='underline'>Aakash Mahajan</a></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;