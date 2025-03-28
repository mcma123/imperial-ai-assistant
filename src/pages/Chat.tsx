
import React, { useState, useRef, useEffect } from 'react';
import { Send, ChevronDown, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/components/layout/AppLayout';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { getGroqChatCompletion } from '@/utils/groqService';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello, I am Agent Imperial. How can I assist you with business, accounting, tax, or legal matters today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [conversationHistory, setConversationHistory] = useState<Array<{ role: "system" | "user" | "assistant"; content: string }>>([
    {
      role: "system",
      content: "You are Agent Imperial, an AI assistant specialized in business, accounting, tax, and legal matters. Always provide professional, accurate, and concise answers. Your responses should be business-oriented and maintain a professional tone. If you don't know something, admit it clearly rather than providing incorrect information. Don't include phrases like 'As Agent Imperial' in your responses, just answer directly as if you are the expert."
    }
  ]);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Update conversation history
    const updatedHistory = [
      ...conversationHistory,
      { role: "user", content: input }
    ];
    setConversationHistory(updatedHistory);
    
    try {
      // Get AI response from Groq
      const aiResponse = await getGroqChatCompletion(updatedHistory);
      
      // Add AI message
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      
      // Update conversation history with AI response
      setConversationHistory(prev => [
        ...prev,
        { role: "assistant", content: aiResponse }
      ]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      toast({
        title: "Connection Error",
        description: "Unable to connect to AI service. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    // Reset messages
    setMessages([
      {
        id: Date.now().toString(),
        content: 'Hello, I am Agent Imperial. How can I assist you with business, accounting, tax, or legal matters today?',
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
    
    // Reset conversation history
    setConversationHistory([
      {
        role: "system",
        content: "You are Agent Imperial, an AI assistant specialized in business, accounting, tax, and legal matters. Always provide professional, accurate, and concise answers. Your responses should be business-oriented and maintain a professional tone. If you don't know something, admit it clearly rather than providing incorrect information. Don't include phrases like 'As Agent Imperial' in your responses, just answer directly as if you are the expert."
      }
    ]);
    
    toast({
      title: "Chat cleared",
      description: "All previous messages have been removed",
    });
  };

  const topics = [
    "Business Strategy", 
    "Financial Analysis", 
    "Tax Planning", 
    "Legal Compliance", 
    "Market Research"
  ];

  return (
    <AppLayout>
      <div className="flex flex-col h-screen bg-imperial-black circuit-bg">
        {/* Chat header */}
        <header className="bg-imperial-dark-purple/90 backdrop-blur-sm border-b border-imperial-silver/10 py-3 px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold text-imperial-silver">Agent Imperial AI Assistant</h1>
              <p className="text-xs text-imperial-silver/70">Business, Accounting, Tax & Legal Expert</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearChat}
              className="text-imperial-silver hover:text-white hover:bg-imperial-purple/20"
            >
              <X className="h-4 w-4 mr-2" />
              Clear Chat
            </Button>
          </div>
        </header>
        
        {/* Topic suggestions */}
        <div className="bg-imperial-dark-purple/50 py-3 px-4 overflow-x-auto whitespace-nowrap hide-scrollbar border-b border-imperial-silver/10">
          <div className="flex space-x-2">
            {topics.map((topic, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="cursor-pointer bg-imperial-dark-purple hover:bg-imperial-purple text-imperial-silver hover:text-white border-imperial-silver/20 transition-colors"
                onClick={() => setInput(prev => `${prev ? prev + ' ' : ''}${topic}?`)}
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-3xl rounded-lg px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-imperial-purple text-white'
                    : 'bg-imperial-dark-purple border border-imperial-silver/10 text-imperial-silver'
                }`}
              >
                {message.sender === 'ai' && (
                  <div className="flex items-center mb-1">
                    <span className="bg-imperial-purple/20 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                      <Sparkles className="h-3 w-3 text-imperial-light-purple" />
                    </span>
                    <span className="text-xs font-medium text-imperial-light-purple">Agent Imperial</span>
                  </div>
                )}
                <div className="text-sm">{message.content}</div>
                <div className="text-xs opacity-70 mt-1 text-right">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-3xl rounded-lg px-4 py-3 bg-imperial-dark-purple border border-imperial-silver/10 text-imperial-silver">
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 bg-imperial-purple/70 rounded-full animate-pulse"></div>
                  <div className="h-2 w-2 bg-imperial-purple/70 rounded-full animate-pulse delay-75"></div>
                  <div className="h-2 w-2 bg-imperial-purple/70 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <div className="border-t border-imperial-silver/10 bg-imperial-dark-purple/90 backdrop-blur-sm p-4">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about business, accounting, tax, or legal matters..."
                className="w-full rounded-lg bg-imperial-black border border-imperial-silver/20 text-imperial-silver placeholder-imperial-silver/50 p-3 pr-10 focus:ring-1 focus:ring-imperial-purple focus:border-imperial-purple resize-none h-12 max-h-32 min-h-[48px]"
                style={{ overflow: 'auto' }}
                rows={1}
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-imperial-purple hover:bg-imperial-light-purple text-white"
                      onClick={handleSendMessage}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send message (Enter)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="text-xs text-imperial-silver/50 mt-2 text-center">
            Agent Imperial provides business guidance but not formal legal, tax, or accounting advice.
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Chat;
