import React, { useState } from "react";
import { Heart, DollarSign, Users, Shield } from "lucide-react";

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = [25, 50, 100, 250, 500];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Your donation directly funds our programs and creates lasting change
            in communities around the world. Every contribution matters.
          </p>
        </div>

        <div className="grid grid-cols-1  gap-16 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Choose Your Impact
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`p-4 rounded-xl font-semibold transition-all duration-200 ${
                    selectedAmount === amount
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6 p-4 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                Your ${customAmount || selectedAmount} can provide:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Educational supplies for 5 children</li>
                <li>• Medical care for 3 families</li>
                <li>• Clean water access for 1 month</li>
              </ul>
            </div>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg mb-4">
              Donate ${customAmount || selectedAmount} Now
            </button>

            <div className="flex items-center justify-center text-sm text-gray-500">
              <Shield className="w-4 h-4 mr-2" />
              <span>Secure payment processing</span>
            </div>
          </div>

          {/* <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Heart className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Monthly Giving</h3>
              <p className="text-blue-100 mb-6">
                Join our community of monthly donors and provide sustained support 
                that allows us to plan long-term projects and respond quickly to emergencies.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Become a Monthly Donor
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Users className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Corporate Partnerships</h3>
              <p className="text-blue-100 mb-6">
                Partner with us to create meaningful corporate social responsibility 
                programs that align with your values and make a real difference.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Learn About Partnerships
              </button>
            </div>
          </div> */}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-100 mb-4">
            Prefer other ways to help? We also accept in-kind donations and
            volunteer support.
          </p>
          <button className="text-white underline hover:text-blue-200 transition-colors">
            Explore Other Ways to Give
          </button>
        </div>
      </div>
    </section>
  );
};

export default Donation;
