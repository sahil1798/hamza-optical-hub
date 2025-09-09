import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  city: string;
  inquiryType: string;
  message: string;
}

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    city: '',
    inquiryType: '',
    message: ''
  });

  const inquiryTypes = [
    { value: 'wholesale', label: 'Wholesale Partnership' },
    { value: 'pricing', label: 'Pricing Inquiry' },
    { value: 'products', label: 'Product Information' },
    { value: 'support', label: 'Customer Support' },
    { value: 'other', label: 'Other' }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: [
        'Shop #45, Optical Market',
        'Mall Road, Lahore, Pakistan',
        '54000'
      ],
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+92 300 1234567',
        '+92 42 1234567',
        'WhatsApp Available'
      ],
      color: 'text-accent'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'wholesale@hamzaopticals.com',
        'info@hamzaopticals.com',
        'support@hamzaopticals.com'
      ],
      color: 'text-success'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 8:00 PM',
        'Sunday: 10:00 AM - 6:00 PM',
        'Public Holidays: Closed'
      ],
      color: 'text-warning'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      inquiryType: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Contact Form Submission:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      city: '',
      inquiryType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to partner with us? Get in touch and let's discuss how we can support 
              your optical business with our wholesale solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">
                  We're here to help you grow your optical business. Reach out to us 
                  for wholesale inquiries, product information, or any questions.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-professional">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${info.color}`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+92 300 1234567"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Your city"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="businessName">Business Name</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          placeholder="Your optical shop name"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select value={formData.inquiryType} onValueChange={handleSelectChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements, questions, or how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> For wholesale inquiries, please include your business 
                        license number and estimated monthly order volume to help us provide 
                        accurate pricing information.
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-professional">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MapPin className="w-6 h-6 mr-3 text-primary" />
                Visit Our Showroom
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Shop #45, Optical Market, Mall Road, Lahore
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Google Maps integration would be implemented here
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="font-semibold">Parking Available</h4>
                  <p className="text-sm text-muted-foreground">Free parking for customers</p>
                </div>
                <div>
                  <h4 className="font-semibold">Public Transport</h4>
                  <p className="text-sm text-muted-foreground">Near Metro Bus Station</p>
                </div>
                <div>
                  <h4 className="font-semibold">Wheelchair Accessible</h4>
                  <p className="text-sm text-muted-foreground">Ground floor showroom</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;