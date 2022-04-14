import ReactAudioPlayer from 'react-audio-player';

const Player = ({ url }: { url: string }) => {


  return (

  <ReactAudioPlayer
    src={url}
    controls
  />
  );
};

export default Player;
