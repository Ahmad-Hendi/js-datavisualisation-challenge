// alert("ok")


let dates = document.querySelectorAll("#table1 tbody tr")[0]
let lablesTableOne = []


Array.from(dates.children).forEach(function(date){
    if(date.innerText.length > 0){
        lablesTableOne.push(parseInt(date.innerText))
    }
});

let datasetsTableOne = []

dataset = Array.from(document.querySelectorAll("#table1 tbody tr"))
dataset.shift()

dataset.forEach(function(datas){
    let object = {} // pour chaque row il va créer un object 
    let arData = [] // pour créer un tableu vide
    data = Array.from(datas.children)
    data.shift()
    data.shift()
    data.forEach(function(element){
        arData.push(parseInt(element.innerText))
    })
    object.data = arData
    object.label = datas.children[1].innerText
    object.backgroundColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgb(157, 178, 20)',
        'rgb(157, 178, 20)',
        'rgb(219, 87, 33)',
        'rgb(39, 182, 183)',
        'rgb(39, 182, 183)',
        'rgb(225, 182, 201)',
        'rgb(154, 126, 85)'
    ];
    
    object.fill = false;
    datasetsTableOne.push(object)
    // console.log(datasetsTableOne)
})
    
    
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels:lablesTableOne,
      datasets: datasetsTableOne},
    options: {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
  });
  // end of the first Graph


let dataSetTableTwo = Array.from(document.querySelectorAll("#table2 tbody tr"))
let dataSetTable = [] 
dataSetTableTwo.shift()


dataSetTableTwo.forEach(function(elem){
  let obje = {} // pour chaque row il va créer un object 
  let arrayData = [] // pour créer un tableu vide
  data = Array.from(elem.children)
  data.shift()
  data.shift()
  data.forEach(function(elementTwo){
      arrayData.push(parseInt(elementTwo.innerText))
    })
    obje.data = arrayData
    obje.label = elem.children[1].innerText
    obje.backgroundColor = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235,1)'
  ];
    obje.fill = false;
    dataSetTable.push(obje)
    // console.log(dataSetTable)
    // console.log(arrayData)
})



                                            /* fetching Country FIRTS TRY */ 

// let country =  Array.from(document.querySelectorAll("#table2 tbody tr")) // creating an variable thta we will use to select the datats that we want 
// let countryArray = [] // creating an empty array to push(put) the data inside 

// country.forEach(function(elementCountry){
//   let newObject = {}
//   let newArray = []
//   countryChildren = Array.from(elementCountry.children)
//   countryChildren.shift()
//   countryChildren.pop()
//   countryChildren.pop()
//   countryChildren.forEach(function(elementCountryTwo){
//     newArray.push(elementCountryTwo.innerText)
//   })
//   newObject.data = newArray
//   countryArray.push(newArray)
//   // console.log(newArray)
//   // console.log(countryArray)

// })
  

                                            /* fetching Table2 SECOND TRY */ 

let countryTable = Array.from(document.querySelectorAll("#table2 tbody tr"))
let countryArray =[]

countryTable.forEach(function(tdCountry){
  countryArray.push(tdCountry.children[1].innerText)
  // console.log(countryArray)
})




// fetching the dataset of the table 2
let firstCol = document.querySelectorAll("#table2 tbody tr")
let SecondCol = document.querySelectorAll("#table2 tbody tr")

let firstArray = []
let secondArray = []
// console.log(firstCol)
// console.log(SecondCol)


countryTable.forEach(function(value){
  firstArray.push(parseInt(value.children[2].innerText))
  secondArray.push(parseInt(value.children[3].innerText))
})
// console.log(firstArray)
// console.log(secondArray)
  
// starting the second Graph
new Chart(document.getElementById("bar-chart-grouped"), {
  type: 'bar',
  data: {
    labels: countryArray,
    datasets: [
      {
        label: "2007-09",
        backgroundColor: "#3e95cd",
        data: firstArray
      }, {
        label: "2010-12",
        backgroundColor: "#8e5ea2",
        data: secondArray
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Population growth (millions)'
    }
  }
});
// end of the second Graph


// starting the third Graph CHART
new Chart(document.getElementById("line-chart2"), {
  type: 'line',
  data: {
    labels: data,
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Africa",
        borderColor: "red",
        fill: false
      }, 
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});
// end of the third Graph CHART




function startLiveUpdate(){
  
  setInterval(function(){
    
    let dataPoints = []
    fetch('https://canvasjs.com/services/data/datapoints.php')
    .then(response => response.json())
    .then((data) => {
        data.forEach(function(value) {
            dataPoints.push({ x: parseInt(value[0]), y: parseInt(value[1]) });
        });
        console.log(dataPoints)
        graf(dataPoints)
    })

   

  }, 5000)

}

// startLiveUpdate()

// document.addEventListener("DOMContentLoaded", function(){
//   startLiveUpdate();
// })

// let newData = []

// fetch("https://canvasjs.com/services/data/datapoints.php")
//     .then(response => response.json())
//     .then(data => {
//       newData.push(parseInt(data))
//       console.log(newData)
//     })









  
  




  












    
    
    

