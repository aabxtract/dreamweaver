'use server';

import { generateDreamNFT } from '@/ai/flows/generate-dream-nft';
import { z } from 'zod';

type FormState = {
  message: { type: 'success' | 'error', text: string } | null;
  nftImage: string | null;
};

const DreamSchema = z.object({
  dreamDescription: z.string().min(20, 'Please provide a more detailed dream description (at least 20 characters).'),
});

export async function generateDream(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = DreamSchema.safeParse({
    dreamDescription: formData.get('dreamDescription'),
  });

  if (!validatedFields.success) {
    return {
      message: {
        type: 'error',
        text: validatedFields.error.flatten().fieldErrors.dreamDescription?.join(', ') || 'Invalid input.',
      },
      nftImage: null,
    };
  }

  const { dreamDescription } = validatedFields.data;

  try {
    const result = await generateDreamNFT({ dreamDescription });
    if (result.nftImage) {
      return {
        message: { type: 'success', text: 'Dream forged successfully!' },
        nftImage: result.nftImage,
      };
    } else {
      throw new Error('The generated NFT image was empty.');
    }
  } catch (error) {
    console.error('Error generating dream NFT:', error);
    return {
      message: {
        type: 'error',
        text: 'Failed to forge dream. The cosmic energies are turbulent. Please try again later.',
      },
      nftImage: null,
    };
  }
}
