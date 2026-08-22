import { useId, useState } from "react";
import SoundCloudPlayer from "./SoundCloudPlayer";
import YouTubePlayer from "./YouTubePlayer";

import type { PlayerSet, PlayerState } from "../../types/set-player";

interface Props {
  sets: readonly PlayerSet[];
  heading?: string;
}

const platformLabels = {
  youtube: "YouTube",
  soundcloud: "SoundCloud",
} satisfies Record<PlayerSet["platform"], string>;

export default function SetPlayer({
  sets,
  heading = "Player",
}: Props) {
  const titleId = useId();
  const [playerState, setPlayerState] = useState<PlayerState>({
    status: "idle",
  });

  const selectedSet = playerState.status === "idle" ? null : playerState.set;

  return (
    <section
      className="set-player"
      aria-labelledby={titleId}
    >
      <header className="set-player__header">
        <h3 id={titleId}>{heading}</h3>

        <p className="set-player__status" aria-live="polite">
          {selectedSet
            ? `${selectedSet.title} — ${platformLabels[selectedSet.platform]}`
            : "Selecione um set para ouvir."}
        </p>
      </header>

      <ul
        className="set-player__choices"
        aria-label="Selecionar set para o player"
      >
        {sets.map((set) => (
          <li className="set-player__choice" key={set.id}>
            <button
              className="set-player__button"
              type="button"
              aria-label={`Selecionar ${set.title} no player`}
              aria-pressed={selectedSet?.id === set.id}
              onClick={() => {
                setPlayerState({
                  status: "selected",
                  set,
                });
              }}
            >
              {set.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="set-player__media">
        {playerState.status === "error" && (
          <p
            className="set-player__fallback"
            role="alert"
          >
            {playerState.message}
          </p>
        )}

        {playerState.status === "selected" && (
          <>
            {playerState.set.platform === "youtube" ? (
              <YouTubePlayer
                key={playerState.set.id}
                title={playerState.set.title}
                providerId={playerState.set.providerId}
              />
            ) : (
              <SoundCloudPlayer
                key={playerState.set.id}
                title={playerState.set.title}
                providerId={playerState.set.providerId}
              />
            )}

            <p className="set-player__fallback">
              Se o player não carregar,{" "}
              <a
                href={playerState.set.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                ouça na plataforma original
              </a>
              .
            </p>
          </>
        )}
      </div>

      <style>{`
        .set-player {
          display: grid;
          gap: var(--space-6);
          padding-block: var(--space-6);
          border-block: 1px solid var(--color-line);
        }

        .set-player__header {
          display: grid;
          gap: var(--space-2);
        }

        .set-player__header h3 {
          font-size: var(--text-sm);
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .set-player__status {
          color: var(--color-muted);
          font-size: var(--text-sm);
        }

        .set-player__choices {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .set-player__button {
          padding: var(--space-2) var(--space-3);

          border: 1px solid var(--color-line);
          background: transparent;
          color: var(--color-ink);

          cursor: pointer;
          font-size: var(--text-xs);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .set-player__button:hover,
        .set-player__button[aria-pressed="true"] {
          background: var(--color-ink);
          color: var(--color-paper);
        }

        .set-player__media {
          min-width: 0;
        }

        .set-player__fallback {
          margin-top: var(--space-3);

          color: var(--color-muted);
          font-size: var(--text-sm);
        }

        .set-player__fallback a {
          color: var(--color-ink);
          text-decoration: underline;
          text-underline-offset: 0.15em;
        }
      `}</style>
    </section>
  );
}
