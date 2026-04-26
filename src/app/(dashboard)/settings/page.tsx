"use client";

import React, { useState } from 'react';
import { Settings as SettingsIcon, Shield, UserX, AlertTriangle, Save } from 'lucide-react';
import styles from './page.module.css';

export default function SystemSettings() {
  const [guestActive, setGuestActive] = useState(false);
  const [emailActive, setEmailActive] = useState(true);
  const [smsActive, setSmsActive] = useState(true);
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className="page-title">System Settings</h1>
          <p className="muted-text">Configure global platform settings and controls</p>
        </div>
        <button className="btn-primary">
          <Save size={18} style={{ marginRight: '8px' }} />
          Save Configurations
        </button>
      </div>

      <div className={styles.grid}>
        {/* Left Column: General & Registration */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <div className="card">
            <h2 className={styles.sectionTitle}><SettingsIcon size={18} className="gold-text" /> General Settings</h2>
            <div className={styles.inputGroup}>
              <label>Platform Name</label>
              <input type="text" className="input-field" defaultValue="Umrah Travel Platform" />
            </div>
            <div className={styles.inputGroup} style={{ marginTop: '16px' }}>
              <label>Support Email Address</label>
              <input type="email" className="input-field" defaultValue="support@umrahtravel.com" />
            </div>
          </div>

          <div className="card">
            <h2 className={styles.sectionTitle}><UserX size={18} className="gold-text" /> Registration Settings</h2>
            
            <div className={styles.toggleRow}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>Guest Bookings</div>
                <div className="muted-text" style={{ fontSize: '12px' }}>Allow non-registered users to book packages</div>
              </div>
              <div className={`${styles.toggle} ${guestActive ? styles.toggleActive : ''}`} onClick={() => setGuestActive(!guestActive)}>
                <div className={styles.toggleThumb} />
              </div>
            </div>

            <div className={styles.toggleRow}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>Email Verification</div>
                <div className="muted-text" style={{ fontSize: '12px' }}>Require email validation on sign-up</div>
              </div>
              <div className={`${styles.toggle} ${emailActive ? styles.toggleActive : ''}`} onClick={() => setEmailActive(!emailActive)}>
                <div className={styles.toggleThumb} />
              </div>
            </div>

            <div className={styles.toggleRow}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>SMS OTP Verification</div>
                <div className="muted-text" style={{ fontSize: '12px' }}>Enable mobile number verification</div>
              </div>
              <div className={`${styles.toggle} ${smsActive ? styles.toggleActive : ''}`} onClick={() => setSmsActive(!smsActive)}>
                <div className={styles.toggleThumb} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Security & Maintenance */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <div className="card">
            <h2 className={styles.sectionTitle}><Shield size={18} className="gold-text" /> Security Settings</h2>
            <div className={styles.inputGroup}>
              <label>Admin Session Timeout (Minutes)</label>
              <input type="number" className="input-field" defaultValue="30" />
            </div>
            <div className={styles.inputGroup} style={{ marginTop: '16px' }}>
              <label>Maximum Login Attempts</label>
              <input type="number" className="input-field" defaultValue="5" />
            </div>
          </div>

          <div className="card" style={{ border: '1px solid rgba(255, 68, 68, 0.4)' }}>
            <h2 className={styles.sectionTitle} style={{ color: 'var(--color-danger)' }}><AlertTriangle size={18} /> Maintenance Mode</h2>
            <p style={{ fontSize: '13px', lineHeight: '1.6', marginBottom: '24px' }}>
              Enabling maintenance mode will take the entire platform offline for all users except Super Admins. Ongoing transactions may be interrupted. Proceed with extreme caution.
            </p>
            
            <div style={{ background: 'rgba(255, 68, 68, 0.1)', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
              <div style={{ fontWeight: 600, color: 'var(--color-danger)' }}>This will immediately disconnect all 12,430 active users and halt all booking transactions.</div>
            </div>

            <button className="btn-primary" style={{ background: 'var(--color-danger)', width: '100%' }}>
              Take Platform Offline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
