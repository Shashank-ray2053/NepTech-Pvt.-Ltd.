
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; timestamp: Date }[]>([
    { text: "Hi there! 👋 I'm your AI assistant. How can I help you today?", isUser: false, timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true, timestamp: new Date() }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response with typing indicator
    setTimeout(() => {
      const responses = [
        "I'd be happy to help with that! Could you provide more details?",
        "Great question! Let me explain how our services can help with that.",
        "I understand what you're looking for. Our team specializes in these solutions.",
        "Thanks for reaching out! I can definitely assist with your request.",
        "That's something we can help with. Would you like to schedule a consultation with our team?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { 
        text: randomResponse, 
        isUser: false,
        timestamp: new Date()
      }]);
      
      setIsTyping(false);
    }, 1500);
  };

  // Format time as HH:MM
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-4 right-4 z-50 p-4 rounded-full bg-accent text-white shadow-lg",
          "hover:bg-accent/90 transition-all duration-300 flex items-center gap-2",
          "animate-pulse-subtle"
        )}
      >
        <MessageCircle size={24} />
        <span className="hidden md:inline font-medium">Chat with AI</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md h-[600px] flex flex-col animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Assistant</h3>
                  <p className="text-xs text-foreground/60">Online | Replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-full text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] p-3 rounded-2xl flex flex-col",
                    message.isUser 
                      ? "ml-auto bg-accent text-white rounded-br-none"
                      : "bg-muted/50 rounded-bl-none"
                  )}
                >
                  <div>{message.text}</div>
                  <span className={cn(
                    "text-[10px] mt-1 self-end",
                    message.isUser ? "text-white/70" : "text-foreground/50"
                  )}>
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              ))}
              
              {isTyping && (
                <div className="max-w-[85%] p-3 rounded-2xl bg-muted/50 rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-accent/50 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-accent/50 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 rounded-full bg-accent/50 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/30"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className={cn(
                  "p-3 rounded-full text-white",
                  "transition-colors",
                  input.trim() && !isTyping 
                    ? "bg-accent hover:bg-accent/90" 
                    : "bg-accent/50 cursor-not-allowed"
                )}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
