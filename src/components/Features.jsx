import {
  FaLightbulb,
  FaCalendarAlt,
  FaComments,
  FaChartBar,
  FaMagic,
  FaRobot,
  FaUserFriends,
  FaSmile,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "AI Event Planner",
      description: "Suggests best themes, venues, and budgets",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6" />,
      title: "Smart Scheduler",
      description: "Automatically arranges dates and reminders",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaComments className="w-6 h-6" />,
      title: "Chat with AI",
      description: "Real-time event planning assistant",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: <FaChartBar className="w-6 h-6" />,
      title: "Analytics",
      description: "Tracks expenses, attendees, and satisfaction",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const additionalFeatures = [
    {
      icon: <FaMagic className="w-5 h-5" />,
      text: "AI-powered theme suggestions",
    },
    {
      icon: <FaRobot className="w-5 h-5" />,
      text: "Automated vendor recommendations",
    },
    {
      icon: <FaUserFriends className="w-5 h-5" />,
      text: "Guest management tools",
    },
    {
      icon: <FaSmile className="w-5 h-5" />,
      text: "Satisfaction tracking",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl text-blue-600 mb-6">
            <FaLightbulb className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Event Planning Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful AI-driven tools to make your event planning seamless and
            efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div
                    className={`p-4 rounded-2xl ${feature.bgColor} ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Everything You Need for Perfect Events
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {feature.icon}
                </div>
                <span className="text-gray-700 font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto">
            <FaMagic className="w-5 h-5" />
            <span>Start Planning with AI</span>
          </button>
          <p className="text-gray-500 mt-4">
            Join thousands of successful event planners
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
