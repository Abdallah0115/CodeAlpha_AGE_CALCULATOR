//function calculating age given brithdate

function ageCalculator(birth){
    birthdate = new Date(birth)

    now = new Date()

    diffrence = now - birthdate

    if(diffrence < 0)
        return "Not valid bith date your input larger than date today "

    cooficient = 1000 * 60 * 60 * 24

    ageInDays = diffrence / cooficient

    ageYears = ageInDays / 365

    ageInDays = ageInDays % 365

    ageMonth = ageInDays / 30

    ageDays = ageInDays % 30

    return `Age : ${Math.floor(ageYears)} Years and ${Math.floor(ageMonth)} Months and ${Math.floor(ageDays)} Days`
}

//dom things dealing with

function handle(){
    birth = document.getElementById("bith-date-id").value

    age = ageCalculator(birth)

    document.getElementById("result").innerHTML = age
}

btn = document.getElementById("press")

btn.addEventListener('click',handle)