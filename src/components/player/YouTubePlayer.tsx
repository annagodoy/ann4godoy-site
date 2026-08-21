interface Props {
  title: string;
  providerId: string;
}

export default function YouTubePlayer({ title, providerId }: Props) {
  const embedUrl =
    `https://www.youtube-nocookie.com/embed/${providerId}` +
    "?playsinline=1&autoplay=0";

  return (
    <>
      <iframe
        className="youtube-player"
        src={embedUrl}
        title={`${title} no YouTube`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <style>{`
        .youtube-player {
          display: block;
          width: 100%;
          border: 0;
          aspect-ratio: 16 / 9;
        }
      `}</style>
    </>
  );
}
