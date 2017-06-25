//Functions

function print_result(testName,result) {
  if (result === true) {
    $('#passed-results').append(testName + ": passed!<br/>");
  }
  else {
  $('#failed-results').append(testName + ": failed!<br/>");
  }
}


function eachObjectHasAChildCalled(TypeTesting,responseObjectParent,testKey) {
    var samplesWithout = 0,
        samplesWith = 0;

    for(var i=0;i<responseObjectParent.length;i++) {
        if(!(!testKey)) {samplesWith++}
        else {samplesWithout++}
    }

    if(samplesWithout>0) {return false}
    else {return true }
}

function eachItemHasaChildWithRightTypeCalled(fieldTesting) {
    var timesRan = 0,
        sampleWith = 0;

loop1:
    for(i=0;i<response.menu.categories.length;i++) {

loop2:
        for(y=0;y<(response.menu.categories[i].category.items.length);y++) {
          if (typeof(response.menu.categories[i].category.items[y].item.fieldTesting) === schemaType.fieldTesting) {
            sampleWith++;
            timesRan++;
          }
        }
    }

    if(sampleWith === timesRan) {
        return true
    }
}


function doesKeyHaveAValue (key,ObjectTestedNickname) {
    if(key) {
      return true;
    } else return false;
}

function doesArrayContainChildren (array,ObjectTestedNickname) {
    if(array.length>0) {
      return true;
    } else return false;
}

function isRightType (responseObject,schemaObject) {
    var desiredType = schemaObject;
    var actualType;

    if(!responseObject) {
        actualType=desiredType; //We accept nills for every object with this logic.  Fix in future if needed.
    }
    if(Array.isArray(responseObject)) {
        actualType="array";
    }
    else if(typeof responseObject == "object") {
        actualType="object";
    }
    else if(typeof responseObject == "boolean") {
        actualType="boolean";
    }
    else if(typeof responseObject == "string") {
        actualType="string";
    }
    else if(typeof responseObject == "number") {
        actualType="number";
    }
    else {actualType=' This object type needs to be mapped!';
    }

    if (actualType == desiredType) {
          return true;
    } else return false;
}
