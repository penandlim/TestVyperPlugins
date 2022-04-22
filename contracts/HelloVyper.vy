# @version 0.3.1

greeting: public(String[32]) # defining greeting state variable, just like Solidity

@external
def __init__(): # initialization function, same as Solidity's constructor function
    self.greeting = "Hello, World."
    
@external # function can be called internally and externally
@view # function will not change state
def printGreeting() -> String[32]:
    return self.greeting

@external
def setGreeting(_greeting: String[32]): # a state changing function
    self.greeting = _greeting