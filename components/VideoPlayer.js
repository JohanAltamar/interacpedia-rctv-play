import PropTypes from "prop-types";

const VideoPlayer = ({ url, open, close }) => {
  return (
    open && (
      <div className="min-h-screen w-screen fixed z-50 top-0 left-0 flex items-center justify-center bg-black bg-opacity-75" onClick={close}>
        <video src={url} controls style={{maxHeight: 400}} />
      </div>
    )
  );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};
