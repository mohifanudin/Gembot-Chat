import React, { useState, useRef } from 'react';
import { SendIcon } from './Icons';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
    const [input, setInput] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            onSendMessage(input.trim());
            setInput('');
             if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e as unknown as React.FormEvent);
        }
    };

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700 p-4 sticky bottom-0">
            <div className="container mx-auto">
                <form onSubmit={handleSubmit} className="flex items-end gap-3">
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        rows={1}
                        className="flex-grow bg-slate-700 text-white rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 max-h-40"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="bg-cyan-600 text-white rounded-full p-3 h-12 w-12 flex-shrink-0 flex items-center justify-center hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
                    >
                        <SendIcon className="h-6 w-6" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatInput;
