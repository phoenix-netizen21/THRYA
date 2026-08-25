'use client';

import Image from 'next/image';
import styles from './TeamMemberCard.module.css';
import { TeamMember } from '@/types/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const imageUrl = member.photoUrl || '/placeholder/team-placeholder.jpg';

  return (
    <div className={styles.card}>
      <div className={`${styles.imageContainer} ${member.isLead ? styles.leadBorder : ''}`}>
        <Image
          src={imageUrl}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 200px"
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h4 className={styles.name}>{member.name}</h4>
        {member.position && <p className={styles.role}>{member.position}</p>}
        {member.department && <p className={styles.department}>{member.department}</p>}
      </div>
    </div>
  );
}
