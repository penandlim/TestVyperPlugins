pragma solidity 0.8.6;

contract HelloSolidity // defining the contract
{
    string greeting; // defining the state string variable 'greeting'
    
    constructor() // constructor function, optional, executed once upon deployment and cannot be called again
    public
    {
        greeting = "Hello, World.";
    }
    
    function printGreeting() // defining a function
    external // this function is callable by anyone 
    view // dictates that this function promises to not modify the state
    returns (string memory) // function returns a string variable from memory
    {
        return greeting;
    }
    
    function setGreeting(string memory _greeting)
    external 
    // notice that this function contains no "view" -- it modifies the state
    {
        greeting = _greeting;
    }
}