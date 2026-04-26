"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import { Send, Smartphone, Mail, Bell, CheckCircle2, RefreshCw } from 'lucide-react';
import { adminApi, showToast } from '@/lib/api';

const NOTIFICATION_TYPES = [
  { value: 'broadcast', label: 'Broadcast' },
  { value: 'booking_update', label: 'Booking Update' },
  { value: 'payment', label: 'Payment Alert' },
  { value: 'promotion', label: 'Promotion' },
  { value: 'system', label: 'System Alert' },
];

export default function Notifications() {
  const [title, setTitle] = useState('Eid Al-Adha Special');
  const [message, setMessage] = useState("Book your Umrah package before 10th Dhul Hijjah and get 15% off. Use code: EID15");
  const [channel, setChannel] = useState('In-App');
  const [userId, setUserId] = useState('');
  const [notifType, setNotifType] = useState('broadcast');
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!userId.trim()) { showToast('Please enter a Target User ID.', 'error'); return; }
    if (!title.trim() || !message.trim()) { showToast('Title and message are required.', 'error'); return; }

    setSending(true);
    const res = await adminApi.sendPushNotification({
      userId: userId.trim(),
      title: title.trim(),
      message: message.trim(),
      type: notifType,
      data: { channel },
    });
    setSending(false);

    if (res?.error) {
      showToast(`Failed to send: ${res.error}`, 'error');
    } else {
      showToast('Notification sent successfully! 🚀', 'success');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.composerGrid}>
        {/* Left: Composer Form */}
        <div className="card">
          <div className="page-title" style={{ marginBottom: '24px' }}>Compose Broadcast</div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Select Channel</label>
            <div className={styles.channelOptions}>
              {[
                { name: 'In-App', Icon: Bell, desc: 'Push to mobile app' },
                { name: 'SMS', Icon: Smartphone, desc: 'Direct to phone' },
                { name: 'Email', Icon: Mail, desc: 'Newsletter format' },
              ].map(({ name, Icon, desc }) => (
                <div
                  key={name}
                  className={`${styles.channelCard} ${channel === name ? styles.channelActive : ''}`}
                  onClick={() => setChannel(name)}
                >
                  <div className={styles.channelIcon}><Icon size={20} /></div>
                  <div className={styles.channelDetails}>
                    <div className={styles.channelName}>{name}</div>
                    <div className={styles.channelDesc}>{desc}</div>
                  </div>
                  <div className={styles.checkCircle}>
                    {channel === name && <CheckCircle2 size={18} />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Target User ID <span style={{ color: 'var(--color-danger)' }}>*</span></label>
            <input
              type="text"
              className="input-field"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="MongoDB ObjectId e.g. 661d2d6d4c6d5f0012345678"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Notification Type</label>
            <select className="input-field" value={notifType} onChange={(e) => setNotifType(e.target.value)}>
              {NOTIFICATION_TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Title / Subject <span style={{ color: 'var(--color-danger)' }}>*</span></label>
            <input
              type="text"
              className="input-field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Message Body <span style={{ color: 'var(--color-danger)' }}>*</span></span>
              <span className={styles.charCount} style={{ color: message.length > 160 ? 'var(--color-danger)' : undefined }}>
                {message.length}/160
              </span>
            </label>
            <textarea
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
            />
          </div>

          <button
            className="btn-primary"
            style={{ width: '100%', gap: '8px' }}
            onClick={handleSend}
            disabled={sending}
          >
            {sending
              ? <><RefreshCw size={18} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
              : <><Send size={18} /> Send Broadcast Now</>
            }
          </button>
        </div>

        {/* Right: Live Preview */}
        <div className={styles.previewSection}>
          <div className="page-subtitle" style={{ marginBottom: '16px', textAlign: 'center' }}>Live Preview</div>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneScreen}>
              <div className={styles.previewHeader}>
                {channel === 'SMS' ? 'Messages' : channel === 'Email' ? 'Inbox' : 'Notifications'}
              </div>
              <div className={styles.previewBubble}>
                <div className={styles.previewSender}>Umrah Travel</div>
                {title && <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>{title}</div>}
                <div className={styles.previewText}>{message || 'Start typing to see preview…'}</div>
                <div className={styles.previewTime}>Just now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
