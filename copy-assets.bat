@echo off
echo ========================================================
echo Syncing Profile Picture and Project Assets for Sameh Reda Wahiba
echo ========================================================

if not exist "public\assets" mkdir "public\assets"
if not exist "src\assets" mkdir "src\assets"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1793472719355_a2d172ed.png" "public\assets\sameh-photo.png"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1793472719355_a2d172ed.png" "src\assets\sameh-photo.png"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1793474084283_a93c1d66.png" "public\assets\brain-tumor-project.png"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1793474084283_a93c1d66.png" "src\assets\brain-tumor-project.png"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1793474094866_3999e506.jpg" "public\assets\bank-risk-project.jpg"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1793474094866_3999e506.jpg" "src\assets\bank-risk-project.jpg"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1793474107871_8bada9a2.png" "public\assets\deepfake-project.png"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1793474107871_8bada9a2.png" "src\assets\deepfake-project.png"

copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1793474146448_ddf07ff1.png" "public\assets\fitbit-analysis-project.png"
copy /Y "C:\Users\MANSY\.gemini\antigravity\brain\c6739b5a-aba8-4f9b-bb48-9d7d5ff7071c\.user_uploaded\media_1793474146448_ddf07ff1.png" "src\assets\fitbit-analysis-project.png"

echo Done copying all assets for Sameh Reda Wahiba!
