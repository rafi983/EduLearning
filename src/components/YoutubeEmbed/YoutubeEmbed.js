import PropTypes from "prop-types";
import React from "react";

// youtube video

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/sv5hK4crIRc"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
