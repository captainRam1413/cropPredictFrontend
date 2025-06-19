import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const PAGE_SIZE = 10;

function Dataset() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('/dataset.csv')
      .then(response => {
        if (!response.ok) throw new Error('CSV file not found');
        return response.text();
      })
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => setData(results.data),
          error: (err) => setError('Error parsing CSV: ' + err.message)
        });
      })
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div style={{padding: 24, color: '#ff5252', background: '#18191a'}}>Error: {error}</div>;
  if (data.length === 0) return <div style={{padding: 24, color: '#fff', background: '#18191a'}}>Loading dataset...</div>;

  // Pagination logic
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const pageData = data.slice(startIdx, endIdx);

  return (
    <div className="material-dataset-container">
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: 16}}>
        <h2 className="material-title" style={{margin: 0}}>Dataset</h2>
        <a
          href="/dataset.csv"
          download
          style={{
            background: "linear-gradient(90deg, #1ba098 60%, #deb992 100%)",
            color: "#051622",
            fontWeight: 700,
            fontSize: 16,
            border: "none",
            borderRadius: 8,
            padding: "10px 22px",
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(27,160,152,0.15)",
            transition: "background 0.2s, color 0.2s"
          }}
        >
          ⬇️ Download CSV
        </a>
      </div>
      <div className="material-table-wrapper">
        <table className="material-table">
          <thead>
            <tr>
              {Object.keys(pageData[0]).map(key => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((row, idx) => (
              <tr key={idx}>
                {Object.values(row).map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 18, gap: 12}}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          style={{
            background: '#1ba098',
            color: '#051622',
            border: 'none',
            borderRadius: 6,
            padding: '6px 16px',
            fontWeight: 600,
            cursor: page === 1 ? 'not-allowed' : 'pointer',
            opacity: page === 1 ? 0.5 : 1
          }}
        >
          Prev
        </button>
        <span style={{color: '#deb992', fontWeight: 600}}>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          style={{
            background: '#1ba098',
            color: '#051622',
            border: 'none',
            borderRadius: 6,
            padding: '6px 16px',
            fontWeight: 600,
            cursor: page === totalPages ? 'not-allowed' : 'pointer',
            opacity: page === totalPages ? 0.5 : 1
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Dataset;