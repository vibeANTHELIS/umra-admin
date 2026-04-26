import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { Mail, Lock, EyeOff, Lock as LockIcon } from 'lucide-react';

export default function SignIn() {
  return (
    <div className={styles.authCard}>
      <div className={styles.cardHeader}>
        <div className={styles.logoMini}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <h2 className={styles.title}>Umrah Travel</h2>
        <span className={styles.subtitle}>Admin Panel</span>
      </div>

      <div className={styles.tabSwitcher}>
        <Link href="/auth/signin" className={styles.tabActive}>Sign In</Link>
        <Link href="/auth/signup" className={styles.tab}>Sign Up</Link>
      </div>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email Address</label>
          <div className={styles.inputWrapper}>
            <Mail size={18} className={styles.inputIcon} />
            <input type="email" placeholder="admin@umrahtravel.com" className={styles.input} />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.labelRow}>
            <label className={styles.label}>Password</label>
            <Link href="#" className={styles.forgotLink}>Forgot password?</Link>
          </div>
          <div className={styles.inputWrapper}>
            <Lock size={18} className={styles.inputIcon} />
            <input type="password" placeholder="Enter password" className={styles.input} />
            <EyeOff size={18} className={styles.inputIconRight} />
          </div>
        </div>

        <div className={styles.rememberRow}>
          <label className={styles.checkboxLabel}>
            <div className={styles.checkboxChecked}>✓</div>
            <span className={styles.rememberText}>Remember this device</span>
          </label>
        </div>

        <Link href="/auth/otp" style={{ width: '100%' }}>
          <button type="button" className={styles.submitBtn}>Sign In →</button>
        </Link>
      </form>

      <div className={styles.divider} />

      <div className={styles.cardFooter}>
        <LockIcon size={12} className="gold-text" />
        <span className={styles.secureText}>Secured with SSL Encryption</span>
      </div>
    </div>
  );
}
