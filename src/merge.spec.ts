import { merge } from "./merge";

describe("merge()", () => {
  it("should merge and sort collections correctly", () => {
    expect(merge([5, 3, 1], [2, 4], [0, 6])).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(merge([3, 2, 1], [4, 5], [6, 7, 8])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
  });

  it("should handle empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([], [1], [])).toEqual([1]);
    expect(merge([3, 2, 1], [], [])).toEqual([1, 2, 3]);
  });

  it("should handle negative numbers", () => {
    expect(merge([3, 1], [-5, -2], [-1, 0])).toEqual([-5, -2, -1, 0, 1, 3]);
  });

  it("should handle duplicates", () => {
    expect(merge([2, 2, 2], [0, 0], [2])).toEqual([0, 0, 2, 2, 2, 2]);
  });
});
