import { useEffect, useState } from "react";

const useVoiceTrigger = (triggerWord = "davy") => {
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("webkitSpeechRecognition" in window)) return;

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "fr-FR";

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("")
        .toLowerCase();
      if (transcript.includes(triggerWord.toLowerCase())) {
        window.dispatchEvent(new CustomEvent("davy-detected"));
      }
    };

    recognition.start();

    return () => recognition.stop();
  }, [triggerWord]);

  return { listening };
};

export default useVoiceTrigger;
