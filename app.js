console.log("Name: " + "mc".toUpperCase())
console.log("Career: Career-Student")
console.log("Description: Artist")
console.log("")

console.log("My Interests: ")
console.log("* Music Production")
console.log("* Audio Engineering")
console.log("* Poetry")
console.log("* Photography")
console.log("")

console.log("My Previous Experience: ")
displayPosition("Full Stack Developer", "Innovate Birmingham", " Bootcamp Graduate - Actiive Alumi")
displayPosition("Office Administrator", "AgriOvum", "- Oversee day to day operations")
console.log("")

console.log("My Skills: ")
displaySkill("Piano", true)
displaySkill("Bass", true)
displaySkill("Computer Programming", false)



function displayPosition (companyName, jobTitle, description){
    console.log(jobTitle + ": " + companyName + " " + description)
}

function displaySkill (skillName, fire){
    if (fire === true) {
        console.log("BAM:" + skillName)
    } else {
        console.log(skillName)
    }
}



// displaySkill()