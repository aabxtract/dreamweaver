import EtherealBackground from '@/components/ethereal-background';
import { Button } from '@/components/ui/button';
import { MoveRight, Moon, Star, Cloud, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FloatingIcon = ({ icon: Icon, className, style }: { icon: React.ElementType, className?: string, style?: React.CSSProperties }) => (
  <Icon
    className={`absolute text-primary/30 animate-float ${className}`}
    style={style}
  />
);

export default function Home() {
  const icons = [
    { icon: Moon, className: 'w-16 h-16 top-[15%] left-[10%]', style: { animationDuration: '8s' } },
    { icon: Star, className: 'w-8 h-8 top-[25%] left-[30%]', style: { animationDuration: '6s', animationDelay: '1s' } },
    { icon: Cloud, className: 'w-20 h-20 top-[20%] right-[12%]', style: { animationDuration: '10s' } },
    { icon: Sparkles, className: 'w-12 h-12 bottom-[20%] left-[20%]', style: { animationDuration: '7s', animationDelay: '2s' } },
    { icon: Star, className: 'w-6 h-6 bottom-[15%] right-[25%]', style: { animationDuration: '9s', animationDelay: '3s' } },
    { icon: Moon, className: 'w-10 h-10 top-[50%] right-[30%]', style: { animationDuration: '12s', opacity: 0.2 } },
    { icon: Cloud, className: 'w-24 h-24 bottom-[10%] left-[5%]', style: { animationDuration: '11s', opacity: 0.25 } },
  ];

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <EtherealBackground />
      {icons.map((iconProps, i) => (
        <FloatingIcon key={i} {...iconProps} />
      ))}
      <div className="relative z-10 flex flex-col items-center text-center p-4">
        <h1 className="font-headline text-6xl md:text-8xl font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Dream Weaver
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          Unlock the canvas of your subconscious. Describe your dreams, and watch as they are woven into unique, evolving digital artworks on the blockchain.
        </p>
        <Link href="/dream" className="mt-8">
          <Button size="lg" className="font-headline text-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Start Weaving
            <MoveRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
