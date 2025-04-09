const ContactUs = () => {
  return (
    <div className=" flex items-center justify-center bg-gray-800 p-6">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-6">
          Contact Us
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 py-2 font-semibold rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
