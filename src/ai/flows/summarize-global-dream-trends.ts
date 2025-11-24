'use server';
/**
 * @fileOverview Summarizes global dream trends based on aggregated dream data.
 *
 * - summarizeGlobalDreamTrends - A function that generates a summary of global dream trends.
 * - SummarizeGlobalDreamTrendsInput - The input type for the summarizeGlobalDreamTrends function.
 * - SummarizeGlobalDreamTrendsOutput - The return type for the summarizeGlobalDreamTrends function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeGlobalDreamTrendsInputSchema = z.object({
  dreamData: z.string().describe('Aggregated data representing recent dream descriptions.'),
});
export type SummarizeGlobalDreamTrendsInput = z.infer<typeof SummarizeGlobalDreamTrendsInputSchema>;

const SummarizeGlobalDreamTrendsOutputSchema = z.object({
  summary: z.string().describe('A summary of the emotions and themes trending across global dreams.'),
});
export type SummarizeGlobalDreamTrendsOutput = z.infer<typeof SummarizeGlobalDreamTrendsOutputSchema>;

export async function summarizeGlobalDreamTrends(input: SummarizeGlobalDreamTrendsInput): Promise<SummarizeGlobalDreamTrendsOutput> {
  return summarizeGlobalDreamTrendsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeGlobalDreamTrendsPrompt',
  input: {schema: SummarizeGlobalDreamTrendsInputSchema},
  output: {schema: SummarizeGlobalDreamTrendsOutputSchema},
  prompt: `You are a dream analyst. Summarize the following dream data to identify the most common emotions and themes. Be concise and insightful.\n\nDream Data:\n{{{dreamData}}}`,
});

const summarizeGlobalDreamTrendsFlow = ai.defineFlow(
  {
    name: 'summarizeGlobalDreamTrendsFlow',
    inputSchema: SummarizeGlobalDreamTrendsInputSchema,
    outputSchema: SummarizeGlobalDreamTrendsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
