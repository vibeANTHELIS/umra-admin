"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Grid, Briefcase, CalendarCheck, Users, 
  FileCheck, Tag, Bell, LogOut, ShieldAlert,
  Building2, BarChart3, CreditCard, Landmark, Percent,
  ClipboardList, Settings, PiggyBank, UsersRound, ArrowRightLeft
} from 'lucide-react';
import styles from './Sidebar.module.css';

const NAV_GROUPS = [
  {
    label: "OVERVIEW",
    items: [
      { name: "Dashboard", href: "/", icon: Grid }
    ]
  },
  {
    label: "PILGRIMAGE",
    items: [
      { name: "Package Management", href: "/packages", icon: Briefcase },
      { name: "Booking Management", href: "/bookings", icon: CalendarCheck }
    ]
  },
  {
    label: "SAVINGS & SIP",
    items: [
      { name: "Saving Plans", href: "/saving-plans", icon: PiggyBank },
      { name: "Saving Pools", href: "/saving-pools", icon: UsersRound },
      { name: "SIP Transactions", href: "/sip-transactions", icon: ArrowRightLeft }
    ]
  },
  {
    label: "PEOPLE",
    items: [
      { name: "Customer Management", href: "/customers", icon: Users },
      { name: "Document Verification", href: "/documents", icon: FileCheck }
    ]
  },
  {
    label: "MARKETING",
    items: [
      { name: "Promotions & Coupons", href: "/promotions", icon: Tag },
      { name: "Notifications", href: "/notifications", icon: Bell }
    ]
  }
];

const SUPER_ADMIN_GROUPS = [
  {
    label: "PLATFORM CONTROL",
    items: [
      { name: "Admin Management", href: "/admins", icon: ShieldAlert },
      { name: "Franchise Management", href: "/franchises", icon: Building2 }
    ]
  },
  {
    label: "FINANCIALS",
    items: [
      { name: "Revenue & Reports", href: "/reports", icon: BarChart3 },
      { name: "Payment Gateways", href: "/payment-gateways", icon: CreditCard },
      { name: "Settlements", href: "/settlements", icon: Landmark },
      { name: "Commissions", href: "/commissions", icon: Percent }
    ]
  },
  {
    label: "SYSTEM",
    items: [
      { name: "Audit Logs", href: "/audit-logs", icon: ClipboardList },
      { name: "System Settings", href: "/settings", icon: Settings }
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  // Simulated Role Toggle
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  // Combine arrays if Super Admin is active
  const activeNavGroups = isSuperAdmin ? [...NAV_GROUPS, ...SUPER_ADMIN_GROUPS] : NAV_GROUPS;

  return (
    <aside className={styles.sidebar}>
      {/* Pattern Overlay */}
      <div className={styles.patternOverlay} />
      
      <div className={styles.topSection}>
        <div className={styles.logoContainer} style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src="/logo.png" alt="Umrah Travel Logo" width={140} height={40} style={{ objectFit: 'contain' }} priority />
        </div>

        {/* Role Toggle Switch */}
        <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(201, 168, 76, 0.2)' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-gold)' }}>Super Admin Mode</span>
          <div 
            onClick={() => setIsSuperAdmin(!isSuperAdmin)}
            style={{ 
              width: '40px', height: '24px', background: isSuperAdmin ? 'var(--color-gold)' : 'rgba(255,255,255,0.1)',
              borderRadius: '50px', position: 'relative', cursor: 'pointer', transition: '0.3s'
            }}
          >
            <div style={{
              width: '18px', height: '18px', background: isSuperAdmin ? '#000' : '#fff',
              borderRadius: '50%', position: 'absolute', top: '3px', left: isSuperAdmin ? '19px' : '3px', transition: '0.3s'
            }} />
          </div>
        </div>
      </div>

      <nav className={styles.navContainer}>
        {activeNavGroups.map((group, idx) => (
          <div key={group.label} className={styles.navGroup}>
            {idx !== 0 && <div className={styles.groupSeparator} />}
            <span className={styles.groupLabel}>{group.label}</span>
            <div className={styles.groupItems}>
              {group.items.map(item => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className={styles.bottomPinned}>
        <div className={styles.userProfile}>
          <div className={styles.avatar}>T</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>Tariq Al-Mansouri</span>
            <span className={styles.userRole}>{isSuperAdmin ? 'Super Admin' : 'Admin'}</span>
          </div>
          <Link href="/auth/signin" className={styles.logoutBtn} title="Logout">
            <LogOut size={18} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
