import ReactPlayer from "react-player";
import SignatureAnimation from "../assets/signature.mp4";

import { useInView } from 'react-intersection-observer';

const Signature = () => {

  const { ref, inView } = useInView({
    threshold: 0,
  });


  return (
    <div className="signature">
      <div ref={ref}>
        <ReactPlayer
          url={SignatureAnimation}
          playing={inView}
          muted
          playsinline
          width="100%"
          height="90%"
        />
      </div>
    </div>
  );
};

export default Signature;
