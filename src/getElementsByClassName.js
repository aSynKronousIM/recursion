// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var docList = document.all;
  var resArray = [];

  console.log(docList);

  var re1 = new RegExp("(?:^|\\s)" + className + "(?:\\s|$)");
  for (var i = 0; i < docList.length; i++) {

    if (re1.test(docList[i].className))  {
      resArray[resArray.length] = docList[i];
    }

  //  if (docList[i].className === className)  {
  //    console.log("The element at index " + i + " is " + docList[i].className);
  //    console.log(String(docList[i].className));
  //    resArray[resArray.length] = docList[i];
  //  } else if (docList[i].className.length > className.length) {
  //    docList = docList[i].className.split(' ');
  //    console.log("docList2 is " + docList + " with length of " + docList.length);
  //    console.log("The element at index " + i + " is " + docList[i].className);
  //
  //    for (var j = 0; j < docList.length; j++) {
  //      if (docList[j] === className) {
  //        console.log(docList[j]);
  //        resArray[resArray.length] = docList[i];
  //      }
  //    }
  //  } else {
  //    console.log("The element at index " + i + " is " + docList[i].className);
  //  }
  //
  }

  return resArray;
};
