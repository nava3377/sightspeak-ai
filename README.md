# sightspeak-ai
SightSpeak is a real-time AI-powered assistive vision system combining object detection, spatial reasoning, activity inference, and speech narration for visually impaired support.
# 👁️ SightSpeak AI  
### Intelligent Real-Time Assistive Vision System

SightSpeak AI is a real-time multimodal assistive vision system that detects objects, understands spatial relationships, infers scene activities, and narrates meaningful descriptions using natural language and speech synthesis.

This system is designed to support visually impaired individuals by converting visual scenes into structured spoken explanations.

---

## 🚀 Key Features

- 🎯 Real-time Object Detection (YOLOv8)
- 🧠 Scene Graph Spatial Reasoning
- 🧩 Activity Inference Engine
- 📺 Screen Content Analysis (TV/Laptop Monitoring)
- ✍️ Transformer-Based Language Refinement
- 🔊 Text-to-Speech Narration
- 🌐 Modern Interactive Frontend (React + Vite)
- ⚡ FastAPI Backend for Real-Time Inference

---

## 🧠 System Architecture

Image Input  
↓  
YOLO Object Detection  
↓  
Scene Graph Construction  
↓  
Activity Inference Engine  
↓  
Screen Content Analyzer  
↓  
Language Refinement (LLM)  
↓  
Speech Output  

This hybrid pipeline integrates computer vision, semantic reasoning, and natural language generation to produce contextual scene descriptions.

---

## 🏗️ Tech Stack

### Backend
- FastAPI
- YOLOv8 (Ultralytics)
- OpenCV
- PyTorch
- HuggingFace Transformers
- NumPy

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion
- Web Speech API

---

## 📂 Project Structure

sightspeak-ai/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models/
│   │   │   ├── detector.py
│   │   │   ├── scene_graph.py
│   │   │   ├── activity_inference.py
│   │   │   ├── content_analyzer.py
│   │   │   ├── refiner.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DemoSection.tsx
│   │   │   ├── TeamSection.tsx
│
└── README.md

---

## 🔧 Installation (Local Setup)

### 1️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
