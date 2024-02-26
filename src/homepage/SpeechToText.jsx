import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, []);
  return <div>SpeechToText</div>;
};

export default SpeechToText;
