import ReactPlayer from "react-player";
import SignatureAnimation from "../assets/signature.mp4";

const Signature = () => {
  return (
    <div className="signature">
      <ReactPlayer
        url={SignatureAnimation}
        playing={true}
        muted
        playsinline
        width="90%"
        height="90%"
      />
    </div>
  );
};

export default Signature;
