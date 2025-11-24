import EtherealBackground from '@/components/ethereal-background';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <EtherealBackground />
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
