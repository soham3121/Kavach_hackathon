import React from 'react';

interface ActionButtonsProps {
  onOptOut: () => void;
  onAnalyzePolicy: () => void;
  hasPrivacyAnalysis: boolean;
  analyzingPolicy?: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  onOptOut,
  onAnalyzePolicy, 
  hasPrivacyAnalysis,
  analyzingPolicy = false
}) => {
  return (
    <div className="action-buttons">
      <button 
        className="btn btn-opt-out"
        onClick={onOptOut}
        title="Revoke all permissions and clear cookies for this website"
      >
        <span>1-Click Opt-out</span>
      </button>
      
      {!hasPrivacyAnalysis && (
        <button 
          className={`btn btn-analyze ${analyzingPolicy ? 'btn-analyzing' : ''}`}
          onClick={onAnalyzePolicy}
          disabled={analyzingPolicy}
          title="Analyze the privacy policy with AI"
        >
          {analyzingPolicy ? (
            <>
              <div className="btn-spinner"></div>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <span>Analyze Policy</span>
            </>
          )}
        </button>
      )}
      
      {hasPrivacyAnalysis && (
        <button 
          className="btn btn-complete"
          disabled
          title="Privacy policy analysis completed"
        >
          <span>Analysis Done</span>
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
