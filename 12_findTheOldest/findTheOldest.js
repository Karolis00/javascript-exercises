const findTheOldest = function(arrOfPeople) {
    const currentYear = (new Date()).getFullYear();
    let oldest = arrOfPeople[0];
    if(!('yearOfDeath' in oldest)) oldest.yearOfDeath = currentYear;
    oldest.age = oldest.yearOfDeath - oldest.yearOfBirth;
    const ages = arrOfPeople.map(person =>{
        if(!('yearOfDeath' in person)) person.yearOfDeath = currentYear;
        person.age = person.yearOfDeath - person.yearOfBirth;
        if(person.age > oldest.age)
        {
            oldest = person;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
