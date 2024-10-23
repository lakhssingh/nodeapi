import * as user from "../user";

describe("user handler", () => {
  it("shoudl create a new user", async () => {
    const req = { body: { username: "nitro", password: "1234" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };

    const newUser = await user.createNewUser(req, res, () => {});
  });
});
