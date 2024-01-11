import { useState } from "react";
import Waveform from "../Waveform/Waveform";

export default function PlayerListTrends({ playlist = [] }) {
  const [active, sectActive] = useState();
  const handleSelect = (value) => sectActive(value);
  return (
    <div>
      {playlist.map((track) => (
        <Waveform
          active={active === track.id}
          handleSelect={handleSelect}
          key={track.id}
          {...track}
        />
      ))}
    </div>
  );
}
