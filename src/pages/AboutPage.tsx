import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, Award, Truck, Shield, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutPage = () => {
  const milestones = [
    { year: '2015', title: 'Company Founded', description: 'Started as a small optical retailer in Lahore' },
    { year: '2017', title: 'Wholesale Division', description: 'Expanded to wholesale operations serving local retailers' },
    { year: '2019', title: 'Regional Expansion', description: 'Extended services across Punjab and KPK provinces' },
    { year: '2021', title: 'Digital Platform', description: 'Launched online ordering system for wholesale partners' },
    { year: '2023', title: '500+ Partners', description: 'Reached milestone of serving 500+ retail partners' },
    { year: '2024', title: 'Innovation Focus', description: 'Introduced latest eyewear technologies and smart frames' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every product meets international quality standards with comprehensive warranty protection.'
    },
    {
      icon: Users,
      title: 'Partner Success',
      description: 'We invest in our retail partners success through competitive pricing and reliable service.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Efficient logistics ensure timely delivery across Pakistan with real-time tracking.'
    },
    {
      icon: Award,
      title: 'Industry Excellence',
      description: 'Recognized leader in wholesale optical distribution with multiple industry awards.'
    }
  ];

  const team = [
    {
      name: 'Hamza Ahmed',
      role: 'Founder & CEO',
      description: 'Leading the company with 15+ years of optical industry experience.',
      image: '/placeholder.svg'
    },
    {
      name: 'Sarah Khan',
      role: 'Operations Manager',
      description: 'Ensuring smooth operations and maintaining quality standards.',
      image: '/placeholder.svg'
    },
    {
      name: 'Ali Raza',
      role: 'Sales Director',
      description: 'Building relationships with retail partners nationwide.',
      image: '/placeholder.svg'
    }
  ];

  const stats = [
    { value: '2000+', label: 'Products in Stock' },
    { value: '500+', label: 'Retail Partners' },
    { value: '50+', label: 'Cities Served' },
    { value: '99%', label: 'Customer Satisfaction' }
  ];

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
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold">About Hamza Opticals</h1>
            </div>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Since 2015, we've been the trusted wholesale partner for optical retailers across Pakistan, 
              providing premium eyewear products and exceptional service to help businesses thrive.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-accent-light mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="card-professional h-full">
                <CardContent className="p-8">
                  <Badge className="bg-primary/10 text-primary mb-4">Our Mission</Badge>
                  <h2 className="text-3xl font-bold mb-6">Empowering Optical Retailers</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide optical retailers with access to premium eyewear products at competitive 
                    wholesale prices, backed by exceptional service and reliable delivery. We believe 
                    in building long-term partnerships that drive mutual success and growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-professional h-full">
                <CardContent className="p-8">
                  <Badge className="bg-accent/10 text-accent mb-4">Our Vision</Badge>
                  <h2 className="text-3xl font-bold mb-6">Leading the Industry</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become Pakistan's most trusted wholesale optical partner, known for innovation, 
                    quality, and reliability. We envision a future where every optical retailer has 
                    access to world-class products and support to serve their customers better.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and define how we serve our partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-professional text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small optical shop to Pakistan's leading wholesale optical distributor.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="card-professional">
                      <CardContent className="p-6">
                        <Badge className="bg-primary/10 text-primary mb-3">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-professional"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals leading Hamza Opticals to new heights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-professional text-center">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <Badge variant="outline" className="mb-3">{member.role}</Badge>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <Card className="card-professional">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-muted-foreground text-sm">
                      Shop #45, Optical Market<br />Lahore, Pakistan
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-muted-foreground">+92 300 1234567</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-muted-foreground">wholesale@hamzaopticals.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;