import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS } from "@mediapipe/hands";
import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";
import { useContext, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import ZContext from "./pointZContext";

const Meta = () => {
    const webcamRef = useRef()
    const canvasRef = useRef()
    const handLandmarkerRef = useRef()
    const {zValue} = useContext(ZContext);
    const createHandLandmarker = async () => {
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
        );
        handLandmarkerRef.current = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
            delegate: "GPU",
          },
          runningMode: "VIDEO",
          numHands: 1,
        })
        console.log("completed............");
      };


      const processResult = (results,canvasCtx)=>{

        if(!results) return
        if(!canvasCtx) return

        drawConnectors(canvasCtx,results.landmarks?.[0],HAND_CONNECTIONS,{
            color: "#00FF00",
            lineWidth: 5,
        })
        drawLandmarks(canvasCtx,results.landmarks?.[0],{
            color: "#FF0000",
            lineWidth: 1,
        })
      }

      const renderLoop = ()=>{
        console.log("called")
        const video = webcamRef.current;
        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d");
        canvasElement.style.width = video.video.videoWidth;
        canvasElement.style.height = video.video.videoHeight;
        canvasElement.width = video.video.videoWidth;
        canvasElement.height = video.video.videoHeight;
        if (!handLandmarkerRef.current) return;
        if (!video || !video.video.srcObject) return;
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        let startTimeMs = performance.now();
        const results = handLandmarkerRef.current.detectForVideo(
          video.video,
          startTimeMs
        );
        console.log(results)
        processResult(results,canvasCtx)
        zValue(results.landmarks?.[0]?.[0].z)
        canvasCtx.restore()
        requestAnimationFrame(()=>{
            renderLoop();
        })
    }



    useEffect(()=>{
        createHandLandmarker()
    },[])


    return (
        <>
        <Webcam ref={webcamRef} mirrored={true} style={{position:"absolute",top:"0%",right:"0%"}} />
        <canvas ref={canvasRef} style={{position:"absolute",top:"0%",right:"0%"}} id="output" >
        </canvas>
        <button onClick={renderLoop} style={{position:"absolute",zIndex:9999,top:0}}>Start</button>
        </>
    );
}
 
export default Meta;