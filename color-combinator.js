/******************
 * YOUR CODE HERE *
 ******************/
function colorCombinator(col1, col2) {
  if ((col1 === 'red' && col2 === 'yellow') || (col1 === 'yellow' && col2 === 'red')) {
    return 'orange'
  } else if ((col1 === 'red' && col2 === 'blue') || (col1 === 'blue' && col2 === 'red')) {
    return 'purple'
  } else if ((col1 === 'yellow' && col2 === 'blue') || (col1 === 'blue' && col2 === 'yellow')) {
    return 'green'
  }
}



// Our setup code here. Don't touch!
if (typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
