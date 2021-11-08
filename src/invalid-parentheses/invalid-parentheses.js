function numberOfInvalidParentheses(s) {
    const characters = s.split(''), 
          openingParenthese = '(',
          closingParenthese = ')';
    let total = 0, invalid = 0;

    for(i = 0; i < characters.length; i++) {
        if(characters[i] == openingParenthese) total++;
        else if (characters[i] == closingParenthese && total > 0) total--;
        else invalid++;
    }
    return total+invalid;
}

module.exports.numberOfInvalidParentheses = numberOfInvalidParentheses