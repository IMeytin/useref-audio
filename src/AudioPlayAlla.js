import { useRef, useState } from "react";
import audio from './song.mp3'

function AudioPlayAlla() {
    const [musicPlay, setMusicPlay] = useState(true);
    const refAudio = useRef();
    console.log(musicPlay);

    const handlePlay = () => {
        setMusicPlay(!musicPlay);
        musicPlay ? refAudio.current.play() : refAudio.current.pause();
    }
    return ( 
        <div>
            <audio 
            src={audio} 
            loop="loop"
            ref={refAudio}>
            </audio>
            <button onClick={handlePlay}>{musicPlay ? "Play" : "Pause"  }</button>
        </div> 
    );
}

export default AudioPlayAlla;