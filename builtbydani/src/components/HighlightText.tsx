type HighlightTextProps = {
  children: React.ReactNode;
  color?: 'purple' | 'blue' | 'green' | 'black';
  className?: string;
};

export function HighlightText({ children, color = 'purple', className = '' }: HighlightTextProps) {
  const colorClasses = {
    purple: 'text-purple-300',
    blue: 'text-blue-300',
    green: 'text-green-300',
    black: 'text-black',
  };

  return (
    <span className={`${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
}
