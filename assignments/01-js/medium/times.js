/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const startTime = new Date().getTime();
    
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    
    const endTime = new Date().getTime();
    const timeInSeconds = (endTime - startTime) / 1000;
    
    console.log(`For n = ${n}:`);
    console.log(`Sum = ${sum}`);
    console.log(`Time taken: ${timeInSeconds} seconds`);
    console.log('------------------------');
    
    return timeInSeconds;
}

function calculateTimeWithPerformance(n) {
    const startTime = performance.now();
    
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    
    const endTime = performance.now();
    const timeInSeconds = (endTime - startTime) / 1000;
    
    console.log(`[Performance API] For n = ${n}:`);
    console.log(`Sum = ${sum}`);
    console.log(`Time taken: ${timeInSeconds.toFixed(6)} seconds`);
    console.log('------------------------');
    
    return timeInSeconds;
}

// Test cases
console.log('Running test cases...\n');
console.log('Using Date.getTime():');
calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);

console.log('\nUsing Performance API:');
calculateTimeWithPerformance(100);
calculateTimeWithPerformance(100000);
calculateTimeWithPerformance(1000000000);