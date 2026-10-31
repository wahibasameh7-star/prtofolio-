import samehPhoto from '../assets/sameh-photo.png';
import brainTumorImg from '../assets/brain-tumor-project.png';
import bankRiskImg from '../assets/bank-risk-project.jpg';
import deepfakeImg from '../assets/deepfake-project.png';
import fitbitImg from '../assets/fitbit-analysis-project.png';

/**
 * Professional Portfolio Data Source for Sameh Reda Wahiba
 * All information strictly derived from official CV & verified credentials.
 */

export const personalInfo = {
  name: "Sameh Wahiba",
  fullName: "Sameh Reda Wahiba",
  title: "AI Student | Machine Learning, Computer Vision & Embedded Systems / IoT",
  roleHeadline: "Artificial Intelligence student with hands-on experience in Python, Machine Learning, Computer Vision, Embedded Systems, and IoT.",
  summary: "Artificial Intelligence student with hands-on experience in Python, Machine Learning, Computer Vision, Embedded Systems, and IoT. Built applied projects spanning medical image analysis, forgery detection, banking loan prediction, and smart hardware systems. Quick learner with strong teamwork and communication skills, passionate about developing smart systems and real-world engineering applications.",
  email: "wahibasameh7@gmail.com",
  phone: "+20 106 535 2038",
  location: "Egypt",
  avatar: samehPhoto,
  cvPath: `${import.meta.env.BASE_URL}assets/Sameh-Reda-Wahiba-CV.pdf`,
  socialLinks: {
    linkedin: "https://linkedin.com/in/sameh-wahiba-04a5542b2",
    email: "mailto:wahibasameh7@gmail.com",
    phone: "tel:+201065352038"
  },
  stats: [
    { label: "Financial Records Analyzed", value: "50,000+" },
    { label: "MRI Scans Preprocessed", value: "3,000+" },
    { label: "Multimodal Media Samples", value: "2,000+" },
    { label: "Peak Model Accuracy", value: "~92%" },
  ]
};

export const bentoHighlights = [
  {
    id: "embedded-iot",
    title: "Embedded Systems & IoT",
    tag: "Hardware Automation",
    description: "Developing smart hardware prototypes with ESP32 microcontrollers, sensor fusion, and responsive web dashboards.",
    accent: "emerald"
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Medical AI",
    tag: "Deep Learning",
    description: "Training CNN models for medical image classification and data augmentation on 3,000+ MRI scans.",
    accent: "mint"
  },
  {
    id: "risk-modeling",
    title: "Fraud Detection & Predictive ML",
    tag: "Risk Analytics",
    description: "Addressing extreme class imbalance on 50,000+ banking transactions with precision and recall optimization.",
    accent: "teal"
  },
  {
    id: "multimodal-ai",
    title: "Multimodal Content Forensics",
    tag: "Modality Fusion",
    description: "Extracting cross-modal features across images, audio, and text behind real-time Flask inference APIs.",
    accent: "amber"
  }
];

export const skillsData = [
  {
    category: "Machine Learning",
    description: "Supervised algorithms, predictive modeling, and feature engineering",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Feature Engineering",
      "Model Training & Evaluation",
      "Class Imbalance Handling",
      "Cross-Validation"
    ]
  },
  {
    category: "Deep Learning",
    description: "Neural network architectures and deep learning frameworks",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "CNNs",
      "RNNs",
      "LSTMs",
      "Transformers"
    ]
  },
  {
    category: "AI Domains & Computer Vision",
    description: "Visual analysis, natural language processing, and open-source models",
    skills: [
      "Computer Vision",
      "OpenCV",
      "Natural Language Processing (NLP)",
      "Hugging Face",
      "Image Augmentation",
      "Multimodal AI"
    ]
  },
  {
    category: "Embedded Systems & IoT",
    description: "Hardware microcontrollers, sensor integration, and telemetry",
    skills: [
      "ESP32",
      "IR Sensors",
      "Ultrasonic Sensors",
      "Servo Motors",
      "DHT11 / Flame Sensors",
      "LCD / Hardware Interfaces",
      "C / C++ Embedded Logic"
    ]
  },
  {
    category: "Data Analysis & Processing",
    description: "Data manipulation, exploratory analysis, and feature derivation",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Exploratory Data Analysis (EDA)",
      "Data Preprocessing",
      "Data Cleaning"
    ]
  },
  {
    category: "Pipelines & Deployment Tools",
    description: "Model serialization, containerization, and developer tooling",
    skills: [
      "Flask",
      "Git",
      "Docker",
      "MLflow",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab"
    ]
  }
];

export const projectsData = [
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection Using Deep Learning",
    category: "Computer Vision",
    tags: ["Deep Learning", "Computer Vision", "TensorFlow", "Flask", "Python", "CNN"],
    image: brainTumorImg,
    shortDescription: "CNN-based classification pipeline detecting brain tumors from MRI scans with ~92% accuracy, integrated into a real-time Flask web application.",
    keyMetrics: [
      { label: "Accuracy", value: "~92%" },
      { label: "Dataset Size", value: "3,000+ Scans" },
      { label: "Deployment", value: "Flask Web App" }
    ],
    highlights: [
      "Trained and evaluated a CNN-based classification model on 3,000+ MRI scans, achieving approximately 92% classification accuracy.",
      "Preprocessed and augmented 3,000+ MRI scans using normalization, resizing, and data augmentation techniques to improve model generalization and reduce overfitting.",
      "Built and deployed an end-to-end Flask web application integrating image upload with real-time CNN-based MRI tumor classification."
    ],
    details: {
      problem: "Early and precise detection of brain tumors from MRI scans is crucial for timely clinical treatment, yet manual inspection requires extensive radiologist time.",
      solution: "Engineered a Convolutional Neural Network (CNN) architecture with automated skull normalization and spatial data augmentation, packaged behind a responsive Flask web app.",
      dataset: "3,000+ curated high-resolution brain MRI scans categorized across tumor classes and healthy scans.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "NumPy"],
      methodology: "Preprocessed MRI scans with normalization, adaptive contrast adjustments, and spatial rotations. Trained deep convolutional layers with Dropout and Batch Normalization.",
      results: "Reached ~92% classification accuracy with solid generalization across varied MRI contrast levels."
    },
    githubUrl: null,
    liveUrl: null
  },
  {
    id: "banking-fraud-detection",
    title: "Bank Financial Risk Management System",
    category: "Machine Learning",
    tags: ["Machine Learning", "Scikit-learn", "XGBoost", "Feature Engineering", "Python", "Finance"],
    image: bankRiskImg,
    shortDescription: "Financial ML models evaluating 50,000+ transaction records to detect fraudulent activity and predict loan repayment probabilities.",
    keyMetrics: [
      { label: "Accuracy", value: "~90%" },
      { label: "Transactions", value: "50,000+ Records" },
      { label: "Metrics", value: "Precision & Recall" }
    ],
    highlights: [
      "Trained and validated fraud detection models using 50,000+ transaction records, achieving approximately 90% classification accuracy.",
      "Addressed class imbalance and assessed fraud detection model performance using precision, recall, and F1-score to ensure reliable results beyond accuracy alone.",
      "Built a loan repayment prediction component using financial data and applied feature engineering to prepare input variables for predictive modeling."
    ],
    details: {
      problem: "Financial institutions face critical losses from fraudulent transactions and bad credit default. Mitigating these risks requires overcoming extreme class imbalance without disrupting legitimate users.",
      solution: "Developed an XGBoost and Scikit-learn predictive framework using balanced class weights, feature engineering, and precision/recall optimization for fraud and loan default.",
      dataset: "50,000+ financial transaction and applicant credit history records.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Seaborn"],
      methodology: "Handled severe class skew with sampling techniques and threshold tuning. Derived spending velocity and balance delta features. Evaluated via Precision, Recall, and ROC-AUC.",
      results: "Attained ~90% accuracy with reliable precision and recall on the minority fraud cases."
    },
    githubUrl: null,
    liveUrl: null
  },
  {
    id: "ai-generated-content-detection",
    title: "Multimodal Deepfake Detection System",
    category: "Deep Learning",
    tags: ["Deep Learning", "Multimodal AI", "Flask", "XGBoost", "Python", "Scikit-learn"],
    image: deepfakeImg,
    shortDescription: "Multimodal AI detection pipeline identifying synthetic media across images, audio, and text with real-time Flask API predictions.",
    keyMetrics: [
      { label: "Accuracy", value: "~85%" },
      { label: "Modalities", value: "Image, Audio, Text" },
      { label: "Dataset Size", value: "2,000+ Samples" }
    ],
    highlights: [
      "Engineered a multimodal AI-generated content detection pipeline processing 2,000+ image, audio, and text samples, achieving approximately 85% classification accuracy.",
      "Combined modality-specific feature extraction across 3 content types—image, audio, and text—within a unified classification workflow.",
      "Packaged the multimodal detection pipeline behind a Flask API supporting real-time prediction across 3 input modalities: image, audio, and text."
    ],
    details: {
      problem: "The rapid emergence of generative AI and deepfakes across visual, acoustic, and linguistic formats makes single-modality forgery detection inadequate.",
      solution: "Engineered a unified multimodal pipeline extracting modality-specific artifacts and combining them into an ensemble classifier served via Flask API.",
      dataset: "2,000+ curated synthetic and human-authored media samples across image, audio, and text.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "XGBoost", "Flask", "OpenCV", "NumPy"],
      methodology: "Extracted frequency and spatial residuals from imagery, acoustic spectrogram features from audio, and perplexity metrics from text, integrating them into a unified decision workflow.",
      results: "Achieved ~85% multimodal classification accuracy with sub-second API inference response."
    },
    githubUrl: null,
    liveUrl: null
  },
  {
    id: "fitbit-marketing-data-analysis",
    title: "Fitbit Marketing Data Analysis & Interactive Dashboards",
    category: "Data Analysis",
    tags: ["Data Analysis", "Data Visualization", "Interactive Dashboards", "KPI Tracking", "Python", "Marketing Analytics"],
    image: fitbitImg,
    shortDescription: "A comprehensive data analysis project evaluating and visualizing Fitbit's marketing campaigns with interactive dashboards tracking KPIs, audience insights, and conversion trends.",
    keyMetrics: [
      { label: "Total Impressions", value: "48K" },
      { label: "Click-Through Rate", value: "10.11%" },
      { label: "Conversion Rate", value: "30.97%" }
    ],
    highlights: [
      "Executive KPIs Tracking: Monitored critical metrics including Total Impressions (48K), Click-Through Rate (10.11%), Total Clicks, Conversion Rate (30.97%), and Total Conversion Value.",
      "Audience Insights: Analyzed impressions and conversions by age group, gender, and user type (New vs. Returning) to identify the most engaged and profitable customer segments.",
      "Time & Seasonality Analysis: Evaluated campaign effectiveness across different months, day types (Weekdays vs. Weekends), and daily user routines (working, resting, and sleeping times) to optimize ad scheduling.",
      "Product & Regional Performance: Visualized total conversion values across various product categories (Wearables, Accessories, Laptops, etc.) and top-performing countries (Canada, Germany, Australia, etc.).",
      "Ad Platform Effectiveness: Compared conversion rates across multiple digital platforms including Google, Facebook, Instagram, and X to determine the highest ROI channels.",
      "Tools & Skills Demonstrated: Data Cleaning, Data Visualization, Interactive Dashboard Design, KPI Tracking, and Strategic Marketing Analytics."
    ],
    details: {
      problem: "Marketing leadership requires clear, data-driven visibility into multi-channel campaign ROI, conversion rates, and demographic performance across international markets.",
      solution: "Engineered an end-to-end data analysis and interactive dashboard system tracking executive KPIs, audience breakdowns, seasonal variations, and ad platform yields.",
      dataset: "Fitbit multi-regional marketing campaign dataset encompassing 48,000+ impressions, multi-tier product categories, conversion values, and temporal user engagement logs.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Interactive Dashboards", "KPI Tracking"],
      methodology: "Cleaned and prepared marketing metrics, conducted comprehensive exploratory data analysis (EDA), built demographic and time-of-day cohorts, and visualized performance across digital channels (Google, Facebook, Instagram, X).",
      results: "Identified key performance drivers achieving a 10.11% CTR, 30.97% conversion rate on 48K impressions, and isolated top regional markets (Canada, Germany, Australia) to maximize ad spend ROI."
    },
    githubUrl: null,
    liveUrl: null
  }
];

export const educationData = [
  {
    institution: "Delta University for Science and Technology, Egypt",
    degree: "B.Sc. in Artificial Intelligence (Faculty of Artificial Intelligence)",
    level: "Current Level: 4th Year",
    grade: "Grade: Good",
    period: "2023 – 2027 (Expected)",
    details: "In-depth undergraduate engineering curriculum covering Machine Learning, Deep Learning, Computer Vision, Embedded Systems, IoT Architectures, Data Structures & Algorithms, and Software Engineering."
  }
];

export const languagesData = [
  { language: "Arabic", proficiency: "Native" },
  { language: "English", proficiency: "Good" }
];
