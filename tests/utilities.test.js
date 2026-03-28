import { generateFlightId } from "../src/utilities.js";

describe("generateFlightId", () => {

    test("should start with first two letters of airline", () => {
        const id = generateFlightId("Qantas");
        expect(id.startsWith("QA")).toBe(true);
    });

    test("should return uppercase letters", () => {
        const id = generateFlightId("jetstar");
        expect(id.substring(0, 2)).toBe("JE");
    });

    test("should return undefined for empty string", () => {
        const id = generateFlightId("");
        expect(id).toBeUndefined();
    });

    test("should return undefined for short airline name", () => {
        const id = generateFlightId("A");
        expect(id).toBeUndefined();
    });

});
