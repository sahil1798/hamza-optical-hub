import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Package, Users, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-optical-shop.jpg';
import framesImage from '@/assets/optical-frames-collection.jpg';

const HomePage = () => {
  const features = [
    {
      icon: Package,
      title: 'Premium Quality',
      description: 'Carefully curated optical products from trusted manufacturers worldwide.'
    },
    {
      icon: Users,
      title: 'B2B Focused',
      description: 'Specialized wholesale pricing and bulk order solutions for retailers.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All products meet international quality standards with warranty protection.'
    },
    {
      icon: Star,
      title: 'Trusted Partner',
      description: 'Serving optical retailers since 2015 with consistent quality and service.'
    }
  ];

  const stats = [
    { value: '2000+', label: 'Products Available' },
    { value: '500+', label: 'Retail Partners' },
    { value: '9+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' }
  ];

  const categories = [
    { name: 'Optical Frames', count: '800+ Models', href: '/products?category=frames' },
    { name: 'Sunglasses', count: '600+ Styles', href: '/products?category=sunglasses' },
    { name: 'Lenses', count: '200+ Options', href: '/products?category=lenses' },
    { name: 'Accessories', count: '400+ Items', href: '/products?category=accessories' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hamza Opticals Wholesale"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-white/20 text-white mb-6 px-4 py-2">
                Wholesale Optical Solutions
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium
                <span className="block text-accent-light">Optical Products</span>
                <span className="block text-3xl lg:text-4xl font-normal">for Retailers</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Your trusted wholesale partner for high-quality frames, lenses, and accessories. 
                Serving optical retailers with competitive pricing and exceptional service since 2015.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="btn-accent group">
                    Browse Products
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-professional-lg">
                <img
                  src={framesImage}
                  alt="Premium Optical Collection"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Premium Collection</h3>
                  <p className="text-white/90">2000+ Products Available</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent-light mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Hamza Opticals?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to providing optical retailers with the best products, 
              competitive pricing, and exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-professional text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-professional">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of optical products designed for modern retailers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={category.href}>
                  <Card className="card-professional group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{category.count}</p>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Browse
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful optical retailers who trust Hamza Opticals 
              for their wholesale needs. Start building your quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="btn-accent">
                  Start Shopping
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;