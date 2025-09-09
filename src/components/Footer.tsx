import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-card-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-hero rounded-xl shadow-professional">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gradient-primary">HAMZA OPTICALS</h3>
                <p className="text-sm text-muted-foreground">Wholesale Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your trusted wholesale partner for premium optical products. Serving retailers 
              across the region with quality frames, lenses, and accessories since 2015.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>wholesale@hamzaopticals.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Shop #45, Optical Market, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/quote-cart" className="text-muted-foreground hover:text-primary transition-colors">
                  Quote Cart
                </Link>
              </li>
              <li>
                <Link to="/ledger" className="text-muted-foreground hover:text-primary transition-colors">
                  Account Ledger
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=frames" className="text-muted-foreground hover:text-primary transition-colors">
                  Optical Frames
                </Link>
              </li>
              <li>
                <Link to="/products?category=sunglasses" className="text-muted-foreground hover:text-primary transition-colors">
                  Sunglasses
                </Link>
              </li>
              <li>
                <Link to="/products?category=lenses" className="text-muted-foreground hover:text-primary transition-colors">
                  Lenses
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-card-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Hamza Opticals. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Wholesale Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;