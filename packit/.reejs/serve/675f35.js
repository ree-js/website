import React from "../cache/e2d12d.js";
import confetti from '../cache/f80eef.js';
import {useEffect} from '../cache/e2d12d.js';

export default function ItsPartyTime(){
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    });
    return(React.createElement(React.Fragment, null))
}
//# sourceURL=src/components/docs/helpers/ItsPartyTime.jsx