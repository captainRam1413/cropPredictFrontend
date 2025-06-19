import React from 'react';

function InfoCard({ icon, title, children }) {
  return (
    <div
      style={{
        background: 'rgba(5,22,34,0.92)',
        border: '1.5px solid #1ba098',
        borderRadius: 16,
        boxShadow: '0 2px 16px #1ba09822',
        padding: '22px 20px 18px 20px',
        marginBottom: 24,
        color: '#deb992',
        width: '100%',
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: 28, marginRight: 12 }}>{icon}</span>
        <h3 style={{ color: '#1ba098', margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: 1 }}>
          {title}
        </h3>
      </div>
      <div style={{ fontSize: 16 }}>{children}</div>
    </div>
  );
}

function Information() {
  return (
    <div className="material-main-content" style={{ width: '100%' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 className="material-title" style={{ fontSize: 32, color: '#deb992', marginBottom: 8 }}>
          🌾 CropPredict: Smart Agriculture Assistant
        </h2>
        <span style={{ color: '#1ba098', fontWeight: 600, fontSize: 18 }}>
          Empowering farmers with AI-driven recommendations
        </span>
      </div>

      <InfoCard icon="🔍" title="About the Project">
        Our system is an intelligent <strong>Agricultural Recommendation Engine</strong> designed to assist farmers and agronomists in making informed decisions. By analyzing soil characteristics, climate conditions, and district-level data, our model predicts the most suitable crop and fertilizer combination for optimal yield.
      </InfoCard>

      <InfoCard icon="🧠" title="How It Works">
        <div style={{ marginBottom: 8 }}>
          <span style={{ color: '#deb992', fontWeight: 600 }}>Inputs:</span>
          <ul className="material-info-list">
            <li>🗺️ District Name</li>
            <li>🌱 Soil Color</li>
            <li>🧪 Soil Nutrient Levels (Nitrogen, Phosphorus, Potassium)</li>
            <li>🌡️ pH Level</li>
            <li>☔ Rainfall (mm)</li>
            <li>🌞 Temperature (°C)</li>
          </ul>
        </div>
        <div>
          <span style={{ color: '#deb992', fontWeight: 600 }}>Outputs:</span>
          <ul className="material-info-list">
            <li>✅ Most suitable crop for the current conditions</li>
            <li>✅ Ideal fertilizer for healthy growth and yield</li>
          </ul>
        </div>
      </InfoCard>

      <InfoCard icon="⚙️" title="Technology Stack">
        <ul className="material-info-list">
          <li><strong>Backend:</strong> Django (Python)</li>
          <li><strong>ML Model:</strong> Scikit-learn (MultiOutputClassifier with Random Forest)</li>
          <li><strong>Encoders:</strong> LabelEncoders for categorical fields like District and Soil</li>
          <li><strong>API:</strong> RESTful endpoint for prediction</li>
          <li><strong>Deployment Ready:</strong> Model packaged with .pkl files and served via API</li>
        </ul>
      </InfoCard>

      <InfoCard icon="📦" title="Dataset Information">
        <ul className="material-info-list">
          <li>8 Input Features: District, Soil Color, Nitrogen, Potassium, Phosphorus, pH, Rainfall, Temperature</li>
          <li>2 Output Labels: Recommended Crop and Fertilizer</li>
          <li>Includes YouTube educational resources on crop care for farmers</li>
        </ul>
      </InfoCard>

      <InfoCard icon="📊" title="Output Example">
        <pre style={{
          background: "#051622",
          color: "#deb992",
          border: "1px solid #1ba098",
          borderRadius: 8,
          padding: 16,
          fontSize: 15,
          marginBottom: 0,
          marginTop: 10,
          overflowX: "auto"
        }}>
{`Input:
{
  "district": "Kolhapur",
  "soil": "Light Brown",
  "nitrogen": 30,
  "potassium": 10,
  "phosphorus": 5,
  "ph": 6.0,
  "rainfall": 600,
  "temperature": 25
}

Output:
{
  "predicted_crop": "Moong",
  "predicted_fertilizer": "MOP"
}`}
        </pre>
      </InfoCard>

      <InfoCard icon="💡" title="Why It Matters">
        <ul className="material-info-list">
          <li>Reduces crop failure due to poor selection</li>
          <li>Improves soil and fertilizer management</li>
          <li>Provides district-specific recommendations</li>
          <li>Assists rural areas with limited access to expert agronomists</li>
        </ul>
      </InfoCard>
    </div>
  );
}

export default Information;