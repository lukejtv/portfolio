import ReactPlayer from 'react-player'
import SignatureAnimation from './animations/signature.mp4'


const Signature = () => {
      return (
        <div>
            <ReactPlayer
            url = {SignatureAnimation}
            playing = {true}
            muted
            playsinline
            />
        </div>
      );
    };

  export default Signature;