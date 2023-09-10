import { useRef, useState } from "react";
import audio from './song.mp3'

function AudioPlay() {
    const [musicPlay, setMusicPlay] = useState(false);
    const refAudio = useRef();
    console.log(musicPlay);

    const handlePlay = () => {
        const nextIsPlaying = !musicPlay;
        setMusicPlay(nextIsPlaying)

        // setMusicPlay(!musicPlay);
        nextIsPlaying ? refAudio.current.play() : refAudio.current.pause();
    }
    return ( 
        <div>
            <audio 
            src={audio} 
            loop="loop"
            ref={refAudio}>
            </audio>
            <button onClick={handlePlay}>{musicPlay ? "Pause" : "Play"  }</button>
        </div> 
    );
}

export default AudioPlay;