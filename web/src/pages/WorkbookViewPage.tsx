import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { WorkbookView } from '../components/WorkbookView';
import { WORKBOOKS } from '../data/workbooks';
import { WorkbookProvider } from '../context/WorkbookContext';

export const WorkbookViewPage: React.FC = () => {
  const { workbookId } = useParams<{ workbookId: string }>();
  const navigate = useNavigate();

  const workbook = WORKBOOKS.find(w => w.id === workbookId);

  return (
    <WorkbookProvider scope={workbookId}>
      <div className="page-container page-container--wide">
        <button className="btn btn-ghost back-btn" onClick={() => navigate(-1)}>
          ← Terug
        </button>
        {workbook ? (
          <WorkbookView workbookId={workbookId!} />
        ) : (
          <div className="error-page">
            <p>Werkboek niet gevonden.</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>Naar overzicht</button>
          </div>
        )}
      </div>
    </WorkbookProvider>
  );
};
