import { translatePoints } from "./translatePoints";

it("should translate the points list", () => {
  // Given
  const points = [1, 0, 3, 2];
  const expextedResult = ["fifteen", "love", "forty", "thirty"];

  // When
  const translatedPoints = points.map(translatePoints);

  // Then
  expect(translatedPoints).toEqual(expextedResult);
});
