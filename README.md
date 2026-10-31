# Sameh Reda Wahiba - AI Engineer Portfolio Website

A bespoke, production-ready personal portfolio website built for **Sameh Reda Wahiba (سامح رضا وهبة)**, 4th-year Artificial Intelligence student at **Delta University for Science & Technology (DUST)**, specializing in **Computer Vision**, **Deep Learning**, and **Embedded ML / IoT**.

---

## 🎨 Distinct Design System: Obsidian & Emerald Cyber-Tech Bento Grid

This portfolio was designed from the ground up with a completely distinct visual identity:

- **Color Palette**:
  - Primary Background: **Deep Obsidian Void** (`#06090E` & `#0B111A`)
  - Accent Color: **Cyber Emerald & Mint** (`#10B981`, `#34D399`)
  - Warm Highlight: **Amber Signal** (`#F59E0B`)
  - Card Surfaces: Semi-translucent glassmorphism with emerald neon glow on hover.
- **Layout Philosophy**:
  - **Asymmetrical Bento Grid** instead of traditional linear stacked cards.
  - Interactive Project Case Study Modals (Problem, Solution, Dataset, Methodology, Key Metrics).
  - Terminal-inspired badges, live status indicators, and subtle circuit board vector accents.
  - Viewport reading progress bar at the top of the screen.

---

## 📋 100% Verified CV Data Mapping

Every single detail on this portfolio is strictly extracted from Sameh Reda Wahiba's official CV without any invented claims:

1. **Academic Credentials**:
   - Degree: B.Sc. in Artificial Intelligence
   - University: Delta University for Science and Technology
   - Current Level: 4th Year
   - Cumulative Grade: **Good**
   - Expected Graduation: 2027
2. **Featured Applied Projects**:
   - **Multimodal Deepfake Detection System**: EfficientNet-B0, ResNet50, ConvNeXt (97.19% image), MFCC/Mel + CNN-LSTM (99.78% audio), BiLSTM + DistilBERT (97% text) in a unified Flask app.
   - **Skin Cancer Classification & Segmentation**: Dermoscopic image classification (92% test accuracy) & HAM10000 / ISIC lesion segmentation via transfer learning & fine-tuning.
   - **Bank Customer Churn Prediction System**: Behavioral analysis across 50,000+ customer records using Random Forest & XGBoost, evaluated with ROC-AUC & F1 score.
3. **Verified Skills**:
   - Machine Learning: Scikit-learn, XGBoost, Feature Engineering, Imbalanced Data Handling (SMOTE/CTGAN).
   - Deep Learning & CV: CNNs, OpenCV, Image Augmentation, Transfer Learning, Medical Imaging.
   - Programming & Tools: Python, Git/GitHub, Kaggle, Matplotlib/Seaborn, Pandas/NumPy.
   - Languages: Arabic (Native), English (Good).

---

## 🌐 Deployment to GitHub Pages (Live Website)

Repository: [https://github.com/wahibasameh7-star/prtofolio-.git](https://github.com/wahibasameh7-star/prtofolio-.git)

Live URL (once enabled): **`https://wahibasameh7-star.github.io/prtofolio-/`**

### 1-Click Push via Batch Script:
Double-click `deploy-to-github.bat` inside the project folder.

### Or via Terminal:
```bash
git init
git branch -M main
git remote add origin https://github.com/wahibasameh7-star/prtofolio-.git
git add .
git commit -m "Deploy Sameh Wahiba Cyber-Tech Portfolio"
git push -u origin main
```

### Enable GitHub Pages in 2 clicks:
1. Go to repository **Settings** -> **Pages** (`https://github.com/wahibasameh7-star/prtofolio-/settings/pages`).
2. Under **Build and deployment** -> **Source**: select **GitHub Actions**.
3. GitHub will run the automated `.github/workflows/deploy.yml` action and your site will be live!

---

## 🚀 How to Run Locally

### Option 1: One-Click Runner (Windows)
Simply double-click the included batch script:
```text
run-portfolio.bat
```
This script will automatically:
1. Verify and copy the profile picture to `public/assets/` and `src/assets/`.
2. Run `npm install` if `node_modules` is not yet present.
3. Launch the Vite development server on **`http://localhost:3001`**.

### Option 2: Terminal Commands
```bash
# 1. Navigate to the project directory
cd "C:\Users\MANSY\.gemini\antigravity\scratch\sameh-wahiba-portfolio"

# 2. Sync profile picture
npm run sync-assets

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Then open [http://localhost:3001](http://localhost:3001) in your browser.

---

## 🏗️ Building for Production & Deployment

To generate an optimized production build:
```bash
npm run build
```
The output files will be located in the `dist/` directory, ready to deploy to:
- **Vercel**: Import repository, framework preset: `Vite`.
- **Netlify**: Publish directory `dist`, build command `npm run build`.
- **GitHub Pages**: Configured with relative base `./` in `vite.config.js`.

---

## 📂 Project Structure

```
sameh-wahiba-portfolio/
├── public/
│   ├── favicon.svg                  # Custom SW angular monogram
│   └── assets/
│       └── sameh-photo.png          # High-res suit portrait
├── src/
│   ├── assets/
│   │   └── sameh-photo.png
│   ├── components/
│   │   ├── BackToTop.jsx            # Floating smooth scroll button
│   │   ├── BentoAbout.jsx           # Asymmetrical Bento Grid with verified metrics
│   │   ├── ContactSection.jsx       # Direct email/phone cards & interactive mail form
│   │   ├── EducationJourney.jsx     # Delta University AI & languages card
│   │   ├── FeaturedProjects.jsx     # Interactive project filters & case study cards
│   │   ├── Footer.jsx               # System info, links & copyright
│   │   ├── Hero.jsx                 # Impact headline, status pill & portrait card
│   │   ├── Logo.jsx                 # SW monogram vector component
│   │   ├── Navbar.jsx               # Glassmorphism navbar with mobile drawer
│   │   ├── ProjectModal.jsx         # In-depth project case study modal
│   │   ├── ScrollProgress.jsx       # Viewport reading progress indicator
│   │   └── TechStack.jsx            # Bento grid of technical skills & tools
│   ├── data/
│   │   └── portfolio.js             # Single source of truth with Sameh's CV data
│   ├── App.jsx                      # Primary layout orchestrator
│   ├── index.css                    # Obsidian bento utilities & cyber grid
│   └── main.jsx                     # Application entry point
├── copy-assets.bat                  # Asset copy script for Windows
├── copy-assets.js                   # Node asset copy script (cross-platform)
├── run-portfolio.bat                # 1-Click launcher
├── tailwind.config.js               # Obsidian, Emerald, Mint & Amber theme
├── vite.config.js                   # Vite config (port 3001)
└── package.json
```

---

&copy; 2026 Sameh Reda Wahiba. All rights reserved.
