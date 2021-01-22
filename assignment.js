
// 1. kilometerToMeter js program starts here....


function kilometerToMeter(kilometer) {
    let lengthMeter = 0;
    if (kilometer < 0) {
        return invalid;
    }
    else {
        lengthMeter = kilometer * 1000;
    }
    return lengthMeter;
}

// kilometerToMeter js program ends here.


// 2. budgetCalculator js program starts here.....

function budgetCalculator(watch, phone, laptop) {
    var totalPrice = 0;
    if (watch < 0 || phone < 0 || laptop < 0) {
        return invalid;
    }
    else {
        var totalWatchPrice = watch * 50;
        var totalPhonePrice = phone * 100;
        var totalLaptopPrice = laptop * 500;
        totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    }
    return totalPrice;
}


// budgetCalculator js program ends here.


// 3. hotelCost js program starts here.....

function hotelCost(day) {
    var totalCost = 0;
    if (day < 0) {
        return invalid;
    }

    else if (day <= 10) {
        totalCost = day * 100;

    }
    else if (day <= 20) {
        var firstCost = 10 * 100;
        var reminingDay = day - 10;
        var secondCost = reminingDay * 80;
        totalCost = firstCost + secondCost;
    }
    else {
        firstCost = 10 * 100;
        secondCost = 10 * 80;
        reminingDay = day - 20;
        var thirdCost = reminingDay * 50;

        totalCost = firstCost + secondCost + thirdCost;

    }
    return totalCost;

}

// hotelCost js program ends here.


// 4. megaFriend js program starts here.....

function megaFriend(names) {
    var nameLength = 0;
    var friendsName = [];
    for (var i = 0; i < names.length; i++) {
        if (nameLength < names[i].length) {
            nameLength = names[i].length;
        }
    }
    for (var j = 0; j < names.length; j++) {
        if (names[j].length == nameLength) {
            friendsName.push(names[j]);
        }
    }
    if (friendsName.length == 1) {
        return friendsName[0];
    }
    else {
        return friendsName;
    }
}

// megaFriend js program ends here.

