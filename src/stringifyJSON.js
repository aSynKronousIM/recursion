// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  var tempArr = [];


  if (obj === null) {
    console.log('Condition 1 is ' + (obj === null));
    return 'null';
  }

  if (typeof obj === 'boolean') {
    console.log('Condition 2 is ' + (typeof obj === 'boolean'));
    return String(obj);
  }

  if (typeof obj === 'string') {
    console.log('Condition 3 is ' + (typeof obj === 'string'));
    return '"' + obj + '"';
  }

  if (typeof obj === 'number') {
    console.log("Condition 4 is " + (typeof obj === 'number'));
    console.log(typeof obj + ' is a number');
    return String(obj);
  }

  if (typeof obj === 'function' || typeof obj === 'undefined') {
    console.log("Condition 5 is " + (typeof obj === 'function' || typeof obj === 'undefined'));
    console.log(obj + ' is a function or undefined');
    return;
  }

  if (Array.isArray(obj)) {

    if (obj.length === 0) {
      return '[]';
    }

    for (var i = 0; i < obj.length; i++) {
      tempArr[i] = stringifyJSON(obj[i]);
      console.log('[' + tempArr.join(',') + ']');
    }

    return String('[' + tempArr.join(',') + ']');
  } else {

    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined'){
        return '{}';
      }

      if (obj.hasOwnProperty(key)) {
        tempArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        console.log(String("'{" + tempArr + "}'"));
      }
    }
    return String("{" + tempArr + "}");
  }

};
