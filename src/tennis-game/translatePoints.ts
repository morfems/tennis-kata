export const translatePoints = (score: number): string => {
  const points = {
    0: "love",
    1: "fifteen",
    2: "thirty",
    3: "forty",
  } as {
    [key: number]: string;
  };

  return points[score];
};
