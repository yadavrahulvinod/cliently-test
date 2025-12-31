// Simple version without framer-motion for testing
interface PortfolioCardSimpleProps {
  image: string;
  title?: string;
  subtitle?: string;
  size: 'laptop' | 'mobile' | 'square' | 'wide';
  delay?: number;
}

const sizeClasses = {
  laptop: 'aspect-[16/10]',
  mobile: 'aspect-[9/16]',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
};

const PortfolioCardSimple = ({ image, title, subtitle, size }: PortfolioCardSimpleProps) => {
  console.log('[DEBUG] PortfolioCardSimple rendering', { hasImage: !!image, size, title });
  
  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-card ${sizeClasses[size]} card-hover cursor-pointer`}
    >
      <img
        src={image}
        alt={title || 'Portfolio item'}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          console.error('[DEBUG] Image load error', { image, src: e.currentTarget.src });
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {(title || subtitle) && (
        <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
          {title && (
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          )}
          {subtitle && (
            <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioCardSimple;


