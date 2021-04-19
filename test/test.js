const expect = chai.expect,
  testnums = [1, 2, 3, 1, 1, 3];

describe("NumIdentialPairs", () => {
  it("Return the number of good pairs.", () => {
    expect(numIdenticalPairs(testnums)).to.equal(
      4,
      "Please check your function!"
    );
  });
});
