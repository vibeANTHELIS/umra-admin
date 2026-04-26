import React from 'react';
import Image from 'next/image';
import styles from './layout.module.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <div className="auth-bg-pattern" />
        <div className={styles.radialGlow} />
        
        <div className={styles.leftContent}>
          <div style={{ marginBottom: '24px' }}>
            <Image src="/logo.png" alt="Umrah Travel" width={180} height={60} style={{ objectFit: 'contain' }} priority />
          </div>
          
          <div className={styles.mosqueGlow} />
          <svg className={styles.mosqueSilhouette} viewBox="0 0 200 100" fill="none" stroke="var(--color-gold)" strokeWidth="2">
            <path d="M100 20 Q100 10 90 0 M100 20 Q100 10 110 0 M90 0 C70 40 40 50 10 100 L190 100 C160 50 130 40 110 0" />
            <path d="M40 40 L40 100 M160 40 L160 100 M100 20 L100 100" strokeWidth="1" />
            <circle cx="100" cy="15" r="5" fill="var(--color-gold)" />
          </svg>

          <h1 className={styles.headline}>Your Sacred Journey Awaits</h1>
          <p className={styles.subtext}>Manage pilgrimage experiences with excellence.</p>
          
          <div className={styles.goldDivider} />
          
          <div className={styles.arabicText}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>
        </div>

        <div className={styles.versionTag}>Umrah Travel Admin v1.0</div>
      </div>

      {/* Right Column */}
      <div className={styles.rightColumn}>
        {children}
      </div>
    </div>
  );
}
