# 🌿 [Crop & Fertilizer Prediction](https://crop-predict-frontend.vercel.app/)

This repository contains the [**frontend web application**](https://crop-predict-frontend.vercel.app/) for the Crop & Fertilizer Prediction system.  
It provides an intuitive, responsive interface for farmers and agronomists to get AI-powered crop and fertilizer recommendations based on soil and weather inputs. [Demo](https://crop-predict-frontend.vercel.app/) 

[**Backend repo**](https://github.com/captainRam1413/cropPredictBackend)

---
<br>

## ✨ Features

- 🌱 **User-friendly form** for entering district, soil, and environmental data
- 📊 **Dataset viewer** with download option and pagination
- ⚡ **Instant predictions** via REST API integration
- 📱 **Responsive design** for mobile, tablet, and desktop
- 🌙 **Modern dark theme** with elegant color palette

---
<br>

## 🚀 Getting Started

### 1. **Clone the Repository**
```bash
git clone https://github.com/captainRam1413/cropPredictFrontend.git
cd cropPredictFrontend
```

### 2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

### 3. **Configure API Endpoint**
- By default, the frontend expects the backend at `http://localhost:8000/api/predict/`.
- To change this, edit the API URL in your prediction form component.

### 4. **Run the App**
```bash
npm start
# or
yarn start
```
- The app will open at [http://localhost:3000](http://localhost:3000).

---
<br>

## 🖥️ Main Sections

- **Crop Prediction:**  
  Enter district, soil type, and environmental parameters to get crop and fertilizer recommendations.

- **Dataset:**  
  Browse the underlying dataset, view 10 records at a time, and download the CSV.

- **Information:**  
  Learn about the project, technology stack, and how the system works.

---
<br>

## 📦 Project Structure

```
.
├── public/
│   └── dataset.csv         # Downloadable dataset
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── PredictForm.js
│   │   ├── Dataset.js
│   │   └── Information.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---
<br>

## 🌐 API Usage

The frontend sends a POST request to the backend:

**Endpoint:**  
`POST http://localhost:8000/api/predict/`

**Sample Request:**
```json
{
  "district": "Kolhapur",
  "soil": "Black",
  "nitrogen": 30,
  "potassium": 10,
  "phosphorus": 5,
  "ph": 6.0,
  "rainfall": 600,
  "temperature": 25
}
```

**Sample Response:**
```json
{
  "predicted_crop": "Moong",
  "predicted_fertilizer": "MOP"
}
```

---

## 🎨 Customization

- **Colors & Theme:**  
  Easily change the color palette in `App.css` to match your branding.

- **Dataset:**  
  Replace `public/dataset.csv` with your own data if needed.

---

<br>

## 📦 Dataset Overview

The dataset contains samples from various districts in Western Maharashtra:

| Feature         | Description                                  |
|-----------------|----------------------------------------------|
| `District Name` | Name of the district                         |
| `Soil Color`    | Soil color present in that district          |
| `Nitrogen`      | Nitrogen content in the soil (mg/kg)         |
| `Potassium`     | Potassium level (mg/kg)                      |
| `Phosphorus`    | Phosphorus level (mg/kg)                     |
| `pH`            | pH value of the soil                         |
| `Rainfall`      | Average rainfall in mm                       |
| `Temperature`   | Average temperature in °C                    |
| `Crop`          | Recommended crop label (target)              |
| `Fertilizer`    | Recommended fertilizer (target)              |
| `Link`          | Educational YouTube link (not used in model) |


---
<br>

## 📊 Model Performance

### 🌾 Crop Prediction Accuracy

| Model                   | Accuracy   |
|-------------------------|-----------|
| Decision Tree           | 99.38%    |
| Random Forest           | 99.73%    |
| Gradient Boosting       | 99.91% ✅ (Best) |
| Logistic Regression     | 76.62%    |
| SVM                     | 62.18%    |
| K-Nearest Neighbors     | 95.22%    |

### 💊 Fertilizer Prediction Accuracy

| Model                   | Accuracy   |
|-------------------------|-----------|
| Decision Tree           | 94.42% ✅ (Best) |
| Random Forest           | 91.94%    |
| Gradient Boosting       | 74.93%    |
| Logistic Regression     | 33.39%    |
| SVM                     | 30.12%    |
| K-Nearest Neighbors     | 52.61%    |

**🏆 Selected Best Models**
| Task                  | Best Model         | Accuracy |
|-----------------------|-------------------|----------|
| Crop Prediction       | Gradient Boosting | 99.91%   |
| Fertilizer Prediction | Decision Tree     | 94.42%   |

---

**Made with ❤️ to empower smart farming and sustainable agriculture.**
