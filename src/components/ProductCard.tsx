import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Package, Tag, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/data/mockData';
import { useQuote } from '@/contexts/QuoteContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToQuote } = useQuote();
  const { toast } = useToast();

  const handleAddToQuote = () => {
    addToQuote(product);
    toast({
      title: "Added to Quote",
      description: `${product.name} (${product.moq} pcs) added to your quote cart.`,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frames':
        return 'bg-primary/10 text-primary';
      case 'sunglasses':
        return 'bg-accent/10 text-accent';
      case 'lenses':
        return 'bg-success/10 text-success';
      case 'accessories':
        return 'bg-warning/10 text-warning';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="card-product group h-full flex flex-col">
        <div className="relative aspect-square bg-gradient-subtle rounded-t-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge className={`text-xs ${getCategoryColor(product.category)}`}>
              {product.category}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="text-xs">
              {product.model}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
            
            {/* Product Details */}
            <div className="space-y-2 mb-4">
              {product.material && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Info className="w-3 h-3 mr-1" />
                  Material: {product.material}
                </div>
              )}
              {product.color && (
                <div className="flex items-center text-xs text-muted-foreground">
                  <Tag className="w-3 h-3 mr-1" />
                  Color: {product.color}
                </div>
              )}
            </div>
          </div>

          {/* Pricing & Actions */}
          <div className="space-y-3 mt-auto">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold text-primary">
                  ${product.price}
                </p>
                <p className="text-xs text-muted-foreground">per piece</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Package className="w-4 h-4 mr-1" />
                  MOQ: {product.moq}
                </div>
              </div>
            </div>

            <Button
              onClick={handleAddToQuote}
              className="w-full btn-professional group"
              size="sm"
            >
              <Plus className="w-4 h-4 mr-2 transition-transform group-hover:rotate-90" />
              Add to Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;