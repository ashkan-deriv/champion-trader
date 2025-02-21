import { useEffect } from 'react';
import { cn } from '@/lib/utils';

type ToastPosition = 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface ToastProps {
  content: React.ReactNode;
  variant?: 'success' | 'error' | 'black';
  onClose: () => void;
  duration?: number;
  position?: ToastPosition;
}

export const Toast = ({ content, variant = 'success', onClose, duration = 3000, position = 'bottom-center' }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        'fixed bottom-4 z-[99999]',
        {
          'left-4': position === 'bottom-left',
          'left-1/2 -translate-x-1/2': position === 'bottom-center',
          'right-4': position === 'bottom-right'
        },
        'shadow-lg',
        'animate-in fade-in slide-in-from-bottom-4'
      )}
      role="alert"
    >
      {typeof content === 'string' ? (
        <div className="flex items-center gap-2">
          {variant === 'success' && (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
          {variant === 'error' && (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          <span className="text-sm font-medium">{content}</span>
        </div>
      ) : (
        content
      )}
    </div>
  );
};
