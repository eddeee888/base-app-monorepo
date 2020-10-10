import convertDisplayName from "./convertDisplayName";

describe("convertDisplayName()", () => {
  it("should convert first name and last name to display name", () => {
    const result = convertDisplayName({ firstName: "Bart", lastName: "Simpsons" });
    expect(result).toBe("Bart S.");
  });
});
