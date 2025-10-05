import {
  FaBirthdayCake,
  FaRing,
  FaBuilding,
  FaQuestionCircle,
  FaMusic,
  FaStar,
} from "react-icons/fa";
import { MdChat } from "react-icons/md";

const UpcomingEvents = () => {
  const events = [
    {
      icon: <FaBirthdayCake className="w-6 h-6" />,
      title: "Birthday",
      color: "text-pink-500",
      bgColor: "bg-pink-100",
    },
    {
      icon: <FaRing className="w-6 h-6" />,
      title: "Wedding",
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      icon: <FaBuilding className="w-6 h-6" />,
      title: "Corporate",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
  ];

  const customEvents = [
    {
      icon: <FaMusic className="w-5 h-5" />,
      title: "Festival",
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      icon: <FaStar className="w-5 h-5" />,
      title: "Custom Event",
      color: "text-orange-500",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Events List */}
          <div className="space-y-6">
            {/* Main Events */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Event Categories
              </h2>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div
                      className={`p-3 rounded-lg ${event.bgColor} ${event.color}`}
                    >
                      {event.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Custom Events */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="space-y-4">
                {customEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div
                      className={`p-2 rounded-lg ${event.bgColor} ${event.color}`}
                    >
                      {event.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - AI Chat */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <MdChat className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Ask our AI anything about your event!
              </h2>
            </div>

            {/* Chat Area */}
            <div className="space-y-4">
              {/* AI Message */}
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600 flex-shrink-0">
                  <FaQuestionCircle className="w-5 h-5" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
                  <p className="text-gray-700">Hello! How can I assist you?</p>
                </div>
              </div>

              {/* Input Area */}
              <div className="mt-8">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Type your question about event planning..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors duration-200 font-semibold">
                    Send
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Our AI assistant is here to help with any event planning
                  questions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Create New Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
