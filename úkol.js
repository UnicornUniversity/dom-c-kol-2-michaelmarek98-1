function convertBinaryToDecimal(binaryString) {
    let decimalValue = 0;
    let base = 1;

    for (let i = binaryString.length - 1; i >= 0; i--) {
        if (binaryString[i] === '1') {
            decimalValue += base;
        } else if (binaryString[i] !== '0') {
            return "Invalid binary input";
        }
        base = base * 2;
    }

    return decimalValue;
}

function convertDecimalToBinary(decimalNumber) {
    if (decimalNumber === 0) return "0";
    
    let binaryResult = "";
    let number = decimalNumber;

    while (number > 0) {
        let remainder = number % 2;
        binaryResult = remainder + binaryResult;
        number = (number - remainder) / 2;
    }

    return binaryResult;
}

const binaryInput = "1101";
const decimalResult = convertBinaryToDecimal(binaryInput);
console.log("Binary " + binaryInput + " to Decimal: " + decimalResult);

const decimalInput = 13;
const binaryResult = convertDecimalToBinary(decimalInput);
console.log("Decimal " + decimalInput + " to Binary: " + binaryResult);