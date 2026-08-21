interface Props {
  title: string;
  providerId: string;
}

export default function SoundCloudPlayer({ title, providerId }: Props) {
  const trackUrl = `https://soundcloud.com/${providerId}`;

  const parameters = new URLSearchParams({
    url: trackUrl,
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_reposts: "false",
    show_user: "true",
  });

  const embedUrl = `https://w.soundcloud.com/player/?${parameters}`;

  return (
    <>
      <iframe
        className="soundcloud-player"
        src={embedUrl}
        title={`${title} no SoundCloud`}
        allow="autoplay"
      />

      <style>{`
        .soundcloud-player {
          display: block;
          width: 100%;
          height: 166px;
          border: 0;
        }
      `}</style>
    </>
  );
}
