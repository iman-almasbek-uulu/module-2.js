// let str = "ddd@bbb@ccc";
// let newStr = str.replaceAll("@","!");
// console.log(newStr)

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    }else if (exam >= 75 && projects >= 5) {
        return 90;
    }else if (exam > 49 && projects > 1 ) {
        return 75;
    }else if (exam === 0 && projects > 2 || exam >  50 && projects === 0 ) {
        return 0;
    }else {
        return 0;
    }
}
console.log(finalGrade(50,2));

let r = 'fdsgsd';
console.log(r.slice(0,5))