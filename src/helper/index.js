export const checkStatus = (status, s) => {
  switch (status) {
    case "Dead":
      return s.dead;
    case "Alive":
      return s.alive;
    default:
      return s.unknown;
  }
};

export const checkStatusText = (status, s) => {
  switch (status) {
    case "Dead":
      return s.deadText;
    case "Alive":
      return s.aliveText;
    default:
      return s.unknownText;
  }
};
