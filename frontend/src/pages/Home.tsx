// src/pages/Home.tsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BentoGrid from "../components/BentoGrid";
import OverlayForm from "../components/OverlayForm";
import Button from "../components/Button";

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  // Toggle the overlay form
  const toggleForm = () => setShowForm((prev) => !prev);

  return (
    <>
      {/* Header */}
      <Header user={{ name: "John Doe" }} onLogout={() => console.log("Logged out")} />

      {/* Main Content */}
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
              <Button onClick={toggleForm} fullWidth className="w-auto">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section with BentoGrid */}
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

        {/* Call-to-Action Section */}
        <section className="py-16 bg-secondary text-white text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Join thousands of farmers and buyers already using Soko-Yetu to
              grow their businesses.
            </p>
            <Button onClick={toggleForm} fullWidth className="w-auto">
              Sign Up Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Overlay Form */}
      {showForm && <OverlayForm onClose={toggleForm} />}
    </>
  );
};

export default Home;