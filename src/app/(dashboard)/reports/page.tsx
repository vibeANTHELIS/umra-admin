"use client";

import React from 'react';
import { Download, TrendingUp, DollarSign, Wallet } from 'lucide-react';
import styles from './page.module.css';

export default function RevenueReports() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className="page-title">Financial Overview</h1>
          <p className="muted-text">Complete financial overview of the platform</p>
        </div>
        <div className={styles.actions}>
          <select className="input-field" style={{ width: '150px', height: '44px' }}>
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
          <button className="btn-primary" style={{ height: '44px' }}>
            <Download size={16} style={{ marginRight: '8px' }} />
            Export CSV
          </button>
        </div>
      </div>

      <div className={styles.kpiGrid}>
        <div className="card">
          <div className={styles.kpiHeader}>
            <div className="muted-text" style={{ fontSize: '13px', textTransform: 'uppercase' }}>Gross Volume (GMV)</div>
            <div className={styles.iconCircle} style={{ background: 'rgba(46, 204, 113, 0.15)', color: 'var(--color-success)' }}><TrendingUp size={18} /></div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 700, margin: '16px 0 8px' }}>₹ 1,24,50,000</div>
          <div style={{ fontSize: '13px', color: 'var(--color-success)' }}>+14.5% from last month</div>
        </div>

        <div className="card">
          <div className={styles.kpiHeader}>
            <div className="muted-text" style={{ fontSize: '13px', textTransform: 'uppercase' }}>Platform Revenue</div>
            <div className={styles.iconCircle} style={{ background: 'rgba(201, 168, 76, 0.15)', color: 'var(--color-gold)' }}><DollarSign size={18} /></div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 700, margin: '16px 0 8px' }}>₹ 18,67,500</div>
          <div style={{ fontSize: '13px', color: 'var(--color-success)' }}>+8.2% from last month</div>
        </div>

        <div className="card">
          <div className={styles.kpiHeader}>
            <div className="muted-text" style={{ fontSize: '13px', textTransform: 'uppercase' }}>Pending Settlements</div>
            <div className={styles.iconCircle} style={{ background: 'rgba(240, 165, 0, 0.15)', color: 'var(--color-warning)' }}><Wallet size={18} /></div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: 700, margin: '16px 0 8px' }}>₹ 4,20,000</div>
          <div style={{ fontSize: '13px', color: 'var(--color-muted)' }}>To be cleared next Tuesday</div>
        </div>
      </div>

      <div className="card" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'var(--color-muted)' }}>
          <BarChartPlaceholder />
          <p style={{ marginTop: '16px' }}>Revenue Chart Visualization (Integration Pending)</p>
        </div>
      </div>
    </div>
  );
}

function BarChartPlaceholder() {
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', height: '120px' }}>
      {[40, 70, 45, 90, 60, 110, 85].map((h, i) => (
        <div key={i} style={{ width: '32px', height: `${h}px`, background: i === 5 ? 'var(--color-gold)' : 'var(--bg-inner)', borderRadius: '4px 4px 0 0' }} />
      ))}
    </div>
  );
}
