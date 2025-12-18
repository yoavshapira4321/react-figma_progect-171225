import React from 'react';
import './SecurityInsightsPage.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Card from './Card';

const sampleCards = new Array(6).fill(null).map((_, i) => ({
  id: i + 1,
  title: 'Exposed Credentials',
  desc:
    'Detection of potentially compromised or exposed authentication credentials across your infrastructure.',
  findings: ['api-openai', 'api-openssl', 'ssh-agent', 'db-credentials'].slice(0, 3),
}));

import { useState } from 'react';

export default function SecurityInsightsPage() {
  // group into vertical pairs so we can visually merge them on hover
  const cardPairs = [];
  for (let i = 0; i < sampleCards.length; i += 2) {
    cardPairs.push([sampleCards[i], sampleCards[i + 1]]);
  }

  // index of the currently hovered/focused pair
  const [activePair, setActivePair] = useState(null);

  function handleEnter(i) {
    setActivePair(i);
  }
  function handleLeave() {
    setActivePair(null);
  }

  return (
    <div className="si-page-root">
      <Sidebar />
      <div className="si-main">
        <Header />
        <div className="si-content">
          <div className="si-overview">
            <h2>Security and DevOps Insights</h2>
            <p>
              Comprehensive analysis of your security posture and operational
              insights
            </p>
          </div>

          <div className="si-grid">
            {cardPairs.map((pair, idx) => {
              const col = idx % 3;
              const shiftClass =
                activePair !== null && activePair !== idx
                  ? idx < activePair
                    ? 'si-shift-left'
                    : 'si-shift-right'
                  : '';

              const selfShiftClass =
                activePair === idx
                  ? col === 0
                    ? 'si-active-left'
                    : col === 2
                      ? 'si-active-right'
                      : 'si-active-center'
                  : '';

              // Add class for middle pair when right pair is hovered
              const middleWhenRightActive =
                activePair !== null &&
                activePair % 3 === 2 &&
                col === 1 &&
                Math.floor(idx / 3) === Math.floor(activePair / 3)
                  ? 'si-shift-with-right'
                  : '';

              // Add class for left pair when right pair is hovered
              const leftWhenRightActive =
                activePair !== null &&
                activePair % 3 === 2 &&
                col === 0 &&
                Math.floor(idx / 3) === Math.floor(activePair / 3)
                  ? 'si-left-when-right-active'
                  : '';

              return (
                <div
                  key={idx}
                  className={`si-card-pair ${shiftClass} ${selfShiftClass} ${middleWhenRightActive} ${leftWhenRightActive}`}
                  onMouseEnter={() => handleEnter(idx)}
                  onMouseLeave={handleLeave}
                  onFocusCapture={() => handleEnter(idx)}
                  onBlurCapture={handleLeave}
                  aria-hidden={pair.length === 0}
                >
                  {pair[0] && (
                    <Card key={pair[0].id} title={pair[0].title} desc={pair[0].desc} findings={pair[0].findings} />
                  )}
                  {pair[1] ? (
                    <Card key={pair[1].id} title={pair[1].title} desc={pair[1].desc} findings={pair[1].findings} />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
