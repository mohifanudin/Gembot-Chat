import React from 'react';

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

export const BotIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.99 10.51c0-1.23-.39-2.36-1.04-3.32L18.3 2.5 17.5 2l-.8.5 1.34 3.35C16.83 5.33 15.5 5 14.01 5c-1.5 0-2.83.33-4.04.85L11.3 2.5 10.5 2l-.8.5 1.34 3.35C9.8 6.5 9 7.82 9 9.33V10H5v2h4v.67c0 1.51.8 2.83 2.05 3.52l-1.34 3.35.8.5.8-.5-1.34-3.35c1.21.52 2.54.85 4.04.85 1.49 0 2.82-.33 4.03-.85l-1.34 3.35.8.5.8-.5 1.34-3.35c1.25-.69 2.05-2.01 2.05-3.52V12h4v-2h-4.01v-.67c0-.4.04-.79.11-1.17l.08-.35zM12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
);
