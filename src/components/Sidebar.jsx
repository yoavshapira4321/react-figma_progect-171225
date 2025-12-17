import React from 'react';
import logoSrc from '../../assets/logo.svg';
import boardsSrc from '../../assets/Explorer.svg';
import riskSrc from '../../assets/Risk.svg';
import issuesSrc from '../../assets/Issues.svg';
import insightsSrc from '../../assets/Insights.svg';
import explorerSrc from '../../assets/Explorer.svg';
import aiSrc from '../../assets/AI Agents.svg';
import certSrc from '../../assets/Certificates.svg';
import dataSrc from '../../assets/Data Sources.svg';
import settingsSrc from '../../assets/Settings.svg';
import accessSrc from '../../assets/Access.svg';
import './SecurityInsightsPage.css';

export default function Sidebar() {
  const navItems = [
    { src: boardsSrc, label: 'Boards', active: true },
    { src: riskSrc, label: 'Risk' },
    { src: issuesSrc, label: 'Issues' },
    { src: insightsSrc, label: 'Insights' },
    { src: explorerSrc, label: 'Explorer' },
    { src: aiSrc, label: 'AI Agents' },
    { src: certSrc, label: 'Certificates' },
    { src: accessSrc, label: 'Access' },
    { src: dataSrc, label: 'Data Sources' },
  ];

  return (
    <aside className="si-sidebar">
      <div className="si-logo">
        <img src={logoSrc} alt="logo" />
      </div>

      <nav className="si-nav">
        {navItems.map((item, i) => (
          item.active ? (
            <div className="si-item si-item-active" key={i}>
              <div className="si-item-icon">
                <img src={item.src} alt={item.label} />
              </div>
              <div className="si-item-label">{item.label}</div>
            </div>
          ) : (
            <div className="si-item" key={i} title={item.label}>
              <div className="si-item-icon">
                <img src={item.src} alt={item.label} />
              </div>
            </div>
          )
        ))}
      </nav>

      <div className="si-footer">
        <img src={settingsSrc} alt="Settings" className="si-settings" />
        <div className="si-avatar">BD</div>
      </div>
    </aside>
  );
}
