
export function makeStatsString(headCount, middleCount, bottomCount) {

    // let headCount = 0;
    // let middleCount = 0;
    // let bottomCount = 0;


    // if (headCount === true) {
    //     headCount++
    // }
    // if (middleCount === true) {
    //     middleCount++
    // }
    // if (headCount < 0 || middleCount < 0 || bottomCount < 0) {
        
    //     return 'Negative Numbers are not possible'
    // } else {
        
    // }
    return (`You have changed the Head State: ${headCount >= 0 ? `${headCount} times ` : 'Negative Numbers are not possible'}
    Middle State: ${middleCount >= 0 ? `${middleCount} times ` : 'Negative Numbers are not possible'}
    Bottom State: ${bottomCount >= 0 ? `${bottomCount} times` : 'Negative Numbers are not possible'}
    And everybody loves your character's catchphrases:`);

// console.log(headCount);
}