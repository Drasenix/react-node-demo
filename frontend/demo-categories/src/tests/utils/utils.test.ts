import { describe, it, expect } from "@jest/globals";
import { ignoreCaseAndAccent } from "../../utils/strings";

describe("remove accent and case sensitivity", () => {
  it("should remove accent", () => {
    // Given
    const tested: string = "tèstéd";
    // When
    const result: string = ignoreCaseAndAccent(tested);
    // Then
    expect(result).toEqual("tested");
  });

  it("should remove case sensitivity", () => {
    // Given
    const tested: string = "TeSTed";
    // When
    const result: string = ignoreCaseAndAccent(tested);
    // Then
    expect(result).toEqual("tested");
  });

  it("should handle undefined string", () => {
    // Given
    // When
    const result: string = ignoreCaseAndAccent(undefined);
    // Then
    expect(result).toEqual("");
  });
});
