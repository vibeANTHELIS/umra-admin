import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import styles from './layout.module.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainWrapper}>
        <Header />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
