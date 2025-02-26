function age() {
    let birthDate = prompt('Enter Your Birth Year "e.g 2000"');
    if(!/^\d{4}$/.test(birthDate)){
        alert("Invalid Input! \nPlease Enter 4-digit numeric value!");
        return;
    }
    birthDate=Number(birthDate);


    let currentYear = prompt('Enter Current Year "e.g 2025"');
    if(!/^\d{4}$/.test(currentYear)){
        alert("Invalid Input! \nPlease Enter 4-digit numeric value!");
        return;
    }
    currentYear=Number(currentYear);
    let calculateAge = Number(currentYear - birthDate);
    if (calculateAge % 2 === 0) {
        alert("Your Age is : " + calculateAge + " Years" + "\nAge is Even");
    }
    else {
        alert("Your Age is : " + calculateAge + " Years" + "\nAge is Odd");
    }
}


