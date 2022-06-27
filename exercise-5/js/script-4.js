function century(year) {
    const vek = 100;
    let res; 
    if (year % vek === 0) {
        res = year / vek - 1;
    } else {
        res = year / vek;
    }
    return Math.floor(res) + 1;
}

century(1900);