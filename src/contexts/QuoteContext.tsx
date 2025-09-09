import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '@/data/mockData';

export interface QuoteItem {
  product: Product;
  quantity: number;
}

interface QuoteState {
  items: QuoteItem[];
  total: number;
}

type QuoteAction =
  | { type: 'ADD_ITEM'; product: Product; quantity?: number }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' };

const QuoteContext = createContext<{
  state: QuoteState;
  dispatch: React.Dispatch<QuoteAction>;
  addToQuote: (product: Product, quantity?: number) => void;
  removeFromQuote: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
} | null>(null);

function quoteReducer(state: QuoteState, action: QuoteAction): QuoteState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === action.product.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.quantity || action.product.moq;
        const newTotal = updatedItems.reduce((sum, item) => 
          sum + (item.product.price * item.quantity), 0
        );
        return { items: updatedItems, total: newTotal };
      }

      const newItem: QuoteItem = {
        product: action.product,
        quantity: action.quantity || action.product.moq
      };
      const newItems = [...state.items, newItem];
      const newTotal = newItems.reduce((sum, item) => 
        sum + (item.product.price * item.quantity), 0
      );
      return { items: newItems, total: newTotal };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.product.id !== action.productId);
      const newTotal = newItems.reduce((sum, item) => 
        sum + (item.product.price * item.quantity), 0
      );
      return { items: newItems, total: newTotal };
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.product.id === action.productId
          ? { ...item, quantity: Math.max(action.quantity, item.product.moq) }
          : item
      );
      const newTotal = updatedItems.reduce((sum, item) => 
        sum + (item.product.price * item.quantity), 0
      );
      return { items: updatedItems, total: newTotal };
    }

    case 'CLEAR_CART': {
      return { items: [], total: 0 };
    }

    default:
      return state;
  }
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quoteReducer, { items: [], total: 0 });

  const addToQuote = (product: Product, quantity?: number) => {
    dispatch({ type: 'ADD_ITEM', product, quantity });
  };

  const removeFromQuote = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearQuote = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <QuoteContext.Provider value={{
      state,
      dispatch,
      addToQuote,
      removeFromQuote,
      updateQuantity,
      clearQuote
    }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}