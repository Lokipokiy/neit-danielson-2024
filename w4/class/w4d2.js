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

//ASSOCIATIVE ARRAY----------------------------------------------
var htmlColors = []
htmlColors[`zero`] = `Green`
htmlColors[`one`] = `Blue`
htmlColors[`two`] = `Blue`
htmlColors[`three`] = `Blue`
htmlColors[`four`] = `Orange`

//"FOR IN KEY" loop -- used for associtive arrays (and objects!)
for(var key in htmlColors){
   
    console.log(`INDEX ${key}: ${htmlColors[key]}`)
}


//OBJECTS--------------------------------------------------------
//key --> property ; can be reused across objects;
//use "dot syntax" object.property to access the value
var gds111_0 = {
    first: `Loki`,      //string type
    color: `green`,     //string type
    age: 20,            //number type
    hasPets: true,     //boolean type
    petNames: [`Arthur`, `Merlin`, `Polaris`, `Minerva`]
}

//access one value: object.property to access the value
//read like the POSESSIVE APOSTOPHE: gds111_0's first name
console.log(`gds11_0 name: ${gds111_0.first}`)

for(var key in gds111_0){
    console.log(`PROPERTY ${key}: ${gds111_0[key]}`)

    if(key == `hasPets`){
        
        if(gds111_0[key] == true){
            for(var i = 0; i <gds111_0.petNames.length; i++){
                console.log(`Pets#${i}: ${gds111_0.petNames[i]}`)
            }
        }
    }
}