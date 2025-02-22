function age() {
    let birthDate = Number(prompt('Enter Your Birth Year "e.g 2000"'));
    let currentYear = Number(prompt('Enter Your Birth Year "e.g 2025"'));
    let calculateAge = Number(currentYear - birthDate);

    if (calculateAge % 2 === 0) {
        alert("Your Age is : " + calculateAge + " Years" + "\nAge is Even");
    }
    else {
        alert("Your Age is : " + calculateAge + " Years" + "\nAge is Odd");
    }
}


