import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

import styles from "../Waveform/Waveform.module.css";
import Image from "next/image";

import PlayIcon from "../../../public/icons/Play.svg";
import PauseIcon from "../../../public/icons/Pause.svg";
import ArrowDownIcon from "../../../public/icons/ArrowDown.svg";
import DownloadIcon from "../../../public/icons/DownloadIcon.svg";
import secondsToString from "@/lib/secondsToString";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#AEAEAE",
  progressColor: "#FF595A",
  cursorColor: "transparent",
  barWidth: 4,
  barRadius: 5,
  barGap: 4,
  responsive: true,
  height: 62,
  width: 236,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true,
});

export default function TrackDetail({ thumb_audio }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(thumb_audio);

    return () => wavesurfer.current.destroy();
  }, [thumb_audio]);

  const handlePlayPause = () => {
    wavesurfer.current.playPause();
    setPlay(!play);
  };

  return (
    <div className={styles.waveform}>
      <div className={`${styles.controls} controls`}>
        <button onClick={handlePlayPause}>
          {!play ? (
            <Image unoptimized src={PlayIcon} alt="" />
          ) : (
            <Image unoptimized src={PauseIcon} alt="" />
          )}
        </button>
      </div>
      <div className={styles.waveinfo}>
        <div className={styles.player}>
          <div id="waveform" ref={waveformRef} />
        </div>
      </div>
      <button className={styles.downloadButton}>
        <span>Descargar</span>
        <Image unoptimized src={ArrowDownIcon} alt="" />
      </button>
      <div className={styles.downloadIcon}>
        <Image unoptimized src={DownloadIcon} alt="" />
      </div>
      <style global jsx>{`
        #waveform ::part(cursor) {
          display: none;
        }
        #waveform ::part(scroll) {
          width: 544px;
        }
        @media (min-width: 1200px) {
          #waveform ::part(scroll) {
            width: 879px;
          }
        }
      `}</style>
    </div>
  );
}
