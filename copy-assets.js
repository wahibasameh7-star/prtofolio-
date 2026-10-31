import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePhoto = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1793472719355_a2d172ed.png';
const sourceDeepfake = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1793474107871_8bada9a2.png';
const sourceBrainTumor = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1793474084283_a93c1d66.png';
const sourceBankRisk = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1793474094866_3999e506.jpg';
const sourceFitbit = 'C:/Users/MANSY/.gemini/antigravity/brain/c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c/.user_uploaded/media_1793474146448_ddf07ff1.png';

const destPhotoPublic = path.join(__dirname, 'public', 'assets', 'sameh-photo.png');
const destPhotoSrc = path.join(__dirname, 'src', 'assets', 'sameh-photo.png');

const destDeepfakePublic = path.join(__dirname, 'public', 'assets', 'deepfake-project.png');
const destDeepfakeSrc = path.join(__dirname, 'src', 'assets', 'deepfake-project.png');
const destBrainTumorPublic = path.join(__dirname, 'public', 'assets', 'brain-tumor-project.png');
const destBrainTumorSrc = path.join(__dirname, 'src', 'assets', 'brain-tumor-project.png');
const destBankRiskPublic = path.join(__dirname, 'public', 'assets', 'bank-risk-project.jpg');
const destBankRiskSrc = path.join(__dirname, 'src', 'assets', 'bank-risk-project.jpg');
const destFitbitPublic = path.join(__dirname, 'public', 'assets', 'fitbit-analysis-project.png');
const destFitbitSrc = path.join(__dirname, 'src', 'assets', 'fitbit-analysis-project.png');

fs.mkdirSync(path.join(__dirname, 'public', 'assets'), { recursive: true });
fs.mkdirSync(path.join(__dirname, 'src', 'assets'), { recursive: true });

try {
  if (fs.existsSync(sourcePhoto)) {
    fs.copyFileSync(sourcePhoto, destPhotoPublic);
    fs.copyFileSync(sourcePhoto, destPhotoSrc);
    console.log('✅ Sameh profile photo copied!');
  }
  if (fs.existsSync(sourceDeepfake)) {
    fs.copyFileSync(sourceDeepfake, destDeepfakePublic);
    fs.copyFileSync(sourceDeepfake, destDeepfakeSrc);
    console.log('✅ Deepfake project image copied!');
  }
  if (fs.existsSync(sourceBrainTumor)) {
    fs.copyFileSync(sourceBrainTumor, destBrainTumorPublic);
    fs.copyFileSync(sourceBrainTumor, destBrainTumorSrc);
    console.log('✅ Brain tumor project image copied!');
  }
  if (fs.existsSync(sourceBankRisk)) {
    fs.copyFileSync(sourceBankRisk, destBankRiskPublic);
    fs.copyFileSync(sourceBankRisk, destBankRiskSrc);
    console.log('✅ Bank risk project image copied!');
  }
  if (fs.existsSync(sourceFitbit)) {
    fs.copyFileSync(sourceFitbit, destFitbitPublic);
    fs.copyFileSync(sourceFitbit, destFitbitSrc);
    console.log('✅ Fitbit analysis project image copied!');
  }
  console.log('🎉 Sameh portfolio assets synchronized successfully.');
} catch (err) {
  console.error('Error copying assets:', err.message);
}
