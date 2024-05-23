function generatePassword(length) {
    let uppercaseCheckbox= document.getElementById("uppercase-input").checked;
    let lowercaseCheckbox= document.getElementById("lowercase-input").checked;
    let numbersCheckbox= document.getElementById("numbers-input").checked;
    let symbolsCheckbox= document.getElementById("symbols-input").checked;

    const upper= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower= 'abcdefghijklmnopqrstuvwxyz';
    const number= '0123456789';
    const symbols= '!@#$%^&*()_-+=?/,.<>';
    const upper_lower= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const lower_number= 'abcdefghijklmnopqrstuvwxyz0123456789';
    const lower_symbols= 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=?/,.<>';
    const upper_number= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const upper_symbols= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=?/,.<>';
    const upper_lower_number_symbols= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=?/,.<>';
    const upper_lower_number= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let password= "";

    if(uppercaseCheckbox==true && lowercaseCheckbox== false && numbersCheckbox==false && symbolsCheckbox== false) {
        const charactersLength= upper.length;
        for(let i=0; i<length; i++) {
            password= password + upper.charAt(Math.random()* charactersLength)
        }
    }

    else if(lowercaseCheckbox== true && uppercaseCheckbox== false && numbersCheckbox== false && symbolsCheckbox== false) {
        const charactersLength= lower.length;
        for(let i=0; i<length; i++) {
            password= password + lower.charAt(Math.random()* charactersLength)
        }
    }

    return password;
}





function generate() {
    let garums= document.getElementById("length-input").value;

    let password="";
    
    if(garums < 8) {
        alert("Parolei jābūt vismaz 8 simboliem")
    } else {
        password= generatePassword(garums)
        document.getElementById("password-output").innerText= password;

    }
}