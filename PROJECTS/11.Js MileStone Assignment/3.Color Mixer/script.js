function colorMix() {
    color1=document.getElementById('color1').value;
    color2=document.getElementById('color2').value;

    colorMixer(color1,color2);
    
}


function colorMixer(color1,color2) {
    if((color1=='red' && color2=='blue') || (color1=='blue' && color2=='red'))
    {
        console.log("Mixed Color is Purple");
        document.getElementById('mixedColor').value="Mixed Color is Purple";
    }
    else if((color1=='red' && color2=='yellow') || (color1=='yellow' && color2=='red'))
    {
        console.log("Mixed Color is Orange");
        document.getElementById('mixedColor').value="Mixed Color is Orange";
    }
    else  if((color1=='yellow' && color2=='blue') || (color1=='blue' && color2=='yellow'))
    {
        console.log("Mixed Color is green");
        document.getElementById('mixedColor').value="Mixed Color is green";
    }
    else {
        console.log("Invalid Color Combination");
        document.getElementById('mixedColor').value="Invalid Color Combination";
    }
}