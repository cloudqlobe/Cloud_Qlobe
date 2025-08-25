import React from 'react';

const Contactenquires = () => {
  return (
    <div className="bg-white text-gray-900 font-sans py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto border border-orange-400 rounded-2xl p-10 shadow-xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-orange-500">
          General Enquiries
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Have questions about our services, careers, collaborations, or anything else? Submit your query and our team will get back to you as soon as possible.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-orange-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-orange-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              placeholder="Subject of your enquiry"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-orange-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Enquiry Type</label>
            <select className="w-full border border-gray-300 px-4 py-3 rounded text-gray-700 focus:outline-orange-400">
              <option value="">Select an option</option>
              <option>Job Opportunity</option>
              <option>Service Inquiry</option>
              <option>Business Partnership</option>
              <option>Technical Support</option>
              <option>General Question</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactenquires;
