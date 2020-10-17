// Sorting Algorithm Visualizer (currently implemented bubble sort)
// by Rohan Sachdeva

let values = [];

let x = 0;
let y = 0;

function setup() 
{
    createCanvas(windowWidth, windowHeight); // canvas to be width and height of window
    values = new Array(width);

  // Loop through values array and for each position assign a random number (simulating the height)
    for (let x = 0; x < values.length; x++) 
    {
        values[x] = random(height);
    }
}

function draw() 
{
    background(0); // set background color to black

    if (x < values.length)
    {
        for (let y = 0; y < values.length - x - 1; y++) // loop through 1 to length - x
        {
            let a = values[y]; // set a to current position in values array
            let b = values[y + 1]; // set b to next position in values array
            if (a > b) // a is greater than b, swap the two positions
            {
                swap(values, y, y + 1);
            }
        }
    } 
    else 
    {
        console.log('finished');
        noLoop();
    }
    x++; // increment x variable

    for (let x = 0; x < values.length; x++) 
    {
        stroke(255); // set stroke color to white
        line(x, height, x, height - values[x]); // draw each line
    }
}

// Swap function takes the array and two positions in the array and switches them
function swap(arr, a, b) 
{
  let temp = arr[a]; // temporary variable to hold value a
  arr[a] = arr[b]; // set value b to position a
  arr[b] = temp; // set value a to position b
}