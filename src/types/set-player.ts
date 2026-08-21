export type PlayerSet =
  | {
      id: string;
      title: string;
      platform: "youtube";
      providerId: string;
      url: string;
    }
  | {
      id: string;
      title: string;
      platform: "soundcloud";
      providerId: string;
      url: string;
    };

export type PlayerState =
  | { status: "idle" }
  | { status: "selected"; set: PlayerSet }
  | { status: "error"; set: PlayerSet; message: string };
