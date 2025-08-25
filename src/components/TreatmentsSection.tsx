
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Droplets, Zap, Flower, TreePine, Sun, Moon, Leaf } from 'lucide-react';

const TreatmentsSection = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const treatments = [
    {
      icon: Droplets,
      title: "Panchakarma",
      description: "The ultimate detoxification and rejuvenation therapy through five cleansing procedures for complete body purification.",
      duration: "14-28 days",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      learnMoreUrl: "https://ayurveda.com/introduction-to-panchakarma/"
    },
    {
      icon: Flower,
      title: "Abhyanga",
      description: "Synchronized full body massage with medicated oils to improve circulation and eliminate toxins.",
      duration: "60-90 mins",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      learnMoreUrl: "https://www.kamaayurveda.in/blog/abhyanga"
    },
    {
      icon: Sun,
      title: "Shirodhara",
      description: "Continuous pouring of medicated oil on forehead for mental peace, clarity and neurological wellness.",
      duration: "45-60 mins",
      image: "https://krishnendu.org/wp-content/uploads/2018/08/Shirodhara-The-Ayurvedic-Way-of-Relaxation-768x576.jpg",
      learnMoreUrl: "https://www.forestessentialsindia.com/blog/shirodhara-benefits-and-importance-in-ayurveda.html"
    },
    {
      icon: TreePine,
      title: "Pizhichil",
      description: "Royal treatment combining oil massage with warm medicated oil bath for muscular and joint disorders.",
      duration: "60-90 mins",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      learnMoreUrl: "https://www.jeevanya.co.in/treatments/pizhichil/"
    },
    {
      icon: Zap,
      title: "Udvartana",
      description: "Powder massage therapy for weight reduction, improving skin texture and eliminating cellulite.",
      duration: "45-60 mins",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      learnMoreUrl: "https://amrutam.co.in/blogs/daily-reads/discovering-udvartana-ayurvedic-beauty-and-wellness-ritual"
    },
    {
      icon: Moon,
      title: "Njavarakizhi",
      description: "Therapeutic massage with medicated rice bolus for neurological disorders and body strengthening.",
      duration: "60-75 mins",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      learnMoreUrl: "https://omasra.com/pages/njavarakizhi"
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4 group">
            <div className="w-12 h-1 bg-kairali-gold mr-4 transition-all duration-500 group-hover:w-16"></div>
            <Leaf className="w-8 h-8 text-kairali-green animate-bounce-slow" />
            <div className="w-12 h-1 bg-kairali-gold ml-4 transition-all duration-500 group-hover:w-16"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-kairali-brown mb-6 animate-fade-in-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            
            <span className="text-kairali-green block relative">
              Ayurvedic Treatments
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-kairali-gold to-kairali-green scale-x-0 animate-[scale-x-100_1s_ease-out_0.7s_forwards]"></div>
            </span>
          </h2>
          <p className="text-xl text-kairali-brown/80 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
            Experience the healing power of traditional Kerala Ayurveda with our comprehensive 
            range of therapeutic treatments, each designed to restore balance and promote optimal health.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {treatments.map((treatment, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden bg-white cursor-pointer animate-scale-in opacity-0"
              style={{ animationDelay: `${index * 0.1 + 0.6}s`, animationFillMode: 'forwards' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 transition-all duration-300 group-hover:scale-110">
                  <div className="w-12 h-12 bg-kairali-cream/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <treatment.icon className="w-6 h-6 text-kairali-brown transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-kairali-gold text-kairali-brown px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-105 group-hover:bg-kairali-gold-light">
                  {treatment.duration}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-kairali-brown group-hover:text-kairali-green transition-colors duration-300">
                  {treatment.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-kairali-brown/80 mb-4 leading-relaxed group-hover:text-kairali-brown transition-colors duration-300">
                  {treatment.description}
                </p>
                <a href={treatment.learnMoreUrl} className="block">
                  <Button 
                    variant="outline" 
                    className="w-full border-kairali-gold text-kairali-gold hover:bg-kairali-gold hover:text-kairali-brown transition-all duration-500 font-semibold group-hover:scale-105 hover:shadow-lg"
                  >
                    <span className="group-hover:animate-pulse">Learn More</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in opacity-0 [animation-delay:1.2s] [animation-fill-mode:forwards]">
          <div className="bg-gradient-to-r from-kairali-brown to-kairali-brown-dark text-kairali-cream p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group">
            <h3 className="text-2xl font-bold mb-4 group-hover:animate-pulse">Begin Your Healing Journey Today</h3>
            <p className="text-lg mb-6 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
              Consult with our experienced Ayurvedic physicians to discover the perfect treatment plan for your wellness needs.
            </p>
            <Button 
              size="lg"
              onClick={handleScrollToContact}
              className="bg-kairali-gold text-kairali-brown hover:bg-kairali-gold-light px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-110 hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Book Your Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-kairali-gold-light to-kairali-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
