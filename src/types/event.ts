export interface ClubEvent {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
  posterUrl?: string;
  photos?: string[];
  videos?: string[];
  status: 'upcoming' | 'past';
}
