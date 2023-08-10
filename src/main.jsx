import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, SoftShadows } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import Webcam from './webcam.jsx'
import AccShadows from './AccShadows.jsx'
import Framwork from './FrameWork.jsx'
import Amy from './AmyProject.jsx'
import Experience from './Experience.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Experience />
  </>
)
