import React, { useEffect, useState } from 'react';
import './css/spinner.css';

export default function Spinner() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1500); // Hide spinner after 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
  
        <div className="text-center" id='spinner'>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
     
   
  );
}
