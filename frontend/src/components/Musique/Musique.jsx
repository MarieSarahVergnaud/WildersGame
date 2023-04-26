import PropTypes from "prop-types";
import musicFile from "./music.mp3";

function Musique({ setIsMuted, isMuted }) {
  const handleClickMusicOn = () => {
    setIsMuted((current) => !current);
  };

  return (
    <div>
      <audio src={musicFile} loop autoPlay muted={isMuted}>
        <track kind="captions" />
      </audio>
      <button
        type="button"
        id="Musique"
        className="but"
        onClick={handleClickMusicOn}
        aria-label="Save"
      >
        {isMuted ? (
          <img
            src="../src/assets/Musique/SonOffImg.svg"
            className="MusicOff"
            alt="musicOff"
          />
        ) : (
          <img
            src="../src/assets/Musique/SonOnImg.svg"
            className="MusicOn"
            alt="musicOn"
          />
        )}
      </button>
    </div>
  );
}

Musique.propTypes = {
  isMuted: PropTypes.bool.isRequired,
  setIsMuted: PropTypes.func.isRequired,
};

export default Musique;
