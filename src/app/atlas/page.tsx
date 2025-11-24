import DreamAtlas from './dream-atlas';

export default function AtlasPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col h-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">The Dream Atlas</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
          A living map of the global subconscious. Explore the trending themes and emotions flowing through the collective dreamscape.
        </p>
      </div>

      <div className="flex-grow">
        <DreamAtlas />
      </div>
    </div>
  );
}
