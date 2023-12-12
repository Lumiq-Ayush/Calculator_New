let string = "";
let buttons = document.querySelectorAll('.button');
let a = 0;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                // Evaluate the mathematical expression in the 'string' variable using the new Function constructor
                const result = new Function('return ' + string)();
                // Update 'string' with the result and display it in the input field
                string = result;
                document.querySelector('input').value = string;
                // Reset the operator count 'a'
                a = 0;
            } catch (error) {
                // Handle the error if the expression is invalid, e.g., display an error message.
                string = "";
                document.querySelector('input').value = "Error";
            }
        } else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
            a = 0;
        } else {
            console.log(e.target);
            if (e.target.innerHTML == '*' || e.target.innerHTML == '+' || e.target.innerHTML == '/' || e.target.innerHTML == '-') {
                // Check conditions for adding the operator to the 'string'
                if (a === 0 || ['*', '+', '/', '-'].indexOf(string[string.length - 1]) === -1) {
                     // Concatenate the operator to the 'string' and update the input field
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string;
                }
                a++;
            } else {
                 // If the clicked button is a digit or another character, add it to the 'string' and update the input field
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
    });
});

// let string = "";
// let buttons = document.querySelectorAll('.button');
// let a = 0;
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('input').value = string;
//             a = 0;
//         }

//         else if (e.target.innerHTML == 'C') {
//             string = "";
//             document.querySelector('input').value = string;
//             a = 0;
//         }
//         else {
//             console.log(e.target)
//             if (e.target.innerHTML == '*') {
//                 if (a == 0||string[string.length-1]!='*') {
//                     string = string + e.target.innerHTML;
//                     document.querySelector('input').value = string;
                   
//             } 
//             a++;       
//             }
//             else if (e.target.innerHTML == '+') {
//                     if (a == 0||string[string.length-1]!='+') {
//                         string = string + e.target.innerHTML;
//                         document.querySelector('input').value = string;
//                 }
//              a++;
//             }
//             else if (e.target.innerHTML == '/') {
//                 if (a == 0||string[string.length-1]!='/') {
//                     string = string + e.target.innerHTML;
//                     document.querySelector('input').value = string;
//             }
//          a++;
//         }else if (e.target.innerHTML == '-') {
//             if (a == 0||string[string.length-1]!='-') {
//                 string = string + e.target.innerHTML;
//                 document.querySelector('input').value = string;
//         }
//         a++;
//         }
//             else {
//                 string = string + e.target.innerHTML;
//                 document.querySelector('input').value = string;
//             }

//         }
//     })
// })