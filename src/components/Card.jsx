import React from 'react';
import './SecurityInsightsPage.css';

export default function Card({ title, desc, findings = [] }) {
  return (
    <div className="si-card" tabIndex={0} role="group" aria-label={title}>
      <div className="si-card-inner">
        <div className="si-card-header">
          <h3>{title}</h3>
          <span className="si-badge">High</span>
        </div>

        <div className="si-card-meta">
          <div className="si-card-icon">😺</div>
          <p className="si-card-desc">{desc}</p>
        </div>

        <div className="si-card-table">
          <div className="si-table-row si-table-header">
            <div>Sample Findings</div>
            <div>Status</div>
            <div></div>
          </div>

          {findings.map((f, i) => (
            <div key={i} className="si-table-row">
              <div className="si-finding">{f}</div>
              <div className="si-status">Exposed</div>
              <div className="si-row-action">→</div>
            </div>
          ))}

          <div className="si-table-footer">
            <button className="si-footer-btn">Reduce Risk →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
