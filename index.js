//start of 'open upload.html'
const BrowserWindow = require("electron").remote.BrowserWindow;
const path = require("path");
const url = require('url');

const newWindowBtn = document.getElementById('newWindowButton');
newWindowBtn.addEventListener('click', function(event){
    let win2 = new BrowserWindow({
        webPreferences: {
            nodeIntegration:true
        }
    });
    win2.loadURL(url.format({
        pathname: path.join(__dirname, 'upload.html'),
        protocol: 'file',
        slashes: true
    }));
    win2.webContents.openDevTools();
})
//end of 'open upload.html'

//declaration of global variables

document.getElementById('show-details').style.visibility = "hidden";
document.getElementById('back').style.visibility = "hidden";
document.getElementById('number-Area').style.visibility = "hidden";
document.getElementById('ticketID').style.visibility = "hidden";
document.getElementById('ticket').style.visibility = "hidden";

//start of 'view file button'
document.getElementById('viewfile').addEventListener('click', () => {
    //start of 'import file button'
    Papa.parse(document.getElementById('inputfile').files[0], {
        header: false,
        skipEmptyLines:true,
        complete: function(results)
        {
            //display results in nested loop or 2d array form
            for(var i = 1; i < results.data.length; i++)
            {
                for(var j = 1; j < results.data[i].length; j++)
                {
                    //console.log(results.data[i][j]);
                    //document.write(results.data[i][j] + " "); 
                    //console.log(results.data[i][2]);
                }
                //document.write("</br>");
                //create for loop and loop through 3 column array of 2D array
                for(var r = 0; r < 1; r++)
                {
                    //console.log(results.data[i][2]);
                    //console.log(results.data[i][2]);
                    //document.write(results.data[i][2]);
                    //document.write("</br>");
                }
                //console.log(results.data[i, 2]);
            }

            document.getElementById('readyButtons').addEventListener('click', () => 
            {
                if(!timer)
                {  
                    timer = setInterval(run, 100);
                }
                conditionNumber += 1;
            })
            
            document.getElementById('selectButtons').addEventListener('click', () => 
            {              
                // document.getElementById('gameButtons').style.display = "hidden"
                // document.getElementById('detailButtons').style.display = "visible";

                if(conditionNumber == 1)
                {
                    document.getElementById('number-Area').style.visibility = "visible";
                    document.getElementById('count-group2').style.visibility = "hidden";
                    document.getElementById('dummy-number').style.visibility = "hidden";
                    var alternateResult2 = results.data[20][2].slice(0, 7);
                    document.getElementById('number-Area').innerHTML = alternateResult2;

                        document.getElementById('detailButtons').addEventListener('click', () => 
                        {
                            var alternateResult2 = results.data[20][2];
                            document.getElementById('ticketID').style.visibility = "visible";
                            document.getElementById('ticket').style.visibility = "visible";
                            document.getElementById('ticketID').innerHTML ="Ticket ID: " + results.data[20][0];
                            document.getElementById('ticket').innerHTML = "Ticket: " + results.data[20][1];

                            document.getElementById('number-Area').innerHTML = alternateResult2;
                                document.getElementById('detailButtons').style.visibility = "hidden";
                                document.getElementById('back').style.visibility = "visible";

                                    document.getElementById('backButtons').addEventListener('click', () => 
                                    {
                                        document.getElementById('backButtons').style.visibility = "hidden";
                                        document.getElementById('gameButtons').style.visibility = "visible";
                                        document.getElementById('number-Area').style.visibility = "hidden";
                                        document.getElementById('count-group2').style.visibility = "visible";
                                        document.getElementById('dummy-number').style.visibility = "visible";
                                        document.querySelector('.counter1').innerHTML = '-'
                                        document.querySelector('.counter2').innerHTML = '-'
                                        document.querySelector('.counter3').innerHTML = '-'
                                        document.querySelector('.counter4').innerHTML = '-'
                                        document.getElementById('ticketID').style.visibility = "hidden";
                                        document.getElementById('ticket').style.visibility = "hidden";
                                    })
                        })
                }

                if(conditionNumber == 2)
                {
                    document.getElementById('number-Area').style.visibility = "visible";
                    document.getElementById('count-group2').style.visibility = "hidden";
                    document.getElementById('dummy-number').style.visibility = "hidden";
                    var alternateResult2 = results.data[10][2].slice(0, 7);
                    document.getElementById('number-Area').innerHTML = alternateResult2;

                        document.getElementById('detailButtons').addEventListener('click', () => 
                        {
                            var alternateResult2 = results.data[10][2];
                            document.getElementById('ticketID').innerHTML ="Ticket ID: " + results.data[10][0];
                            document.getElementById('ticket').innerHTML ="Ticket: " + results.data[10][1];

                            document.getElementById('number-Area').innerHTML = alternateResult2;
                            
                                document.getElementById('detailButtons').style.visibility = "hidden";
                                document.getElementById('backButtons').style.visibility = "visible";

                                    // document.getElementById('backButtons').addEventListener('click', () => {
                                    //     document.getElementById('backButtons').style.visibility = "hidden";
                                    //     document.getElementById('gameButtons').style.visibility = "visible";
                                    //     document.getElementById('number-Area').style.visibility = "hidden";
                                    //     document.getElementById('count-group2').style.visibility = "visible";
                                    //     document.getElementById('dummy-number').style.visibility = "visible";
                                    // })
                        })
                }

                if(conditionNumber >= 3)
                {
                    var rand = Math.floor(Math.random() * results.data.length);
                    if(rand == 0)
                    {
                        rand = Math.floor(Math.random() * results.data.length);
                    }
                    var idx = 2;
                    var idx1 = 1;
                    var idx2 = 0;

                    var key = Object.keys(results.data[rand])[idx];
                    var key1 = Object.keys(results.data[rand])[idx1];
                    var key2 = Object.keys(results.data[rand])[idx2];

                    document.getElementById('number-Area').style.visibility = "visible";
                    document.getElementById('count-group2').style.visibility = "hidden";
                    document.getElementById('dummy-number').style.visibility = "hidden";
                    randomResult = results.data[rand][key].slice(0, 7);
                    document.getElementById('number-Area').innerHTML = randomResult;

                        document.getElementById('detailButtons').addEventListener('click', () => {
                            var randomResult = results.data[rand][key];
                            document.getElementById('ticketID').innerHTML = "Ticket ID: " + results.data[rand][key2];
                            document.getElementById('ticket').innerHTML = "Ticket: " + results.data[rand][key1];
                            // console.log(results.data[rand][key1]);
                            // console.log(results.data[rand][key2]);
                            document.getElementById('number-Area').innerHTML = randomResult;
                            
                                document.getElementById('detailButtons').style.visibility = "hidden";
                                document.getElementById('backButtons').style.visibility = "visible";

                                    // document.getElementById('backButtons').addEventListener('click', () => {
                                    //     document.getElementById('backButtons').style.visibility = "hidden";
                                    //     document.getElementById('gameButtons').style.visibility = "visible";
                                    //     document.getElementById('number-Area').style.visibility = "hidden";
                                    //     document.getElementById('count-group2').style.visibility = "visible";
                                    //     document.getElementById('dummy-number').style.visibility = "visible";
                                    // })
                        })
                }

            })

            //console.log(results.data[2].MSISDN);
            //console.log(results.data);
            //  var randomItem = results.data[Math.floor(Math.random() * results.data.length)];
            // console.log(randomItem);
        }
    });
})


//start of rotation of ready button numbers on click of ready button
var ms1 = 0;
var ms2 = 9;
var ms3 = 5;
var ms4 = 3;
var timer;

var stopwatch1 = document.querySelector('.counter1');
var stopwatch2 = document.querySelector('.counter2');
var stopwatch3 = document.querySelector('.counter3');
var stopwatch4 = document.querySelector('.counter4');


function asda(){
   
        console.log('Its zero');
}
document.getElementById('selectButtons').addEventListener('click', () => {              
    document.getElementById('gameButtons').style.visibility = "hidden"
    document.getElementById('detailButtons').style.visibility = "visible";

    if(conditionNumber == 0)
    {
        console.log('Its zero');
    }
})

function run(){
    stopwatch1.textContent = ms1;
    stopwatch2.textContent = ms2;
    stopwatch3.textContent = ms3;
    stopwatch4.textContent = ms4;
    ms1++;
    ms2--;
    ms3--;
    ms4++;
    if(ms1 === 9)
    {
        ms1 = 0;
    }
    if(ms2 === 0)
    {
        ms2 = 9;
    }
    if(ms3 === 0)
    {
        ms3 = 9;
    }
    if(ms4 === 9)
    {
        ms4 = 0;
    }
    
}//end of rotation of ready button numbers on click of ready button

function pause(){
    clearInterval(timer);
    timer = false;
    // document.getElementById('number-Area').style.visibility = "visible";
    // document.getElementById('count-group1').style.visibility = "hidden";
}

function restart(){
    document.getElementById('number-Area').style.visibility = "hidden";
    document.getElementById('count-group1').style.visibility = "visible";    
}
var conditionNumber = 0;
