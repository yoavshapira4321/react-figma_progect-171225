import React from 'react';
import './SecurityInsightsPage.css';

export default function Header() {
  return (
    <header className="si-header">
      <div className="si-header-left">
        <h1 className="si-title">Security and DevOps Insights</h1>
      </div>
      <div className="si-header-right">
        <button className="si-ghost">Overview</button>
        <button className="si-primary">Secure secret search</button>
      </div>
    </header>
  );
}
