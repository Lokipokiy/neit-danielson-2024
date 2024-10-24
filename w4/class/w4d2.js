//W4D2 demo - External JS File - Data Structures

/*variable - smallest data storage device
ONE name --> ONE value --------*/
var name = `Katie`

//Data Structures: ONE name --> MANY values
//key + value pair - need name & key to access values

//ARRAYS---------------------------------------------------------
//key --> [INDEX] start @ 0, whole #'s, positive
var htmlNames = [
    `Loki`,         //index:0
    `Abigail`,      //index:1
    `Andrew`,       //index:2
]

//access on value: name + key --> htmlNames[#]
console.log(`INDEX 0: ${htmlNames[0]}`)

//add a new name to the array using the next index intager
htmlNames[3]=`Wolfy`

//add a new name to the array using the .push()
htmlNames.push(`Max`) //auto does this

//BATCH PROCESSING: "do the same to all"
//repeat --> loop | array --> for loop
for(var i = 0; i < htmlNames.length; i++){
   
    console.log(`INDEX ${i}: ${htmlNames[i]}`)
}
