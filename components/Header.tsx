import React from 'react';
import { BotIcon } from './Icons';

const Header: React.FC = () => {
    return (
        <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 p-4 sticky top-0 z-10">
            <div className="container mx-auto flex items-center gap-3">
                <BotIcon className="h-8 w-8 text-cyan-400" />
                <div>
                    <h1 className="text-xl font-bold text-white">Gembot</h1>
                    <p className="text-sm text-slate-400">Your friendly AI chat companion</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
