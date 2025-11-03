function fizzBuzz(n) {
    // The parameter 'n' is the upper limit, so we loop up to 'n'.
    for(let i=1; i<=n; i++) {
        let output = "";
        //01 
        if(i%3===0){
            output += "Fizz";
        }
        // 02
        if(i%5===0){
            output += "Buzz";
        }
        //03 print output
        if(output){
            console.log(output);
        }else{
            console.log(i);
        }
    }
    }

// The original code had a redundant call to fizzBuzz(15) outside of main, which is removed.
function main() {
    // Assuming the input is a single line containing the integer n
    const n = parseInt(15);
    fizzBuzz(n);
}
main();