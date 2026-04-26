"use client";

import React, { useState } from 'react';
import { Wallet, CheckCircle2, Clock, CalendarDays, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

const INITIAL_SETTLEMENTS = [
  { id: 1, name: "Mecca Tours & Travels", amount: "₹ 2,40,000", status: "Due", date: "01 May 2025" },
  { id: 2, name: "Holy Land Tours", amount: "₹ 78,000", status: "Overdue", date: "15 Apr 2025" },
  { id: 3, name: "Al-Madinah Travels", amount: "₹ 1,85,000", status: "Settled", date: "10 Apr 2025" },
  { id: 4, name: "Hajj Services Co", amount: "₹ 1,20,000", status: "Due", date: "01 May 2025" },
];

export default function Settlements() {
  const [settlements] = useState(INITIAL_SETTLEMENTS);
  const [selectedFranchise, setSelectedFranchise] = useState(INITIAL_SETTLEMENTS[0]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className="page-title">Payment Settlements</h1>
          <p className="muted-text">Manage franchise payment settlements and track dues.</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className="card">
          <div className="muted-text" style={{ fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>Total Due</div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-gold)' }}>₹4,35,000</div>
        </div>
        <div className="card">
          <div className="muted-text" style={{ fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>Already Settled</div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-success)' }}>₹3,84,00,000</div>
        </div>
        <div className="card" style={{ border: '1px solid rgba(255, 68, 68, 0.3)' }}>
          <div className="muted-text" style={{ fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>Overdue</div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-danger)' }}>₹78,000</div>
        </div>
        <div className="card">
          <div className="muted-text" style={{ fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>Next Payout Date</div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-white)' }}>01 May 2025</div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className="card" style={{ padding: 0 }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Franchise / Agency</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payout Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {settlements.map(s => (
                <tr key={s.id} onClick={() => setSelectedFranchise(s)} className={selectedFranchise.id === s.id ? styles.activeRow : ''}>
                  <td style={{ fontWeight: 600 }}>{s.name}</td>
                  <td style={{ fontWeight: 700, color: s.status === 'Settled' ? 'var(--color-success)' : 'var(--color-white)' }}>{s.amount}</td>
                  <td>
                    <span className={`status-pill ${s.status === 'Settled' ? 'success' : s.status === 'Overdue' ? 'danger' : 'warning'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="muted-text">{s.date}</td>
                  <td>
                    <button className={styles.iconBtn}><ArrowRight size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card" style={{ position: 'sticky', top: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px' }}>Settle Payment</h2>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '24px', borderRadius: '12px', textAlign: 'center', marginBottom: '24px' }}>
            <div className="muted-text" style={{ fontSize: '14px', marginBottom: '8px' }}>{selectedFranchise.name}</div>
            <div className="muted-text" style={{ fontSize: '12px', textTransform: 'uppercase', marginBottom: '4px' }}>Amount to Settle</div>
            <div style={{ fontSize: '40px', fontWeight: 700, color: 'var(--color-gold)' }}>{selectedFranchise.amount}</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button className="btn-primary" style={{ width: '100%', height: '48px' }} disabled={selectedFranchise.status === 'Settled'}>
              {selectedFranchise.status === 'Settled' ? 'Already Settled' : 'Process Settlement'}
            </button>
            <button className="btn-secondary" style={{ width: '100%', height: '48px' }}>View Ledger</button>
          </div>
        </div>
      </div>
    </div>
  );
}
