import React, { useState, useEffect, useRef } from 'react';
import type { Chat } from '@google/genai';
import { Message } from './types';
import { startChat } from './services/geminiService';
import Header from './components/Header';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

const App: React.FC = () => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'model',
            content: "Hello! I'm Gembot. How can I assist you today?",
        },
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            setChat(startChat());
        } catch (e: any) {
            setError(e.message);
            console.error(e);
        }
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (userMessage: string) => {
        if (!chat) {
            setError('Chat is not initialized. Please refresh the page.');
            return;
        }

        setIsLoading(true);
        setError(null);
        
        const updatedMessages: Message[] = [
            ...messages,
            { role: 'user', content: userMessage },
            { role: 'model', content: '' } // Placeholder for streaming response
        ];
        setMessages(updatedMessages);

        try {
            const result = await chat.sendMessageStream({ message: userMessage });
            
            let accumulatedText = '';
            for await (const chunk of result) {
                accumulatedText += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = accumulatedText;
                    return newMessages;
                });
            }

        } catch (e) {
            const errorMessage = "Sorry, I encountered an error. Please try again.";
            setError(errorMessage);
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].content = errorMessage;
                return newMessages;
            });
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-slate-900 text-white font-sans">
            <Header />
            <main className="flex-grow overflow-y-auto p-4 container mx-auto">
                <div className="flex flex-col">
                    {messages.map((msg, index) => (
                        <ChatMessage 
                            key={index} 
                            message={msg}
                            isStreaming={isLoading && index === messages.length - 1}
                        />
                    ))}
                     {error && <div className="text-red-400 text-center p-4">{error}</div>}
                    <div ref={messagesEndRef} />
                </div>
            </main>
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
    );
};

export default App;
