import { Share2, Calendar, BarChart3, Users, Zap, Clock } from 'lucide-react';

export default function OnePost() {
  const features = [
    {
      icon: Share2,
      title: 'Multi-Platform Posting',
      description: 'Post to Facebook, Instagram, Twitter, LinkedIn, and more with one click.'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Schedule your posts for optimal engagement times across all platforms.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance, engagement, and ROI with detailed analytics dashboard.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together with your team, assign roles, and manage content approval.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Content',
      description: 'Get content suggestions and optimize your posts with AI assistance.'
    },
    {
      icon: Clock,
      title: 'Time-Saving',
      description: 'Save hours of manual posting and focus on creating great content.'
    }
  ];

  const platforms = [
    { name: 'Facebook', color: 'bg-blue-600' },
    { name: 'Instagram', color: 'bg-pink-600' },
    { name: 'Twitter', color: 'bg-blue-400' },
    { name: 'LinkedIn', color: 'bg-blue-700' },
    { name: 'YouTube', color: 'bg-red-600' },
    { name: 'TikTok', color: 'bg-black' }
  ];

  return (
    <section id="onepost" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Share2 className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">OnePost</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The ultimate social media management solution that lets you post to all your social media accounts with just one click. Save time, increase engagement, and grow your online presence effortlessly.
          </p>
          
          {/* Supported Platforms */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <span className="text-gray-600 font-medium">Supports:</span>
            {platforms.map((platform, index) => (
              <div key={index} className={`${platform.color} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                {platform.name}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* App Preview */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">OnePost Dashboard</h3>
                  <Share2 className="h-8 w-8" />
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="h-4 bg-white/40 rounded mb-2"></div>
                    <div className="h-3 bg-white/30 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="h-4 bg-white/40 rounded mb-2"></div>
                    <div className="h-3 bg-white/30 rounded w-2/3"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="h-4 bg-white/40 rounded mb-2"></div>
                    <div className="h-3 bg-white/30 rounded w-4/5"></div>
                  </div>
                </div>
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold mt-6">
                  Post to All Platforms
                </button>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
              Why Choose OnePost?
            </h3>
            <div className="space-y-6">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Revolutionize Your Social Media?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and influencers who save hours every week with OnePost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
              Watch Demo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">14-day free trial • No credit card required</p>
        </div>
      </div>
    </section>
  );
}