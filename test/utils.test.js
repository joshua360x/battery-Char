// IMPORT MODULES under test here:
import { makeStatsString } from '../utils.js';

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You have changed the Head State: 4 times 
    Middle State: 5 times 
    Bottom State: 1 times
    And everybody loves your character's catchphrases:`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(4, 5, 1);


    // Test 2 
    const expected1 = `You have changed the Head State: 0 times 
    Middle State: 0 times 
    Bottom State: 0 times
    And everybody loves your character's catchphrases:`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = makeStatsString(0, 0, 0);


    // Test 3
    const expected2 = `You have changed the Head State: 4 times 
    Middle State: 5 times 
    Bottom State: Negative Numbers are not possible
    And everybody loves your character's catchphrases:`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual2 = makeStatsString(4, 5, -1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});
