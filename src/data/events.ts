import { ClubEvent } from '@/types/event';

/**
 * Upcoming events data.
 * Replace with API call or CMS integration later.
 */
export const upcomingEvents: ClubEvent[] = [];

export const pastEvents: ClubEvent[] = [
  {
    id: 'past-event-1',
    title: 'THRYA Inauguration',
    date: '2026-08-01', // Date of inauguration
    venue: 'College Auditorium',
    description: 'The grand official inauguration ceremony of THRYA, the traditional arts club, featuring multiple cultural and traditional arts performances.',
    flyerUrl: '/events/thrya-inauguration-flyer.pdf',
    status: 'past',
  },
];
