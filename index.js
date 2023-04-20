function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(errand = "go to the office") {
    return `This Monday, I will ${errand}.`
}
 function wrapAdjective(string = "*") {
    return function(value2 = "special") {
        return `You are ${string}${value2}${string}!`;
    }
 }

 wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"