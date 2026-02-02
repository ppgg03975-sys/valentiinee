import { useState, useEffect, useRef } from "react";
import bearImg from "./assets/bear.png";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import romanticMusic from "./assets/romantic_music.mp3";
import userPic1 from "./assets/user_pic1.jpg";
import userPic2 from "./assets/user_pic2.jpg";
import foreverTogether from "./assets/forever_together.jpg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  const audioRef = useRef(null);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  useEffect(() => {
    if (yesPressed && audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.play().catch(error => {
        console.log("Audio play failed:", error);
      });

      // Load the final page after 7 seconds of clicking Yes
      const timer = setTimeout(() => {
        setShowFinalPage(true);
      }, 7000); // 7 seconds delay

      return () => clearTimeout(timer);
    }
  }, [yesPressed]);

  const getNoButtonText = () => {
    const phrases = [
      "No", "Are you sure?", "Really sure?", "Think again!", "Last chance!",
      "Surely not?", "You might regret this!", "Give it another thought!",
      "Are you absolutely certain?", "This could be a mistake!", "Have a heart!",
      "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?",
      "Is that your final answer?", "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="selection:bg-rose-200 selection:text-rose-900">
      <audio ref={audioRef} src={romanticMusic} loop />

      {showFinalPage ? (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 overflow-y-auto bg-gradient-to-br from-rose-100 to-pink-200">
          <div className="max-w-4xl w-full animate-in fade-in zoom-in duration-1000">
            <div className="glass p-8 md:p-12 mb-8 text-center shadow-2xl">
              <h1 className="title-font text-4xl md:text-6xl text-rose-600 mb-6">Our Beautiful Journey</h1>
              <p className="text-xl md:text-2xl text-rose-500 font-medium leading-relaxed italic whitespace-pre-line">
                "It’s crazy how we started as kids in school and somehow here we are…
                years later, miles apart, still choosing each other.

                Long distance isn’t easy — different countries, different time zones, missing you on normal days —
                but loving you has always felt natural.

                I know I can’t express everything through texts,
                there’s so much I feel that words can’t hold.
                I just hope we’ll be together soon — no distance, no waiting.

                No matter where we are, you’re still my person.
                Always have been. Always will be

                Happy Valentine’s Day, my love."❤️❤️
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              <div className="group relative overflow-hidden rounded-3xl shadow-xl border-4 border-white/50 transform hover:scale-105 transition-transform duration-500">
                <img src={userPic1} alt="Romantic Moment 1" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-rose-500/20 group-hover:bg-rose-500/0 transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="glass px-4 py-2 text-rose-700 font-semibold shadow-sm">My Queen 🌹</span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl shadow-xl border-4 border-white/50 transform hover:scale-105 transition-transform duration-500">
                <img src={userPic2} alt="Romantic Moment 2" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-rose-500/20 group-hover:bg-rose-500/0 transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="glass px-4 py-2 text-rose-700 font-semibold shadow-sm">Love is in the air ✨</span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl shadow-xl border-4 border-white/50 transform hover:scale-105 transition-transform duration-500 md:col-span-2">
                <img src={foreverTogether} alt="Romantic Moment 3" className="w-full h-[30rem] object-cover" />
                <div className="absolute inset-0 bg-rose-500/20 group-hover:bg-rose-500/0 transition-colors duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h2 className="title-font text-3xl text-white drop-shadow-lg">Together Forever ❤️</h2>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center text-rose-400 font-medium">
              <p className="animate-bounce">Happy Valentine's Day! 🌹🧸</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
          {yesPressed ? (
            <div className="glass p-8 md:p-12 flex flex-col items-center animate-in fade-in zoom-in duration-500 text-center">
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-pink-200/50 rounded-full blur-2xl animate-pulse"></div>
                <img
                  src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                  alt="Bear Kiss"
                  className="rounded-2xl shadow-xl floating relative z-10"
                />
              </div>
              <h1 className="title-font text-5xl md:text-7xl text-rose-600 mb-6">
                Yayyyyy!!! ❤️
              </h1>
              <div className="flex items-center gap-4 text-rose-500 font-medium text-xl">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-rose-500"></div>
                <span>Preparing a special surprise for you...</span>
              </div>
            </div>
          ) : (
            <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
              {/* Floating Decorative Elements */}
              <img src={lovesvg} className="fixed top-12 left-10 md:left-24 w-32 md:w-48 opacity-40 animate-pulse pointer-events-none" alt="Love SVG" />
              <img src={lovesvg2} className="fixed bottom-20 right-10 md:right-24 w-32 md:w-48 opacity-40 animate-pulse pointer-events-none" alt="Love SVG 2" />

              <div className="glass p-8 md:p-10 flex flex-col items-center w-full shadow-2xl border-white/40">
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-rose-200/50 rounded-full blur-2xl animate-pulse"></div>
                  <img className="h-64 md:h-80 w-auto rounded-3xl shadow-lg relative z-10 floating object-cover" src={bearImg} alt="Cute Valentine Bear" />
                </div>

                <h1 className="title-font text-4xl md:text-6xl text-rose-600 mb-10 text-center leading-tight">
                  Will you be my <br /> Valentine?
                </h1>

                <div className="flex flex-wrap justify-center gap-6 items-center">
                  <button
                    className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-rose-200 transition-all active:scale-95 duration-200 pulse-soft"
                    style={{ fontSize: Math.min(yesButtonSize, 150) }}
                    onClick={() => setYesPressed(true)}
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleNoClick}
                    className="bg-zinc-100 hover:bg-zinc-200 text-zinc-600 font-bold py-4 px-8 rounded-full border border-zinc-200 transition-all active:scale-95 duration-200"
                  >
                    {noCount === 0 ? "No" : getNoButtonText()}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
