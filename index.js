/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator(){
    if(process.argv.length < 3){  // Not adding anything since first two arguments are not numbers, they are strings
        return 'No operation provided...'

    } else if (process.argv.length < 4) { // 
        return "No numbers provided..."

    } else if (process.argv[2] === 'plus'){ 
        let total = 0 
        for (let i = 3; i < process.argv.length; i++){ // Looping to find if the operations strictly equals 'plus'
            total += Number (process.argv[i]) //
        }
        return total 

    } else if (process.argv[2] === 'minus'){
        let total = process.argv[3]
        for (let i = 4; i < process.argv.length; i++){
            total -= Number (process.argv[i])
        }
        return total
    } else {
        return `Invalid operation: modulo`
    }
}
// Don't change anything below this line.
module.exports = calculator;
