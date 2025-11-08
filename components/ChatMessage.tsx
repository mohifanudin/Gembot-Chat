import React from 'react';
import { Message } from '../types';
import { UserIcon, BotIcon } from './Icons';
import Spinner from './Spinner';

interface ChatMessageProps {
    message: Message;
    isStreaming?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isStreaming }) => {
    const { role, content } = message;
    const isModel = role === 'model';

    const containerClasses = isModel
        ? 'flex items-start gap-3'
        : 'flex items-start gap-3 flex-row-reverse';
    
    const bubbleClasses = isModel
        ? 'bg-slate-800 text-slate-200'
        : 'bg-blue-600 text-white';

    const Icon = isModel ? BotIcon : UserIcon;
    const iconClasses = isModel ? "text-cyan-400" : "text-blue-300";

    return (
        <div className={`py-4 ${containerClasses}`}>
            <div className={`h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center bg-slate-700`}>
                <Icon className={`h-6 w-6 ${iconClasses}`} />
            </div>
            <div className={`rounded-lg px-4 py-2 max-w-lg md:max-w-xl lg:max-w-2xl ${bubbleClasses}`}>
                <div className="whitespace-pre-wrap prose prose-invert prose-sm">
                    {content}
                    {isModel && isStreaming && !content && <div className="flex items-center gap-2"><Spinner /><span>Thinking...</span></div>}
                    {isModel && isStreaming && content && <span className="inline-block w-2 h-4 bg-slate-400 animate-pulse ml-1" />}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
