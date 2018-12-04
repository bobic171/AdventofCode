console.log("Calculate the frequency")



exports.frequencyEngine = function (values){
    let total = 0;

    values.forEach(element => {
        parseInt(element);
        total + element;
    });

    return total;
}