import React from "react";
import "./styles/Frame.css";

const Frame = () => {
  return (
    <div className="container_frame" id="Frame">
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100083130822623%2Fvideos%2F1155947515716738%2F&show_text=false&width=267&t=0"
        width="267"
        height="476"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default Frame;
