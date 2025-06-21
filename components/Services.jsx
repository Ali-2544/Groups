import { Shirt, GraduationCap, Code, Smartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shirt,
      title: 'GENROAR FASHION',
      description: 'Cutting-edge fashion designs and trendsetting apparel for the modern consumer.',
      features: ['Designer Collections', 'Custom Tailoring', 'Fashion Consulting', 'Retail Solutions'],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      icon: GraduationCap,
      title: 'GENROAR ACADEMY',
      description: 'Comprehensive educational programs designed to shape the future leaders.',
      features: ['Professional Courses', 'Skill Development', 'Certification Programs', 'Career Guidance'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Code,
      title: 'GENROAR IT SERVICES',
      description: 'Advanced technology solutions for businesses of all sizes.',
      features: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'IT Consulting'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Smartphone,
      title: 'ONEPOST APP',
      description: 'Revolutionary social media management tool for streamlined posting.',
      features: ['Multi-Platform Posting', 'Content Scheduling', 'Analytics Dashboard', 'Team Collaboration'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Discover our comprehensive range of services designed to meet all your business needs across multiple industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${service.bgColor} rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50`}>
                {/* Icon */}
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="font-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl p-8 mx-auto bg-white shadow-lg rounded-2xl">
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              Ready to Get Started?
            </h3>
            <p className="mb-8 text-xl text-gray-600">
              Join thousands of satisfied clients who trust GENROAR for their business needs.
            </p>
            <button className="px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}