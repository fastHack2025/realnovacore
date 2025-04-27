const useSpeak = () => {
    const speak = (text: string) => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "fr-FR";
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;
  
      // Choix d'une voix féminine française si dispo
      const voices = window.speechSynthesis.getVoices();
      utterance.voice = voices.find(v => v.lang === "fr-FR" && v.name.includes("Google")) || voices[0];
  
      window.speechSynthesis.speak(utterance);
    };
  
    return { speak };
  };
  
  export default useSpeak;
  