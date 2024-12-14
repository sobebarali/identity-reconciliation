import { describe, expect, test } from "vitest";
import { identify } from "./identify";

describe("identify", () => {
  test("should return the consolidated contact", async () => {
    const resp = await identify({
      email: "lorraine@hillvalley.edu",
      phoneNumber: "123456",
    });
    expect(resp.contact.primaryContactId).toBe(1);
    expect(resp.contact.emails).toEqual([
      "lorraine@hillvalley.edu",
      "mcfly@hillvalley.edu",
    ]);
    expect(resp.contact.phoneNumbers).toEqual(["123456"]);
    expect(resp.contact.secondaryContactIds).toEqual([23]);
  });
});
