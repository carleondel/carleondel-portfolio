export interface WritingEntry {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  href?: string;
}

export const writingEntries: WritingEntry[] = [];
