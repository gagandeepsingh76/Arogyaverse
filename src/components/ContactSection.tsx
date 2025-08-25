
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Arogyaverse - The Ayurvedic VR Experience",  "Kanpur, Uttar Pradesh, India - 209305"],
      color: "text-emerald-700"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9555504621",],
      color: "text-amber-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@arogyaaverse.com"],
      color: "text-emerald-700"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Mon - Sun: 6:00 AM - 9:00 PM", "Consultation: 8:00 AM - 6:00 PM", "Emergency: 24/7 Available"],
      color: "text-amber-600"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');
    
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    
    try {
      console.log('Sending payload:', payload);
      
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      console.log('Response status:', res.status);
      console.log('Response headers:', res.headers);
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('Error response:', errorText);
        throw new Error(`Server error: ${res.status} - ${errorText}`);
      }
      
      const json = await res.json();
      console.log('Success response:', json);
      
      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your inquiry has been sent successfully. We will contact you within 24 hours.');
      form.reset();
      
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setSubmitMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50/30 via-white to-green-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-amber-600 mr-4"></div>
            <Mail className="w-8 h-8 text-emerald-700" />
            <div className="w-12 h-1 bg-amber-600 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact
            <span className="text-emerald-700"> Arogyaverse</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your healing journey? Get in touch with us to plan your 
            personalized Ayurvedic treatment and wellness experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <div className={`w-10 h-10 ${info.color.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center mr-3`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-emerald-100 hover:bg-emerald-700 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Help/Support</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and our wellness consultants will contact you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input name="firstName"
                      placeholder="Enter your first name" 
                      className="border-gray-300 focus:border-emerald-700 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input name="lastName"
                      placeholder="Enter your last name" 
                      className="border-gray-300 focus:border-emerald-700 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input name="email"
                      type="email" 
                      placeholder="Enter your email" 
                      className="border-gray-300 focus:border-emerald-700 focus:ring-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input name="phone"
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="border-gray-300 focus:border-emerald-700 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Queries:
                  </label>
                  <select name="topic" className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-emerald-700 focus:outline-none transition-colors">
                    <option value="">Select your interest</option>
                    <option value="Website info">Website info</option>
                    <option value="Medical Consultation">Medical Consultation</option>
                    <option value="Ayurvedic Treatment">Ayurvedic Treatment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea name="message"
                    placeholder="Tell us about your health concerns, wellness goals ..." 
                    rows={5}
                    className="border-gray-300 focus:border-emerald-700 focus:ring-emerald-700 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-center">{submitMessage}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-center">{submitMessage}</p>
                  </div>
                )}

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. Your privacy is important to us and we will never share your information.
                </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
