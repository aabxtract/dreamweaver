'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { summarizeGlobalDreamTrends } from '@/ai/flows/summarize-global-dream-trends';
import { useEffect, useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Emotion = 'Serenity' | 'Joy' | 'Mystery' | 'Chaos';
const emotions: Emotion[] = ['Serenity', 'Joy', 'Mystery', 'Chaos'];

const emotionColors: Record<Emotion, string> = {
  Serenity: 'hsl(var(--primary))',
  Joy: 'hsl(var(--chart-2))',
  Mystery: 'hsl(var(--chart-4))',
  Chaos: 'hsl(var(--destructive))',
};

const mockDreamData = `
Dream 1: Flying over a calm, moonlit ocean. Felt peaceful.
Dream 2: Won a lottery, endless celebration with friends. Pure joy.
Dream 3: Lost in a foggy, endless library with whispering books. Unsettling but intriguing.
Dream 4: Chased by a shadowy figure through a collapsing city. Terrifying.
Dream 5: A picnic in a field of glowing flowers. Serene and beautiful.
Dream 6: Discovered a hidden door in my childhood home leading to a cosmic space. Mysterious.
Dream 7: Laughed uncontrollably at a joke told by a talking squirrel. Hilarious.
Dream 8: The ground crumbled beneath my feet. A sense of panic.
`;

type Node = {
  id: number;
  x: number;
  y: number;
  size: number;
  emotion: Emotion;
};

const generateNodes = (emotion: Emotion, count: number): Node[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 12 + 8,
    emotion,
  }));
};

export default function DreamAtlas() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeEmotion, setActiveEmotion] = useState<Emotion>('Serenity');

  const nodes = useMemo(() => ({
    Serenity: generateNodes('Serenity', 15),
    Joy: generateNodes('Joy', 12),
    Mystery: generateNodes('Mystery', 18),
    Chaos: generateNodes('Chaos', 10),
  }), []);

  useEffect(() => {
    async function getSummary() {
      try {
        const result = await summarizeGlobalDreamTrends({ dreamData: mockDreamData });
        setSummary(result.summary);
      } catch (error) {
        console.error('Failed to get dream summary:', error);
        setSummary('Could not load global dream trends at this time.');
      } finally {
        setIsLoading(false);
      }
    }
    getSummary();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
      <div className="lg:col-span-2">
        <Card className="h-[500px] lg:h-full w-full relative overflow-hidden bg-background/50 border-0">
          <div className="absolute inset-0">
            {Object.entries(nodes).map(([emotion, emotionNodes]) => (
              <div key={emotion} className={cn(
                "transition-opacity duration-1000",
                activeEmotion === emotion ? "opacity-100" : "opacity-0"
              )}>
                {emotionNodes.map(node => (
                  <div
                    key={node.id}
                    className="absolute rounded-full animate-pulse-glow"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      width: `${node.size}px`,
                      height: `${node.size}px`,
                      backgroundColor: emotionColors[node.emotion as Emotion],
                      boxShadow: `0 0 ${node.size * 2}px ${emotionColors[node.emotion as Emotion]}`,
                      animationDuration: `${Math.random() * 5 + 5}s`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-lg border">
            <div className="flex space-x-2">
              {emotions.map(emotion => (
                <Button
                  key={emotion}
                  variant={activeEmotion === emotion ? 'default' : 'ghost'}
                  onClick={() => setActiveEmotion(emotion)}
                  className="font-headline"
                >
                  {emotion}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div>
        <Card className="h-full bg-secondary/30 border-0">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Global Trends</CardTitle>
            <CardDescription>A summary of the collective subconscious.</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
              </div>
            ) : (
              <p className="text-foreground/90 font-body text-base leading-relaxed">{summary}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
