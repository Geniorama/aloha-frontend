import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

import styles from "./Waveform.module.css";
import Image from "next/image";

import PlayIcon from "../../../public/icons/Play.svg";
import PauseIcon from "../../../public/icons/Pause.svg";
import ArrowDownIcon from "../../../public/icons/ArrowDown.svg";
import DownloadIcon from "../../../public/icons/DownloadIcon.svg";

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

export default function Waveform({ url }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);

  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div className={styles.waveform}>
      <div className={`${styles.controls} controls`}>
        <button onClick={handlePlayPause}>
          {!playing ? (
            <Image src={PlayIcon} alt="" />
          ) : (
            <Image src={PauseIcon} alt="" />
          )}
        </button>
        <div>
          <h2>Gran pista de percusión automo...</h2>
          <span>
            Autor: <b>Stock 19</b>
          </span>
        </div>
      </div>
      <div className={styles.waveinfo}>
        <span>01:32</span>
        <span>153BPM</span>
        <div className={styles.player}>
          <div id="waveform" ref={waveformRef} />
        </div>
      </div>
      <button className={styles.downloadButton}>
        <span>Descargar</span>
        <Image src={ArrowDownIcon} alt="" />
      </button>
      <div className={styles.downloadIcon}>
        <Image src={DownloadIcon} alt="" />
      </div>
      <style global jsx>{`
        #waveform ::part(cursor) {
          display: none;
        }
        @media (max-width: 500px) {
          #waveform ::part(wrapper) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
