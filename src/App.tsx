import React from "react";
import FaqBot from "./components/FaqBot.tsx"; // Import the component
import "./App.css";
import './index.css';
import './output.css';



const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Navigate Sweden</h1>
      <FaqBot />
    </div>
  );
};

export default App;
