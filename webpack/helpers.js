module.exports.randomInteger = (min, max) => {
    return Math.round((min + Math.random() * (max - min)));
}
