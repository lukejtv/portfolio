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
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Signature;
