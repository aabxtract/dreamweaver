import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GalleryPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Dream Gallery</h1>
        <p className="mt-4 text-lg text-foreground/80">
          A collective repository of woven dreams from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PlaceHolderImages.map((image) => (
          <Card key={image.id} className="overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-0">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={800}
                className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
                data-ai-hint={image.imageHint}
              />
            </CardContent>
             <CardHeader className="p-4">
               <CardDescription className="font-body italic">{image.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
