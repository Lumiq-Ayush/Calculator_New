let string = "";
let buttons = document.querySelectorAll('.button');
let a = 0;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                const result = new Function('return ' + string)();
                string = result;
                document.querySelector('input').value = string;
                a = 0;
            } catch (error) {
                // Handle the error, e.g., display an error message.
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
                if (a === 0 || ['*', '+', '/', '-'].indexOf(string[string.length - 1]) === -1) {
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string;
                }
                a++;
            } else {
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