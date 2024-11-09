function calculateAge() {
    var birthDate = new Date(document.getElementById("birthDate").value);
    var today = new Date();
    var ageYears = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    var dayDiff = today.getDate() - birthDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        ageYears--;
        monthDiff += 12;
    }

    if (dayDiff < 0) {
        monthDiff--;
        var temp = new Date(today.getFullYear(), today.getMonth(), 0);
        dayDiff += temp.getDate();
    }

    var ageMonths = monthDiff;
    var ageDays = dayDiff;

    document.getElementById("result").innerHTML = "عمرك هو: " + ageYears + " سنة و " + ageMonths + " شهر و " + ageDays + " يوم.";
}

function reset() {
    document.getElementById("birthDate").value = "";
    document.getElementById("result").innerHTML = "";
}
