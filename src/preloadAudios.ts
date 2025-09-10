/**
 * Preload all the audios in the page.
 * @param sel
 */
const preloadAudios = (sel = "audio") => {
  const audios = document.querySelectorAll(
    sel
  ) as unknown as HTMLAudioElement[];
  audios.forEach((audio) => {
    document.addEventListener(
      "touchstart",
      () => {
        audio.play();
        audio.pause();
      },
      { once: true }
    );
  });
};

export default preloadAudios;
