import { Target, Users, Award, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Committed to delivering innovative solutions that transform businesses and empower growth.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our clients success is our priority. We build lasting relationships through exceptional service.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from design to delivery.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving and adapting to bring cutting-edge solutions to market.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">GENROAR</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Founded with a vision to revolutionize multiple industries, GENROAR has grown into a comprehensive solution provider with expertise across fashion, education, technology, and digital marketing.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 mb-20 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Ideas Into Reality
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              At GENROAR, we believe in the power of innovation and collaboration. Our diverse portfolio of companies allows us to serve clients across multiple sectors, providing comprehensive solutions that drive real results.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">Innovation Hub

              From cutting-edge fashion designs to educational excellence, advanced IT services to revolutionary social media tools, we are committed to excellence in every venture we undertake.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-2xl font-bold text-blue-600">2020</div>
              <div className="text-gray-600">Founded</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl font-bold text-purple-600">Global</div>
              <div className="text-gray-600">Presence</div>
            </div>
          </div>

          <div className="relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover rounded-2xl"
              style={{ backgroundImage: "url('/assests/off.png')" }}
            />

            {/* Dark overlay with higher opacity */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center p-8 border h-96 border-white/10 rounded-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full shadow-lg bg-gradient-to-br from-blue-600 to-purple-600">
                  <span className="text-4xl font-bold text-white">GR</span>
                </div>
                <h4 className="mb-2 text-4xl text-white font-800">Innovation Hub</h4>
                <p className="text-xl text-white">Where ideas become reality</p>
              </div>
            </div>
          </div>


        </div>

        {/* Values */}
        <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-0">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative p-6 text-center transition-all duration-300 border shadow-lg bg-white/30 backdrop-blur-xl border-white/20 rounded-2xl group hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon wrapper with glow */}
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 rounded-full shadow-md bg-gradient-to-br from-blue-600 to-purple-600 group-hover:shadow-xl">
                <value.icon className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute w-full h-full bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              </div>

              {/* Title */}
              <h4 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                {value.title}
              </h4>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-700 transition-colors group-hover:text-gray-900">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}