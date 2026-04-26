import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { Shield, Lock as LockIcon, Mail, Smartphone } from 'lucide-react';

export default function OTPVerification() {
  return (
    <div className={styles.authCard}>
      <div className={styles.cardTop}>
        <div className={styles.shieldContainer}>
          <div className={styles.shieldPulse} />
          <div className={styles.shieldIcon}>
            <Shield size={28} className="gold-text" />
          </div>
        </div>

        <div className={styles.logoRow}>
          <span className={styles.title}>Umrah Travel</span>
          <span className={styles.subtitle}>Admin</span>
        </div>

        <h2 className={styles.heading}>Verify Your Identity</h2>
        <p className={styles.subheading}>Enter the 6-digit code sent to your email or phone</p>
      </div>

      <div className={styles.divider} />

      <div className={styles.destinationChip}>
        <Smartphone size={14} className="gold-text" />
        <span>Code sent to +91 98765 ••••10</span>
      </div>

      <form className={styles.form}>
        <div className={styles.otpContainer}>
          <input type="text" className={styles.otpBoxFilled} defaultValue="3" maxLength={1} readOnly />
          <input type="text" className={styles.otpBoxFilled} defaultValue="7" maxLength={1} readOnly />
          <input type="text" className={styles.otpBoxActive} defaultValue="" maxLength={1} autoFocus />
          <input type="text" className={styles.otpBox} defaultValue="" maxLength={1} />
          <input type="text" className={styles.otpBox} defaultValue="" maxLength={1} />
          <input type="text" className={styles.otpBox} defaultValue="" maxLength={1} />
        </div>

        <div className={styles.resendRow}>
          <span className={styles.resendText}>Didn&apos;t receive code?</span>
          <span className={styles.resendTimer}>Resend in 1:24</span>
        </div>

        <Link href="/" style={{ width: '100%', marginTop: '24px' }}>
          <button type="button" className={styles.submitBtn}>Verify & Sign In →</button>
        </Link>
        
        <Link href="/auth/signin" className={styles.backLink}>
          ← Back to Sign In
        </Link>
      </form>

      <div className={styles.cardFooter}>
        <LockIcon size={12} className="gold-text" />
        <span className={styles.secureText}>Secured with SSL Encryption</span>
      </div>
    </div>
  );
}
