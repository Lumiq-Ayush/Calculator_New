let string = "";
let buttons = document.querySelectorAll('.button');
let a = 0;
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
            a = 0;
        }

        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
            a = 0;
        }
        else {
            console.log(e.target)
            if (e.target.innerHTML == '*') {
                if (a == 0||string[string.length-1]!='*') {
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string;
                   
            } 
            a++;       
            }
            else if (e.target.innerHTML == '+') {
                    if (a == 0||string[string.length-1]!='+') {
                        string = string + e.target.innerHTML;
                        document.querySelector('input').value = string;
                }
             a++;
            }
            else if (e.target.innerHTML == '/') {
                if (a == 0||string[string.length-1]!='/') {
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string;
            }
         a++;
        }else if (e.target.innerHTML == '-') {
            if (a == 0||string[string.length-1]!='-') {
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
        }
        a++;
        }
            else {
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }

        }
    })
})