import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { IconPlay } from '@/icons'

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer({ src } : VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current != null) {
      void videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    if (videoRef.current != null) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className={styles.container_video}>
      <div className={styles.video_wrapper}>
        <video
          ref={videoRef}
          onClick={isPlaying ? handlePause : handlePlay}
          onPause={() => {
            setIsPlaying(false)
          }}
        >
          <source src={src} type="video/mp4" />
        </video>

        {!isPlaying && (
          <button className={styles.button_play__video} onClick={handlePlay}>
            <IconPlay />
          </button>
        )}

        {!isPlaying && <p className={styles.button_play__video__text}>Conheça melhor a linha</p>}
      </div>
    </div>
  )
}
