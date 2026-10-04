import React from 'react';

interface TrustScoreProps {
  score: number;
  url: string;
}

const TrustScore: React.FC<TrustScoreProps> = ({ score, url }) => {
  const getScoreClass = (score: number) => {
    if (score >= 80) return 'score-high';
    if (score >= 50) return 'score-medium';
    return 'score-low';
  };
  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent Privacy';
    if (score >= 50) return 'Fair Privacy';
    return 'Poor Privacy';
  };

  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  };  return (
    <div className="trust-score">
      <div className={`score-circle ${getScoreClass(score)}`}>
        <div style={{ 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>          <div style={{ 
            fontSize: '42px', 
            fontWeight: '900',
            lineHeight: '1',
            textShadow: '0 3px 10px rgba(0, 0, 0, 0.4)',
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
            letterSpacing: '1px'
          }}>
            {score}
          </div>
          <div style={{ 
            fontSize: '10px', 
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginTop: '2px',
            opacity: 0.9
          }}>
            SCORE
          </div>
        </div>
      </div>
      
      <div className="score-label">
        {getScoreLabel(score)}
      </div>
      
      <div className="site-url">
        {getDomain(url)}
      </div>

      {/* Privacy metrics */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        marginTop: '20px',
        padding: '16px 0',
        borderTop: '2px solid rgba(226, 232, 240, 0.5)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            fontSize: '16px', 
            fontWeight: '700', 
            color: score >= 80 ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444'
          }}>
            {score >= 80 ? 'Low' : score >= 50 ? 'Medium' : 'High'}
          </div>
          <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>
            RISK LEVEL
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '16px', fontWeight: '700', color: '#2563eb' }}>
            Real-time
          </div>
          <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>
            MONITORING
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '16px', fontWeight: '700', color: '#8b5cf6' }}>
            Active
          </div>
          <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>
            PROTECTION
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustScore;
