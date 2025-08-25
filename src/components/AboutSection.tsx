
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Leaf, Globe } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Award,
      number: "Innovation",
      label: "",
      description: "Pioneering the future of  digital wellness through immersive technology"
    },
    {
      icon: Users,
      number: "Community",
      label: "",
      description: "Join our community of Ayurvedic enthusiasts"
    },
    {
      icon: Leaf,
      number: "200+",
      label: "",
      description: "Ayurvedic Treatments"
    },
    {
      icon: Globe,
      number: "Global Reach",
      label: "",
      description: "Connecting Ayurveda to the world"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-kairali-cream via-white to-kairali-cream-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-6 group">
              <div className="w-12 h-1 bg-kairali-gold mr-4 transition-all duration-500 group-hover:w-16"></div>
              <span className="text-kairali-gold font-semibold text-lg">About Arogyaverse</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-kairali-brown mb-6 leading-tight animate-fade-in-up">
              The Ayurvedic
              <span className="text-kairali-green relative">
                {" "}VR Experience
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-kairali-green to-kairali-gold transform scale-x-0 animate-[scale-x-100_1s_ease-out_0.5s_forwards]"></div>
              </span>
            </h2>
            
            <div className="space-y-6 text-kairali-brown/80 leading-relaxed">
              <p className="text-lg animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] transition-all duration-300 hover:text-kairali-brown">
              AarogyaVerse is a WebVR-based immersive platform that enables users to explore the rich heritage of Ancient Indian Ayurveda in a fully interactive, engaging, and educational virtual environment. This project aims to blend traditional Indian wellness systems with modern immersive technologies, providing a multi-sensory learning experience for global users.


              </p>
              
              <p className="animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] transition-all duration-300 hover:text-kairali-brown">
              In Ayurveda, the three doshas — Vata, Pitta, and Kapha — are bio-energies that govern our physical and mental processes.
              </p>
              
              <p className="animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards] transition-all duration-300 hover:text-kairali-brown">
              Vata (air & space) controls movement and nervous system.<br></br>

              Pitta (fire & water) governs digestion and metabolism.<br></br>

Kapha (earth & water) maintains structure, strength, and immunity
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-kairali-gold transition-all duration-500 hover:shadow-xl hover:scale-[1.02] animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">
              <blockquote className="text-lg font-medium text-kairali-brown mb-3 italic">
                "Sarve bhavantu sukhinah, sarve santu niramayah"
              </blockquote>
              <cite className="text-kairali-gold font-semibold">— May all beings be happy and healthy</cite>
            </div>
          </div>

          {/* Right Content - Stats and Image */}
          <div className="animate-slide-in-right">
            {/* Main Video */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-4 bg-gradient-to-br from-kairali-gold to-kairali-gold-dark rounded-3xl opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-105"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <video
                  src="/meditation-chamber.mp4"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white group cursor-pointer animate-scale-in opacity-0"
                  style={{ animationDelay: `${index * 0.1 + 1}s`, animationFillMode: 'forwards' }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-kairali-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-kairali-gold/30 group-hover:scale-110">
                      <stat.icon className="w-6 h-6 text-kairali-gold transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="text-2xl font-bold text-kairali-brown mb-1 transition-all duration-300 group-hover:scale-110 group-hover:text-kairali-gold">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-kairali-brown mb-1 transition-colors duration-300 group-hover:text-kairali-green">
                      {stat.label}
                    </div>
                    <div className="text-sm text-kairali-brown/70 transition-colors duration-300 group-hover:text-kairali-brown/90">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
