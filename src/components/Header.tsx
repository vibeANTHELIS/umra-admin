"use client";

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { checkHealth } from '@/lib/api';
import styles from './Header.module.css';

const ROUTE_MAP: Record<string, { title: string; breadcrumbs: string }> = {
  '/packages':    { title: 'Package Management',    breadcrumbs: 'Admin / Pilgrimage / Packages' },
  '/bookings':    { title: 'Booking Management',    breadcrumbs: 'Admin / Pilgrimage / Bookings' },
  '/saving-plans':{ title: 'Saving Plans',          breadcrumbs: 'Admin / Savings & SIP / Plans' },
  '/saving-pools':{ title: 'Saving Pools',          breadcrumbs: 'Admin / Savings & SIP / Pools' },
  '/sip-transactions':{ title: 'SIP Transactions',  breadcrumbs: 'Admin / Savings & SIP / Transactions' },
  '/customers':   { title: 'Customer Management',   breadcrumbs: 'Admin / People / Customers' },
  '/documents':   { title: 'Document Verification', breadcrumbs: 'Admin / People / Documents' },
  '/admins':      { title: 'Admin Management',      breadcrumbs: 'Admin / People / Admins' },
  '/franchises':  { title: 'Franchise Management',  breadcrumbs: 'Admin / People / Franchises' },
  '/promotions':  { title: 'Promotions & Coupons',  breadcrumbs: 'Admin / Marketing / Promotions' },
  '/notifications':{ title: 'Notifications',        breadcrumbs: 'Admin / Marketing / Notifications' },
  '/reports':     { title: 'Revenue & Reports',     breadcrumbs: 'Admin / Finance / Reports' },
  '/settlements': { title: 'Payment Settlements',   breadcrumbs: 'Admin / Finance / Settlements' },
  '/commissions': { title: 'Commission Config',      breadcrumbs: 'Admin / Finance / Commissions' },
  '/payment-gateways':{ title: 'Payment Gateway Settings', breadcrumbs: 'Admin / Finance / Gateway' },
  '/settings':    { title: 'System Settings',       breadcrumbs: 'Admin / Platform / Settings' },
  '/audit-logs':  { title: 'Audit Logs',            breadcrumbs: 'Admin / Platform / Audit' },
};

export default function Header() {
  const pathname = usePathname();
  const [health, setHealth] = useState<'live' | 'issue' | 'checking'>('checking');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const poll = async () => {
      const status = await checkHealth();
      setHealth(status);
    };
    poll(); // immediate
    intervalRef.current = setInterval(poll, 60_000); // every 60 s
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const route = Object.entries(ROUTE_MAP).find(([key]) => pathname.includes(key));
  const title = route?.[1].title ?? 'Dashboard';
  const breadcrumbs = route?.[1].breadcrumbs ?? 'Admin / Dashboard';

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.breadcrumbs}>{breadcrumbs}</span>
      </div>

      <div className={styles.center}>
        <div className={styles.searchPill}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search users, bookings, packages..."
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.right}>
        {/* Platform Health Indicator — polls GET /health every 60 s */}
        <div className={styles.statusPill}>
          {health === 'checking' && (
            <span className={styles.statusDot} style={{ background: 'var(--color-warning)', animation: 'pulse 1.5s infinite' }} />
          )}
          {health === 'live' && (
            <span className={styles.statusDot} style={{ background: 'var(--color-success)' }} />
          )}
          {health === 'issue' && (
            <span className={styles.statusDot} style={{ background: 'var(--color-danger)', animation: 'pulse 1s infinite' }} />
          )}
          <span className={styles.statusText}>
            {health === 'checking' ? 'Checking…' : health === 'live' ? 'Live' : 'Issue'}
          </span>
        </div>

        <div className={styles.divider} />

        <button className={styles.notificationBtn}>
          <Bell size={20} />
          <span className={styles.notificationBadge} />
        </button>

        <div className={styles.divider} />

        <div className={styles.userDropdown}>
          <div className={styles.avatarMini}>A</div>
          <span className={styles.userName}>Admin</span>
          <ChevronDown size={16} className={styles.chevron} />
        </div>
      </div>
    </header>
  );
}
