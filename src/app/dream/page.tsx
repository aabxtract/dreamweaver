import DreamForm from "./dream-form";

export default function DreamPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Weave a New Dream</h1>
        <p className="mt-4 text-lg text-foreground/80">
          Translate your subconscious thoughts into a unique piece of digital art. Describe your dream in the space below, and let our AI forge it into an NFT.
        </p>
      </div>

      <div className="mt-12">
        <DreamForm />
      </div>
    </div>
  );
}
