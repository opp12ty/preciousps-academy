"use client";

import { useEffect } from "react";

/**
 * Plays every "Listen" button made by [[listen: …]] in lessons and questions, using the device's own
 * speech voice, so listening practice needs no audio download. One handler serves the whole page.
 */
export function SpeakButtons() {
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const onClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement | null)?.closest<HTMLButtonElement>(".listen-btn");
      if (!btn) return;
      e.preventDefault();
      const synth = window.speechSynthesis;
      const playing = btn.dataset.playing === "1";
      synth.cancel();
      document.querySelectorAll<HTMLButtonElement>(".listen-btn[data-playing='1']").forEach((b) => {
        b.dataset.playing = "";
        b.innerHTML = "&#128266; Listen";
      });
      if (playing) return;
      const say = new SpeechSynthesisUtterance(btn.dataset.say ?? "");
      const voice = synth.getVoices().find((v) => /^en[-_](GB|NG|US)/i.test(v.lang));
      if (voice) say.voice = voice;
      say.lang = voice?.lang ?? "en-GB";
      say.rate = 0.92;
      say.onend = say.onerror = () => {
        btn.dataset.playing = "";
        btn.innerHTML = "&#128266; Listen again";
      };
      btn.dataset.playing = "1";
      btn.innerHTML = "&#9632; Stop";
      synth.speak(say);
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      window.speechSynthesis.cancel();
    };
  }, []);
  return null;
}
