'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateDream } from './actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Wand2 } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: null,
  nftImage: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full md:w-auto font-headline text-lg">
      {pending ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Forging...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-5 w-5" />
          Forge Dream NFT
        </>
      )}
    </Button>
  );
}

export default function DreamForm() {
  const [state, formAction] = useFormState(generateDream, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message && state.message.type === 'error') {
      toast({
        variant: "destructive",
        title: "Error Forging Dream",
        description: state.message.text,
      });
    }
  }, [state, toast]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      <Card className="bg-card/80 border-primary/20 shadow-lg">
        <CardContent className="p-6">
          <form action={formAction} className="space-y-6">
            <div>
              <label htmlFor="dreamDescription" className="block text-sm font-medium text-foreground/90 font-headline mb-2">
                Describe Your Dream
              </label>
              <Textarea
                id="dreamDescription"
                name="dreamDescription"
                rows={10}
                required
                placeholder="I dreamt of a city floating in a purple nebula, where buildings were made of crystal and sang a silent song..."
                className="shimmer bg-background/50 text-base"
              />
            </div>
            <div className="text-center">
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="flex flex-col items-center justify-center h-full">
        {state?.nftImage ? (
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-headline text-center mb-4">Your Dream Forged</h3>
            <Card className="animation-breathe overflow-hidden shadow-2xl shadow-primary/20">
              <CardContent className="p-0">
                <Image
                  src={state.nftImage}
                  alt="Generated Dream NFT"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            <div className="text-center mt-4">
              <Button variant="outline">Save to Gallery (Coming Soon)</Button>
            </div>
          </div>
        ) : (
          <Card className="w-full h-[400px] md:h-full flex flex-col items-center justify-center border-dashed border-2 bg-card/50 text-center p-8">
            <Wand2 className="h-16 w-16 text-primary/50" />
            <p className="mt-4 font-headline text-xl text-foreground/70">Your generated dream will appear here.</p>
            <p className="text-sm text-muted-foreground">Once you forge a dream, its visual representation will materialize in this space.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
