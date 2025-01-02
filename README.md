QR Recognition and AR Model Loader

📝 Project Overview
A responsive web application that enables users to:

Recognize QR codes via mobile browsers (iOS & Android).
Fetch and display 3D models associated with scanned QR codes.
Upload 3D models and generate unique QR codes for them.
Built using React, Django, and MariaDB, this project seamlessly integrates QR code functionality with interactive 3D model visualization.

🔑 Features
🔍 QR Code Recognition
Mobile camera access to scan QR codes.
On successful recognition:
Fetch 3D model information via API.
Load and display the 3D model.
Trigger animations on interaction.
On failure:
Display an error message (toast popup) for 2 seconds.

🎥 3D Model Viewer
Supports rendering of .glb (glTF) files.
Interactive controls for:
Zooming.
Rotating.
Animation on touch.

🖼️ QR Code Generator
Upload .glb files via the web app.
Generate and display a QR code linked to the uploaded 3D model.
Display the QR code's unique URL.

🛠️ Tech Stack
Frontend: React, JavaScript, HTML, CSS, AR.js, Three.js
Backend: Django, Django REST Framework
Database: MariaDB/PostgreSQL
Other Tools: Docker, AWS

📂 Folder Structure
php
Copy code
project-root/
├── backend/
│   ├── ar_project/         # Django project folder
│   ├── ar_app/             # Django app folder
│   ├── static/             # Static files for the backend
│   ├── media/              # Media files (e.g., uploaded 3D models)
│   ├── requirements.txt    # Backend dependencies
│   └── Dockerfile          # Docker configuration for the backend
├── frontend/
│   ├── src/                # React source code
│   ├── public/             # Public assets
│   ├── package.json        # Frontend dependencies
│   └── Dockerfile          # Docker configuration for the frontend
└── docker-compose.yml      # Docker Compose configuration

🚀 Installation and Setup
Backend Setup
Clone the repository:
bash
Copy code
git clone https://github.com/your-repo.git
cd backend
Create a virtual environment and install dependencies:
bash
Copy code
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
pip install -r requirements.txt
Apply migrations and start the server:
bash
Copy code
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
Frontend Setup
Navigate to the frontend folder:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Docker Setup
Build and run the application using Docker Compose:
bash
Copy code
docker-compose up --build
📡 API Endpoints
1. 3D Model Information
Method: GET
Endpoint: /arinfo/{modelId}
Description: Fetches information about the 3D model.
2. 3D Model Upload
Method: POST
Endpoint: /upload
Description: Uploads a 3D model and generates a QR code.
Request: Multipart/form-data containing the 3D model file.
Response: Unique QR code and its associated URL.
💻 How to Use
QR Recognition:

Open the web app on a mobile device.
Grant camera permissions to scan QR codes.
Upon successful recognition, the associated 3D model will load.
Upload 3D Models:

Navigate to the Model Uploader section.
Upload a .glb file (maximum size: 20 MB).
View the generated QR code and its URL.
