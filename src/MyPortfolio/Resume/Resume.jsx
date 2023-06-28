import React from "react";

const Resume = () => {
  const handleDownload=()=>{
    window.open('https://drive.google.com/file/d/id=1qW0R1IgmpPXcYUOQftRfKS0WItdxAENH&export=download')
  }
    
              //1qW0R1IgmpPXcYUOQftRfKS0WItdxAENH
    
    
  return (
    <div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default Resume;
<h2>This is resume</h2>;