'use client';

const EtherealBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-background -z-10">
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-3xl animate-float opacity-50" />
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full filter blur-3xl animate-float animation-delay-[-3s] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-secondary/20 rounded-full filter blur-3xl animate-float animation-delay-[-6s] opacity-50" />
    </div>
  );
};

export default EtherealBackground;
