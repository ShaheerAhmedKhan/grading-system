function percentage(num) {
    var total = 500;
    var ok = num / total * 100;
    if (ok >= 80) {
        console.log("you got A1-grade.");
    }
    else if (ok >= 70) {
        console.log("you got A-grade.");
    }
    else if (ok >= 60) {
        console.log("you got B-grade.");
    }
    else {
        console.log("you are fail");
    }
    return ok;
}
var marks = percentage(400);
console.log(marks);
