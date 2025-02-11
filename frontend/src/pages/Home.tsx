// src/pages/Home.tsx
import React from "react";
import BentoGrid from "../components/BentoGrid"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-secondary md:text-5xl lg:text-6xl">
              Soko-Yetu - Your AI-Powered Agricultural Marketplace
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with buyers, sell your produce at fair prices, and get
              insights powered by AI.
            </p>
            <div className="mt-8 flex justify-center">
              <button className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-highlight transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-secondary">
              Why Choose Soko-Yetu?
            </h2>
            <BentoGrid>
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  AI-Powered Price Prediction
                </h3>
                <p className="text-gray-600">
                  Get real-time insights into market trends and predict future
                  prices for your produce.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Crop Quality Analysis
                </h3>
                <p className="text-gray-600">
                  Upload images of your crops and let our AI assess their
                  quality automatically.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Secure Transactions
                </h3>
                <p className="text-gray-600">
                  Enjoy seamless and secure payments through integrated payment
                  gateways.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Community Support
                </h3>
                <p className="text-gray-600">
                  Join a growing community of farmers and buyers sharing best
                  practices and knowledge.
                </p>
              </div>
            </BentoGrid>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-secondary">
              What Our Users Say
            </h2>
            <BentoGrid>
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">
                  "Soko-Yetu has transformed the way I sell my produce. The AI
                  predictions are spot-on!"
                </p>
                <p className="font-medium mt-2">- John Doe, Farmer</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">
                  "I love the ease of use and the ability to connect with local
                  farmers directly."
                </p>
                <p className="font-medium mt-2">- Jane Smith, Buyer</p>
              </div>
            </BentoGrid>
          </div>
        </section>

        {/* Call-to-Action Footer */}
        <section className="py-16 bg-secondary text-white text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Join thousands of farmers and buyers already using Soko-Yetu to
              grow their businesses.
            </p>
            <button className="px-6 py-3 bg-highlight text-secondary rounded-md hover:bg-primary transition-colors">
              Sign Up Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;