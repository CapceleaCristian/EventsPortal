import React from "react";

import "./loading-spinner.styles.scss";

const LoadingSpinner = () => (
  <div className="loader-container">
    <div class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default LoadingSpinner;
