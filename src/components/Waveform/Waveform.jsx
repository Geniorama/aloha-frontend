import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

import styles from "./Waveform.module.css";
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

export default function Waveform({
  id,
  title,
  username,
  duration_in_seconds,
  thumb_audio,
  bpm,
  active,
  handleSelect,
}) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(thumb_audio);

    return () => wavesurfer.current.destroy();
  }, [thumb_audio]);

  useEffect(() => {
    if (!active && play) {
      wavesurfer.current.playPause();
    }
  }, [active, play]);

  const handlePlayPause = () => {
    wavesurfer.current.playPause();
    setPlay(!play);
    handleSelect(id);
  };

  return (
    <div className={styles.waveform}>
      <div className={`${styles.controls} controls`}>
        <button onClick={handlePlayPause}>
          {!play || !active ? (
            <Image src={PlayIcon} alt="" />
          ) : (
            <Image src={PauseIcon} alt="" />
          )}
        </button>
        <div>
          <h2>{title}</h2>
          <span>
            Autor: <b>{username}</b>
          </span>
        </div>
      </div>
      <div className={styles.waveinfo}>
        <span>{secondsToString(duration_in_seconds)}</span>
        {bpm && <span>{bpm} BPM</span>}
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
