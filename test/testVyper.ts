import chai from "chai"
import { solidity } from "ethereum-waffle"
import { ethers } from "hardhat"
import { HelloVyper, HelloVyper__factory } from "../build/typechain/"

chai.use(solidity)
const { expect } = chai

describe("HelloVyper", () => {
  let testContract: HelloVyper

  beforeEach(async () => {
    const factory: HelloVyper__factory = new HelloVyper__factory()
    testContract = (await factory.deploy()) as HelloVyper
  })

  describe("setGreeting", () => {
    it(`Sets and prints Greeting`, async () => {
      await testContract.setGreeting("vyper")
      expect(
        await testContract.printGreeting(),
      ).to.eq("vyper")
    })
  })
})
