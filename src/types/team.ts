export interface TeamMember {
  id: string;
  name: string;
  department: string;
  photoUrl: string;
  year?: number;
  position?: string;
  isLead?: boolean;
}

export interface TeamWing {
  id: string;
  name: string;
  order: number;
  members: TeamMember[];
}

export interface YearGroup {
  year: number;
  members: TeamMember[];
}

export interface TeamData {
  wings: TeamWing[];
  yearWiseCoordinators: YearGroup[];
}
