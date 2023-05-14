interface ISection {
  header: string;
  items: {
    id: string;
    icon: string;
    label: string;
    type: "range" | "toggle" | "link" | "play";
  }[];
}

export const SECTIONS: ISection[] = [
  {
    header: "Video Shot",
    items: [
      { id: "speed", icon: "fast-forward", label: "Speed", type: "range" },
      { id: "autoMode", icon: "edit", label: "Auto Mode", type: "toggle" },
      { id: "point", icon: "crosshair", label: "Point", type: "link" },
      { id: "autoLoop", icon: "repeat", label: "Auto Loop", type: "play" },
      {
        id: "autoStop",
        icon: "pause-circle",
        label: "Auto Stop",
        type: "play",
      },
    ],
  },
  {
    header: "Time Lapse",
    items: [
      { id: "darkMode", icon: "moon", label: "Dark Mode", type: "toggle" },
      { id: "wifi", icon: "wifi", label: "Use Wi-Fi", type: "toggle" },
    ],
  },
];
