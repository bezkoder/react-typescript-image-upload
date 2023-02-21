import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import ImageUpload from "./components/ImageUpload";

const App: React.FC = () => {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        <h3>bezkoder.com</h3>
        <h4>React Typescript Image Upload</h4>
      </div>

      <ImageUpload />
    </div>
  );
}

export default App;