// Write your solution in this file!
let employee = {};

function updateEmployeeWithKeyAndValue(employee, s,end){
    let copy = {...employee}
    copy[s] = end
    return copy
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, s, end){
    employee[s] = end
    return(employee)
}

function deleteFromEmployeeByKey(employee, s){
    let copy = {...employee}
    delete(copy[s])
    return copy
}

function destructivelyDeleteFromEmployeeByKey(employee, s){
    delete(employee[s])
    return employee
}