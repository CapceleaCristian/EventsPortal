import React from "react";

import "./loading-spinner.styles.scss";

const LoadingSpinner = () => (
  <div className="loader-container">
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default LoadingSpinner;
