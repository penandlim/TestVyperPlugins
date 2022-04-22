import chai from "chai"
import { solidity } from "ethereum-waffle"
import { ethers } from "hardhat"
import { HelloSolidity, HelloSolidity__factory } from "../build/typechain/"

chai.use(solidity)
const { expect } = chai

describe("HelloSolidity", () => {
  let testContract: HelloSolidity

  beforeEach(async () => {
    const factory: HelloSolidity__factory = await ethers.getContractFactory("HelloSolidity")
    testContract = (await factory.deploy()) as HelloSolidity
  })

  describe("setGreeting", () => {
    it(`Sets and prints Greeting`, async () => {
      await testContract.setGreeting("solidity")
      expect(
        await testContract.printGreeting(),
      ).to.eq("solidity")
    })
  })
})
