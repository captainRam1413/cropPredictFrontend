// import logo from './logo.svg';
import '../App.css';


import React, { useState } from 'react';

const DISTRICTS = [
  'Kolhapur',
  'Satara',
  'Sangli',
  'Solapur',
  'Pune'
];

const SOIL_TYPES = [
  'Black',
  'Red',
  'Dark Brown',
  'Reddish Brown'
];

function PredictForm() {
  const [form, setForm] = useState({
    district: '',
    soil: '',
    nitrogen: '',
    potassium: '',
    phosphorus: '',
    ph: '',
    rainfall: '',
    temperature: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch('http://localhost:8000/api/predict/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await response.json();
    setResult(data);
    setLoading(false);
  };

  const prettyLabel = (key) => {
    if (key === 'ph') return 'pH';
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className="material-container" style={{
      background: 'rgba(5,22,34,0.97)',
      boxShadow: '0 8px 32px #1ba09833',
      border: '1.5px solid #1ba098',
      maxWidth: 420,
      margin: '60px auto 0 auto'
    }}>
      <h2 className="material-title" style={{
        color: '#deb992',
        fontSize: 28,
        marginBottom: 18,
        letterSpacing: 1.2
      }}>
        🌱 Crop Prediction
      </h2>
      <form className="material-form" onSubmit={handleSubmit} autoComplete="off" style={{width: '100%'}}>
        {/* District dropdown */}
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: 12}}>
          <label
            htmlFor="district"
            style={{
              color: '#1ba098',
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 6,
              letterSpacing: 0.5
            }}
          >
            District
          </label>
          <select
            id="district"
            name="district"
            value={form.district}
            onChange={handleChange}
            required
            style={{
              background: '#051622',
              color: '#deb992',
              border: '1.5px solid #1ba098',
              borderRadius: 8,
              padding: '12px 10px',
              fontSize: 16,
              marginBottom: 2,
              outline: 'none',
              transition: 'border 0.2s'
            }}
          >
            <option value="" disabled>Select district</option>
            {DISTRICTS.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
        {/* Soil dropdown */}
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: 12}}>
          <label
            htmlFor="soil"
            style={{
              color: '#1ba098',
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 6,
              letterSpacing: 0.5
            }}
          >
            Soil
          </label>
          <select
            id="soil"
            name="soil"
            value={form.soil}
            onChange={handleChange}
            required
            style={{
              background: '#051622',
              color: '#deb992',
              border: '1.5px solid #1ba098',
              borderRadius: 8,
              padding: '12px 10px',
              fontSize: 16,
              marginBottom: 2,
              outline: 'none',
              transition: 'border 0.2s'
            }}
          >
            <option value="" disabled>Select soil type</option>
            {SOIL_TYPES.map((soil) => (
              <option key={soil} value={soil}>{soil}</option>
            ))}
          </select>
        </div>
        {/* Other fields */}
        {Object.keys(form).filter(key => key !== 'district' && key !== 'soil').map((key) => (
          <div key={key} style={{display: 'flex', flexDirection: 'column', marginBottom: 12}}>
            <label
              htmlFor={key}
              style={{
                color: '#1ba098',
                fontWeight: 700,
                fontSize: 16,
                marginBottom: 6,
                letterSpacing: 0.5
              }}
            >
              {prettyLabel(key)}
            </label>
            <input
              id={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              required
              style={{
                background: '#051622',
                color: '#deb992',
                border: '1.5px solid #1ba098',
                borderRadius: 8,
                padding: '12px 10px',
                fontSize: 16,
                marginBottom: 2,
                outline: 'none',
                transition: 'border 0.2s'
              }}
              placeholder={`Enter ${prettyLabel(key)}`}
              type={['nitrogen','potassium','phosphorus','ph','rainfall','temperature'].includes(key) ? "number" : "text"}
              min={['nitrogen','potassium','phosphorus','ph','rainfall','temperature'].includes(key) ? 0 : undefined}
              step={key === 'ph' ? "0.1" : "1"}
            />
          </div>
        ))}
        <button
          type="submit"
          className="material-btn"
          style={{
            background: 'linear-gradient(90deg, #1ba098 60%, #deb992 100%)',
            color: '#051622',
            fontWeight: 700,
            fontSize: 18,
            border: 'none',
            borderRadius: 8,
            padding: '14px 0',
            marginTop: 10,
            cursor: 'pointer',
            boxShadow: '0 2px 8px #1ba09844',
            transition: 'background 0.2s, color 0.2s'
          }}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>
      {result && (
        <div className="material-result" style={{
          marginTop: 28,
          background: '#0a2233',
          border: '1.5px solid #deb992',
          color: '#deb992',
          borderRadius: 12,
          padding: 18,
          boxShadow: '0 2px 12px #deb99222'
        }}>
          <h3 style={{color: '#1ba098', marginBottom: 10}}>Prediction Result</h3>
          {result.predicted_crop && (
            <div style={{marginBottom: 6}}>
              <strong>Predicted Crop:</strong> {result.predicted_crop}
            </div>
          )}
          {result.predicted_fertilizer && (
            <div style={{marginBottom: 6}}>
              <strong>Recommended Fertilizer:</strong> {result.predicted_fertilizer}
            </div>
          )}
            {result.error && (
                <div style={{color: '#ff5252'}}>
                <strong>Error:</strong> {result.error}
                </div>
            )}
        </div>
      )}
    </div>
  );
}

export default PredictForm;
