import { TeamMember } from '@/types/team';

/**
 * Team hierarchy data with real members and positions.
 */
export const teamData = {
  conveners: [
    {
      id: 'conv-1',
      name: 'Sreya Vinod',
      department: 'Traditional Arts Club',
      photoUrl: '/images/team/sreya-vinod.png',
      position: 'Convener',
      isLead: true,
    },
  ] as TeamMember[],

  coConveners: [
    {
      id: 'coconv-1',
      name: 'Amrutha Venugopal',
      department: 'Traditional Arts Club',
      photoUrl: '/images/team/amrutha-venugopal.jpeg',
      position: 'Co-Convener',
      isLead: true,
    },
    {
      id: 'coconv-2',
      name: 'Nandhana Manoj',
      department: 'Traditional Arts Club',
      photoUrl: '/images/team/nandhana-manoj.jpeg',
      position: 'Co-Convener',
      isLead: true,
    },
  ] as TeamMember[],

  wings: {
    logistics: [
      {
        id: 'log-lead',
        name: 'Sreelekshmi',
        department: 'Logistics & Documentation',
        photoUrl: '/images/team/sreelekshmi.jpeg',
        position: 'Logistics Lead',
        isLead: true,
      },
      {
        id: 'log-1',
        name: 'Nandhana V',
        department: 'Logistics & Documentation',
        photoUrl: '/images/team/nandhana-v.jpeg',
        position: 'Logistics Coordinator',
        isLead: false,
      },
      {
        id: 'log-2',
        name: 'Shwetha Sathyan',
        department: 'Logistics & Documentation',
        photoUrl: '/images/team/shwetha-sathyan.png',
        position: 'Logistics Coordinator',
        isLead: false,
      },
      {
        id: 'log-3',
        name: 'Varsha Vinod',
        department: 'Logistics & Documentation',
        photoUrl: '/images/team/varsha-vinod.jpeg',
        position: 'Logistics Coordinator',
        isLead: false,
      },
    ] as TeamMember[],

    accounts: [
      {
        id: 'acc-lead',
        name: 'Vaishnavi',
        department: 'Accounts',
        photoUrl: '/images/team/vaishnavi.png',
        position: 'Accounts Lead',
        isLead: true,
      },
      {
        id: 'acc-1',
        name: 'Akhila',
        department: 'Accounts',
        photoUrl: '/images/team/akhila.jpeg',
        position: 'Accounts Coordinator',
        isLead: false,
      },
      {
        id: 'acc-2',
        name: 'Akshara',
        department: 'Accounts',
        photoUrl: '/images/team/akshara.png',
        position: 'Accounts Coordinator',
        isLead: false,
      },
    ] as TeamMember[],

    media: [
      {
        id: 'med-lead',
        name: 'Adish Pramod',
        department: 'Media',
        photoUrl: '/images/team/adish-pramod.jpeg',
        position: 'Media Lead',
        isLead: true,
      },
      {
        id: 'med-1',
        name: 'Devatheertha',
        department: 'Media',
        photoUrl: '/images/team/devatheertha.jpeg',
        position: 'Media Coordinator',
        isLead: false,
      },
      {
        id: 'med-2',
        name: 'Durga',
        department: 'Media',
        photoUrl: '/images/team/durga.jpeg',
        position: 'Media Coordinator',
        isLead: false,
      },
      {
        id: 'med-3',
        name: 'Neha',
        department: 'Media',
        photoUrl: '/images/team/neha.jpeg',
        position: 'Media Coordinator',
        isLead: false,
      },
    ] as TeamMember[],
  },

  yearCoordinators: {
    year4: [
      {
        id: 'yc-y4-1',
        name: 'Lakshmi S Madhav',
        department: 'Year-wise Coordinator',
        photoUrl: '/images/team/lakshmi-s-madhav.jpeg',
        position: 'Year 4 Coordinator',
        isLead: false,
      },
    ] as TeamMember[],
    year3: [
      {
        id: 'yc-y3-1',
        name: 'Gayathri Murali',
        department: 'Year-wise Coordinator',
        photoUrl: '/images/team/gayathri-murali.jpeg',
        position: 'Year 3 Coordinator',
        isLead: false,
      },
    ] as TeamMember[],
    year2: [] as TeamMember[],
    year1: [] as TeamMember[],
  },
};
