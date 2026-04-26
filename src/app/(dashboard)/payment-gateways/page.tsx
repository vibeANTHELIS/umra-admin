"use client";

import React, { useState } from 'react';
import { AlertTriangle, CreditCard, Building, Smartphone, Save } from 'lucide-react';
import styles from './page.module.css';

export default function PaymentGateways() {
  const [razorpayActive, setRazorpayActive] = useState(true);
  const [payuActive, setPayuActive] = useState(false);
  const [upiActive, setUpiActive] = useState(true);
  const [bankActive, setBankActive] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className="page-title">Payment Gateway Settings</h1>
          <p className="muted-text">Configure payment processors and API credentials</p>
        </div>
        <button className="btn-primary">
          <Save size={18} style={{ marginRight: '8px' }} />
          Save Configurations
        </button>
      </div>

      <div className={styles.alertBox}>
        <AlertTriangle size={24} className="gold-text" />
        <div>
          <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--color-gold)' }}>⚠ Sensitive Configuration Area</div>
          <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '4px' }}>
            Changes to live API keys immediately affect payment processing. Always test before switching to Live mode.
          </div>
        </div>
      </div>

      <div className={styles.gatewaysGrid}>
        {/* Razorpay */}
        <div className="card">
          <div className={styles.cardHeader}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className={styles.iconBox}><CreditCard size={20} className="gold-text" /></div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Razorpay</h3>
                <p className="muted-text" style={{ fontSize: '12px' }}>Primary Gateway • India</p>
              </div>
            </div>
            <div className={`${styles.toggle} ${razorpayActive ? styles.toggleActive : ''}`} onClick={() => setRazorpayActive(!razorpayActive)}>
              <div className={styles.toggleThumb} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>API Key ID</label>
            <input type="text" className="input-field" defaultValue="rzp_live_89s7f98s7f98" />
          </div>
          <div className={styles.inputGroup}>
            <label>API Key Secret</label>
            <input type="password" className="input-field" defaultValue="*************************" />
          </div>
        </div>

        {/* PayU */}
        <div className="card" style={{ opacity: payuActive ? 1 : 0.6 }}>
          <div className={styles.cardHeader}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className={styles.iconBox}><CreditCard size={20} className="gold-text" /></div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600 }}>PayU</h3>
                <p className="muted-text" style={{ fontSize: '12px' }}>Secondary Gateway</p>
              </div>
            </div>
            <div className={`${styles.toggle} ${payuActive ? styles.toggleActive : ''}`} onClick={() => setPayuActive(!payuActive)}>
              <div className={styles.toggleThumb} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Merchant Key</label>
            <input type="text" className="input-field" placeholder="Enter PayU Key" disabled={!payuActive} />
          </div>
          <div className={styles.inputGroup}>
            <label>Merchant Salt</label>
            <input type="password" className="input-field" placeholder="Enter PayU Salt" disabled={!payuActive} />
          </div>
        </div>

        {/* UPI / PhonePe */}
        <div className="card">
          <div className={styles.cardHeader}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className={styles.iconBox}><Smartphone size={20} className="gold-text" /></div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600 }}>UPI / PhonePe</h3>
                <p className="muted-text" style={{ fontSize: '12px' }}>Direct Bank Transfer</p>
              </div>
            </div>
            <div className={`${styles.toggle} ${upiActive ? styles.toggleActive : ''}`} onClick={() => setUpiActive(!upiActive)}>
              <div className={styles.toggleThumb} />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Merchant VPA (UPI ID)</label>
            <input type="text" className="input-field" defaultValue="umrahtravel@ybl" />
          </div>
        </div>

        {/* Bank Transfer / NEFT */}
        <div className="card">
          <div className={styles.cardHeader}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className={styles.iconBox}><Building size={20} className="gold-text" /></div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Bank Transfer / NEFT</h3>
                <p className="muted-text" style={{ fontSize: '12px' }}>Manual Verification</p>
              </div>
            </div>
            <div className={`${styles.toggle} ${bankActive ? styles.toggleActive : ''}`} onClick={() => setBankActive(!bankActive)}>
              <div className={styles.toggleThumb} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '12px' }}>
            <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: 'var(--color-gold)' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Enable AutoPay Instructions</div>
              <div style={{ fontSize: '12px', color: 'var(--color-muted)' }}>Show RTGS/NEFT details to clients for large transactions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
