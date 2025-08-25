import { Button } from '@/components/ui/button';
import { Leaf, Heart, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

const HeroSection = () => {
  const handleScrollToTreatments = () => {
    const element = document.getElementById('treatments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-kairali-cream via-kairali-cream-dark to-white pt-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="flex items-center mb-6 group">

            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-kairali-brown mb-6 leading-tight animate-fade-in-up">
              Step into
              <span className="text-kairali-green block relative">
                AROGYAVERSE
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-kairali-gold to-kairali-green transform scale-x-0 animate-[scale-x-100_1s_ease-out_0.5s_forwards] origin-left"></div>
              </span>
            </h1>
            
            <p className="text-xl text-kairali-brown/80 mb-8 leading-relaxed animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
              AarogyaVerse - Brings ancient Ayurveda to life through immersive VR. Explore timeless wellness practices, discover your dosha, and journey through serene virtual spaces that educate and heal. Experience the perfect fusion of traditional wisdom and cutting-edge technology for holistic well-being.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
              <Button 
                size="lg" 
                onClick={handleScrollToTreatments}
                className="bg-kairali-gold hover:bg-kairali-gold-dark text-kairali-brown px-8 py-4 rounded-lg text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10">Explore Treatments</span>
                <div className="absolute inset-0 bg-gradient-to-r from-kairali-gold-dark to-kairali-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleScrollToContact}
                className="border-kairali-brown text-kairali-brown hover:bg-kairali-brown hover:text-kairali-cream px-8 py-4 rounded-lg text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl font-semibold group"
              >
                <span className="group-hover:animate-pulse">Book Consultation</span>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in opacity-0 [animation-delay:0.9s] [animation-fill-mode:forwards]">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-kairali-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-kairali-gold/30 group-hover:scale-110 group-hover:animate-pulse-glow">
                  <Heart className="w-8 h-8 text-kairali-gold transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-kairali-brown mb-1 transition-colors duration-300 group-hover:text-kairali-gold">Meditation Chamber</h3>
                <p className="text-sm text-kairali-brown/70">A serene space for meditation and mindfulness practices</p>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-kairali-green/20 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-kairali-green/30 group-hover:scale-110 group-hover:animate-pulse-glow">
                  <Leaf className="w-8 h-8 text-kairali-green transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-kairali-brown mb-1 transition-colors duration-300 group-hover:text-kairali-green">Interactive Herbal Lab</h3>
                <p className="text-sm text-kairali-brown/70">An interactive herbal lab lets users explore medicinal plants in VR, learn Ayurvedic uses, and discover preparation methods hands-on.</p>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-kairali-brown/20 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-kairali-brown/30 group-hover:scale-110 group-hover:animate-pulse-glow">
                  <Sparkles className="w-8 h-8 text-kairali-brown transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-kairali-brown mb-1 transition-colors duration-300 group-hover:text-kairali-brown">Ayurveda Grand Hall</h3>
                <p className="text-sm text-kairali-brown/70">A grand hall for Ayurvedic consultations, where patients can interact with Ayurvedic physicians and learn about Ayurvedic practices.</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="animate-slide-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-kairali-gold to-kairali-gold-dark rounded-3xl transform rotate-6 opacity-20 transition-all duration-500 group-hover:rotate-3 group-hover:opacity-30"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://www.scu.edu.au/media/scu-dep/news/images/2023/Capsule-powder-care-2.jpg"
                    alt="Ayurvedic Treatment at AarogyaVerse - Traditional massage with herbs and oils"
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-kairali-gold text-kairali-brown p-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-float">
                  <div className="text-2xl font-bold">“Sat Chit Ananda”</div>
                  <div className="text-sm font-medium"> (truth, consciousness, bliss)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
