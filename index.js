import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        type: "number",
        name: "NUMBER1",
        message: "Write your Number1:"
    },
    {
        type: "number",
        name: "NUMBER2",
        message: "Write your Number2:"
    },
    {
        type: "list",
        name: "Operator",
        message: "Select your operator",
        choices: ["+", "-", "*", "*"],
    },
]);
const { NUMBER1, NUMBER2, Operator } = answers;
if (NUMBER1 && NUMBER2 && Operator) {
    let result = 0;
    if (Operator === "+") {
        result = NUMBER1 + NUMBER2;
    }
    else if (Operator === "-") {
        result = NUMBER1 - NUMBER2;
    }
    else if (Operator === "*") {
        result = NUMBER1 * NUMBER2;
    }
    else if (Operator === "/") {
        result = NUMBER1 / NUMBER2;
    }
    console.log("Your result is: " + result);
}
else {
    console.log("Please select a valid selector");
}
