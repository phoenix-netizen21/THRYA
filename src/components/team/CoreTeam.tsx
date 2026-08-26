'use client';

import React from 'react';
import styles from './CoreTeam.module.css';
import { teamData } from '@/data/team';
import TeamMemberCard from './TeamMemberCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TeamMember } from '@/types/team';

// Helper component for reveal
function RevealGroup({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref as any} className={`${styles.reveal} ${isVisible ? styles.visible : ''} ${className}`}>
      {children}
    </div>
  );
}

function MemberGrid({ members }: { members: TeamMember[] }) {
  if (!members || members.length === 0) {
    return <div className={styles.emptyState}>Members will be announced soon</div>;
  }

  return (
    <div className={styles.grid}>
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}

export default function CoreTeam() {
  const { conveners, coConveners, wings, yearCoordinators } = teamData;

  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <RevealGroup>
          <h2 className={styles.title}>Core Team</h2>
        </RevealGroup>

        <div className={styles.treeNode}>
          {/* CONVENERS */}
          <RevealGroup className={styles.group}>
            <h3 className={styles.groupTitle}>Conveners</h3>
            <MemberGrid members={conveners} />
          </RevealGroup>

          <div className={styles.connector}></div>

          {/* CO-CONVENERS */}
          <RevealGroup className={styles.group}>
            <h3 className={styles.groupTitle}>Co-Conveners</h3>
            <MemberGrid members={coConveners} />
          </RevealGroup>

          <div className={styles.connector}></div>

          {/* WINGS BRANCHING */}
          <div className={styles.branchesContainer}>
            {/* LOGISTICS & DOCUMENTATION */}
            <RevealGroup className={styles.branchNode}>
              <h4 className={styles.branchTitle}>Logistics & Documentation</h4>
              <MemberGrid members={wings.logistics} />
            </RevealGroup>

            {/* ACCOUNTS */}
            <RevealGroup className={styles.branchNode}>
              <h4 className={styles.branchTitle}>Accounts</h4>
              <MemberGrid members={wings.accounts} />
            </RevealGroup>

            {/* MEDIA */}
            <RevealGroup className={styles.branchNode}>
              <h4 className={styles.branchTitle}>Media</h4>
              <MemberGrid members={wings.media} />
            </RevealGroup>
          </div>

          <div className={styles.connector}></div>

          {/* YEAR-WISE CO-ORDINATORS */}
          <div className={styles.yearSection}>
            <RevealGroup>
              <h3 className={styles.groupTitle}>Year-wise Co-ordinators</h3>
            </RevealGroup>
            
            <div className={styles.yearGroups}>
              <RevealGroup className={styles.group}>
                <h4 className={styles.branchTitle}>Year 4</h4>
                <MemberGrid members={yearCoordinators.year4} />
              </RevealGroup>

              <RevealGroup className={styles.group}>
                <h4 className={styles.branchTitle}>Year 3</h4>
                <MemberGrid members={yearCoordinators.year3} />
              </RevealGroup>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
