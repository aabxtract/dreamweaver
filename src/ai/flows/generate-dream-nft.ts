'use server';

/**
 * @fileOverview This file defines a Genkit flow that takes a dream description as input and generates a unique, abstract art NFT using generative AI.
 *
 * - generateDreamNFT - The main function to generate a dream NFT from a dream description.
 * - GenerateDreamNFTInput - The input type for the generateDreamNFT function.
 * - GenerateDreamNFTOutput - The output type for the generateDreamNFT function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDreamNFTInputSchema = z.object({
  dreamDescription: z
    .string()
    .describe('A detailed description of the dream to be transformed into an NFT.'),
});
export type GenerateDreamNFTInput = z.infer<typeof GenerateDreamNFTInputSchema>;

const GenerateDreamNFTOutputSchema = z.object({
  nftImage: z
    .string()
    .describe(
      'The generated NFT image as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected typo here
    ),
});
export type GenerateDreamNFTOutput = z.infer<typeof GenerateDreamNFTOutputSchema>;

export async function generateDreamNFT(input: GenerateDreamNFTInput): Promise<GenerateDreamNFTOutput> {
  return generateDreamNFTFlow(input);
}

const generateDreamNFTPrompt = ai.definePrompt({
  name: 'generateDreamNFTPrompt',
  input: {schema: GenerateDreamNFTInputSchema},
  output: {schema: GenerateDreamNFTOutputSchema},
  prompt: `Given the following dream description, generate a unique and abstract NFT image that visually represents the essence of the dream. The image should be surreal and ethereal, reflecting the subconscious nature of dreams.

Dream Description: {{{dreamDescription}}}

Create an image as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'.`,
});

const generateDreamNFTFlow = ai.defineFlow(
  {
    name: 'generateDreamNFTFlow',
    inputSchema: GenerateDreamNFTInputSchema,
    outputSchema: GenerateDreamNFTOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.dreamDescription,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate NFT image.');
    }

    return {nftImage: media.url};
  }
);
