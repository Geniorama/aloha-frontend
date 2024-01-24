import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

import styles from "./Waveform.module.css";
import Image from "next/image";

import PlayIcon from "../../../public/icons/Play.svg";
import PauseIcon from "../../../public/icons/Pause.svg";
import ArrowDownIcon from "../../../public/icons/ArrowDown.svg";
import heartIcon from "../../../public/icons/HeartIcon.svg";
import heartSolidIcon from "../../../public/icons/HeartSolidIcon.svg";
import DownloadMusica from "../../../public/icons/DownloadMusica.svg";
import DownloadMuestra from "../../../public/icons/DownloadMuestra.svg";
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
  const [like, setLike] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

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
  
  const handleLike = () => {
    setLike(!like);
  };
  
  const handleDownload = () => {
    setShowDownload(!showDownload);
  };

  return (
    <div className={styles.waveform}>
      <div className={`${styles.controls} controls`}>
        <button onClick={handlePlayPause}>
          {!play || !active ? (
            <Image unoptimized src={PlayIcon} alt="" />
          ) : (
            <Image unoptimized src={PauseIcon} alt="" />
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
      {
        like?
          <button className={styles.selectLike} onClick={handleLike}>
            <Image unoptimized src={heartSolidIcon} alt="Like" />
          </button> :
          <button className={styles.selectLike} onClick={handleLike}>
            <Image unoptimized src={heartIcon} alt="Dislike" />
          </button>
      }
      <button className={styles.downloadButton} onClick={handleDownload}>
        <span>Descargar</span>
        <Image unoptimized src={ArrowDownIcon} alt="" />
      </button>
      <div className={styles.downloadIcon}  onClick={handleDownload}>
        <Image unoptimized src={DownloadIcon} alt="" />
      </div>
      {
        showDownload &&
        <div className={styles.downloadPopUp}>
          <button>
            <Image unoptimized src={DownloadMusica} alt="" />
            <span>Descargar pista</span>
          </button>
          <button>
            <Image unoptimized src={DownloadMuestra} alt="" />
            <span>Descargar muestra</span>
          </button>
        </div>
      }
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
