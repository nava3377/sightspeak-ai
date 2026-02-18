import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Mic, Play, RotateCcw } from "lucide-react";
import { detectImage } from "../api/detect";

interface Detection {
  label: string;
  confidence: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

const DemoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [detections, setDetections] = useState<Detection[]>([]);
  const [description, setDescription] = useState("");
  const [detected, setDetected] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  // Start camera on load
  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };
    startCamera();
  }, []);

  // Capture frame and send to backend
  const handleDetect = async () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx?.drawImage(video, 0, 0);

    const base64 = canvas.toDataURL("image/jpeg").split(",")[1];

    try {
      const result = await detectImage(base64);

      setDetections(result.objects || []);
      setDescription(result.description || "");
      if (result.description) {
        const speech = new SpeechSynthesisUtterance(result.description);
        const voices = window.speechSynthesis.getVoices();
        speech.voice = voices.find(voice => voice.name.includes("Google")) || voices[0];

        speech.rate = 1;      // speed
        speech.pitch = 1;     // tone
        speech.volume = 1;    // volume

        window.speechSynthesis.cancel(); // stop previous speech
        window.speechSynthesis.speak(speech);
      }

      setDetected(true);

      setSpeaking(true);
      setTimeout(() => setSpeaking(false), 3000);
    } catch (error) {
      console.error("Detection failed:", error);
    }
  };

  const handleReset = () => {
    setDetected(false);
    setDetections([]);
    setDescription("");
    setSpeaking(false);
  };

  return (
    <section id="demo" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Model <span className="text-blue-500">Demo</span>
          </h2>
          <p className="text-gray-400">
            Real-time object detection with backend integration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Area */}
          <div className="relative bg-black rounded-lg aspect-video overflow-hidden mb-6">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Bounding Boxes */}
            <AnimatePresence>
              {detected &&
                detections.map((det, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute border-2 border-cyan-400"
                    style={{
                      left: `${det.x * 100}%`,
                      top: `${det.y * 100}%`,
                      width: `${det.w * 100}%`,
                      height: `${det.h * 100}%`,
                    }}
                  >
                    <span className="absolute -top-6 left-0 bg-cyan-400 text-black text-xs px-2 py-0.5 rounded">
                      {det.label} {Math.round(det.confidence * 100)}%
                    </span>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mb-8">
            <button
              onClick={handleDetect}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              <Play className="inline w-4 h-4 mr-2" />
              Detect Scene
            </button>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg"
            >
              <RotateCcw className="inline w-4 h-4 mr-2" />
              Reset
            </button>
          </div>

          {/* Results */}
          <AnimatePresence>
            {detected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-blue-400">
                    Detected Objects
                  </h4>

                  {detections.map((det, i) => (
                    <div key={i} className="mb-2">
                      {det.label} – {Math.round(det.confidence * 100)}%
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 flex items-center gap-2 text-blue-400">
                    Generated Description
                    {speaking && (
                      <Mic className="w-4 h-4 text-green-400 animate-pulse" />
                    )}
                  </h4>

                  <p>{description}</p>

                  {speaking && (
                    <div className="mt-4 text-green-400">
                      Speaking...
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
