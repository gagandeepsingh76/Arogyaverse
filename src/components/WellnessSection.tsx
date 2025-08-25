
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils, Home, GraduationCap, Sparkles } from 'lucide-react';

const WellnessSection = () => {
  const services = [
    {
      icon: Home,
      title: "Ayurveda Grand Hall",
      description: "Step into the Ayurveda Grand Hall—a majestic VR space showcasing ancient texts, healing rituals, and timeless wellness wisdom brought vividly to life.",
      features: ["Healing Ritual Showcases", "Guided Walkthroughs", "Yoga & Meditation", "Ancient Manuscripts & Scrolls"],
      image: "https://wallpaperaccess.com/full/4568913.jpg"
    },
    {
      icon: Utensils,
      title: "Ayurvedic Cuisine",
      description: "Therapeutic food prepared according to Ayurvedic principles using organic ingredients from our own farm.",
      features: ["Dosha-specific meals", "Organic farm produce", "Medicinal recipes", "Sattvic cooking methods"],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Sparkles,
      title: "Meditation Chamber",
      description: "The meditation chamber offers serene VR spaces with guided sessions, calming sounds, and mindful prompts to restore balance, focus, and inner peace.",
      features: ["Guided VR Meditation", "Soothing Soundscapes", " Breath & Posture Tracking", "Mindfulness Prompts"],
      image: "https://spiritualsync.com/wp-content/uploads/2024/01/Guided_Tantric_Meditation_836f3ec7-d376-4413-adbd-e858d7e877dc-1024x574.png"
    },
    {
      icon: GraduationCap,
      title: "Ayurveda Herbal Lab",
      description: "The Ayurveda herbal lab lets users explore medicinal plants in VR, learn healing uses, and watch traditional preparation methods up close.",
      features: ["3D Medicinal Garden", "Preparation Tutorials", "Historical Insights", "Interactive Plant Scanning"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="wellness" className="py-20 bg-gradient-to-br from-emerald-50/50 via-white to-green-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-amber-600 mr-4"></div>
            <Sparkles className="w-8 h-8 text-emerald-700" />
            <div className="w-12 h-1 bg-amber-600 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Wellness
            <span className="text-emerald-700 block">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond treatments, discover a holistic approach to wellness that encompasses 
            authentic Ayurvedic lifestyle, nutrition, education, and spiritual well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <div className="w-12 h-1 bg-amber-600 mt-2"></div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-700 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    if (service.title === "Ayurvedic Cuisine") {
                      window.open("https://www.amrtasiddhi.com/recipes/", "_blank");
                    }
                  }}
                >
                  Explore {service.title}
                </Button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-slide-in-left`}>
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="border-0 bg-gradient-to-br from-emerald-700 to-emerald-800 text-white p-12 rounded-3xl shadow-2xl">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Begin Your Wellness Journey?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of guests who have experienced life-changing transformation 
                at Kairali - The Ayurvedic Healing Village.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Plan Your Visit
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Download Research Paper
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;
