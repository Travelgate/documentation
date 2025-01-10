import React from 'react';

const typeColors = {
  Added: '#4CAF50',    // Green
  Changed: '#007bff',  // Blue
  Deprecated: '#f39c12',   // Orange
  Removed: '#f44336',   // Red
};

const processLinks = (text) => {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<a href={`/${match[2]}`} target="_blank" rel="noopener noreferrer">{match[1]}</a>);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const APIChangelog = ({ changelog }) => (
  <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', backgroundColor: '#fff', borderRadius: '8px' }}>
    {changelog.map((entry, entryIndex) => {
      const formattedDate = new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
      const dateId = `${formattedDate.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase()}`;

      return (
        <div key={entryIndex} style={{ marginBottom: '2rem' }}>
          <h2 id={dateId} style={{ color: '#343a40', fontSize: '1.4rem', marginBottom: '1rem' }}>
            <a href={`#${dateId}`} style={{ color: '#007bff', textDecoration: 'none' }}>
              {formattedDate}
            </a>
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid #ddd' }}>Field</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid #ddd' }}>Change Type</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid #ddd' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {['Added', 'Changed', 'Deprecated', 'Removed'].map((changeType) => {
                const changesOfType = entry.changes.filter((change) => change.type === changeType);
                if (changesOfType.length === 0) return null;

                return changesOfType.map((change, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #f2f2f2' }}>
                    <td style={{ padding: '8px', color: '#343a40' }}>{change.field}</td>
                    <td style={{ padding: '8px' }}>
                      <span
                        style={{
                          padding: '0.2rem 0.6rem',
                          backgroundColor: typeColors[changeType],
                          color: '#fff',
                          borderRadius: '4px',
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {changeType}
                      </span>
                    </td>
                    <td style={{ padding: '8px', color: '#495057' }}>
                      {processLinks(change.description)}
                    </td>
                  </tr>
                ));
              })}
            </tbody>
          </table>
        </div>
      );
    })}
  </div>
);

export default APIChangelog;
