// src/components/VoiceAssistant.tsx
'use client';

import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function VoiceAssistant() {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!listening) {
        SpeechRecognition.startListening({ continuous: true });
      }
    }, 40000); // 40 secondes après arrivée sur le site
    return () => clearTimeout(timeout);
  }, [listening]);

  useEffect(() => {
    if (transcript.includes('contact')) {
      window.location.href = '/contact';
      resetTranscript();
    }
    if (transcript.includes('services')) {
      window.location.href = '/services';
      resetTranscript();
    }
    if (transcript.includes('prix') || transcript.includes('tarif')) {
      window.location.href = '/pricing';
      resetTranscript();
    }
    if (transcript.includes('actualités') || transcript.includes('news')) {
      window.location.href = '/news';
      resetTranscript();
    }
    if (transcript.includes('réalisations') || transcript.includes('projets')) {
      window.location.href = '/projects';
      resetTranscript();
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
        className={`bg-primary text-white rounded-full p-4 shadow-xl animate-pulse hover:scale-110 transition-all duration-300`}
      >
        🎙️ {listening ? 'En écoute...' : 'Assistant DaVY'}
      </button>
    </div>
  );
}
