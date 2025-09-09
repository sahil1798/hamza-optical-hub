import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingCart, FileText, Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useQuote } from '@/contexts/QuoteContext';

interface QuoteFormData {
  name: string;
  businessName: string;
  city: string;
  phone: string;
  email: string;
  notes: string;
}

const QuoteCartPage = () => {
  const { state, removeFromQuote, updateQuantity, clearQuote } = useQuote();
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    businessName: '',
    city: '',
    phone: '',
    email: '',
    notes: ''
  });

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeFromQuote(productId);
    toast({
      title: "Item Removed",
      description: "Product has been removed from your quote cart.",
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate quote preview
    const quoteData = {
      customer: formData,
      items: state.items,
      total: state.total,
      date: new Date().toISOString(),
      quoteId: `HO-QUOTE-${Date.now()}`
    };

    console.log('Quote Request:', quoteData);
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll process your quote and get back to you within 24 hours.",
    });

    // Reset form and cart
    setFormData({
      name: '',
      businessName: '',
      city: '',
      phone: '',
      email: '',
      notes: ''
    });
    setShowForm(false);
    clearQuote();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Your Quote Cart is Empty
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Start building your wholesale order by adding products to your quote cart.
          </p>
          <Link to="/products">
            <Button size="lg" className="btn-professional">
              Browse Products
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center mb-4">
            <Link to="/products">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Quote Cart
          </h1>
          <p className="text-xl text-muted-foreground">
            Review your selected products and request a wholesale quote
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Selected Products ({state.items.length})</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearQuote}
                      className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      Clear All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {state.items.map((item, index) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-lg border border-card-border hover:shadow-professional-md transition-shadow"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Model: {item.product.model}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          MOQ: {item.product.moq} pcs
                        </p>
                        <div className="flex items-center mt-2">
                          <Badge variant="outline" className="text-xs">
                            {item.product.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - item.product.moq)}
                          disabled={item.quantity <= item.product.moq}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-16 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + item.product.moq)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ${item.product.price} each
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quote Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-8"
            >
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle>Quote Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Items:</span>
                      <span>{state.items.reduce((sum, item) => sum + item.quantity, 0)} pcs</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Product Lines:</span>
                      <span>{state.items.length}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Estimated Total:</span>
                      <span className="text-primary">${state.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Final pricing may vary based on current market rates, 
                      quantity discounts, and payment terms. This is an estimated quote.
                    </p>
                  </div>

                  {!showForm ? (
                    <Button
                      onClick={() => setShowForm(true)}
                      className="w-full btn-professional"
                      size="lg"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Request Quote
                    </Button>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="businessName">Business Name *</Label>
                          <Input
                            id="businessName"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleInputChange}
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
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
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
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="notes">Additional Notes</Label>
                          <Textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="Any specific requirements or questions..."
                            rows={3}
                          />
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowForm(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 btn-professional"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Send Quote
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCartPage;