import "./App.css";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ObjectDetection from "./screens/ObjectDetection";
import SignDetection from "./screens/SignDetection";
import SpeechToText from "./screens/SpeechToText";
import TextToSpeech from "./screens/TextToSpeech";
import { Home } from './screens/Home.jsx'
import { VisuallyImpaired } from "./screens/VisuallyImpaired";
import { DeafDumb } from "./screens/DeafDumb";
import { Dyslexia } from "./screens/Dyslexia";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />   
          <Route path="/visually_impaired" element={<VisuallyImpaired />} />   
          <Route path="/deaf_and_dumb" element={<DeafDumb />} />   
          <Route path="/dyslexia" element={<Dyslexia />} />   
          <Route path="/speech_to_text" element={<SpeechToText />} />   
          <Route path="/text_to_speech" element={<TextToSpeech />} />   
          <Route path="/object_detection" element={<ObjectDetection />} />     
        </Routes>
      </Router>
    </div>
  );
}

export default App;