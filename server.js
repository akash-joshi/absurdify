const absurdify = (input) => {
    out = []
    for( i=0 ; i<input.length; i++){
        const chosenValue = Math.random() < 0.5 ? 0 : 1;
        out[i] = chosenValue == 0 ? input.charAt(i).toLowerCase() : input.charAt(i).toUpperCase();
    }
    return out.join('');
}

module.exports = absurdify;