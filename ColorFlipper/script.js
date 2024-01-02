document.addEventListener('DOMContentLoaded',function(){
    const change=document.getElementById('change');
    const color=document.getElementById('color');
     const body=document.body;
    
    change.addEventListener('click',cbg);
    
    function cbg(){
        const col1=getRandomRGB();
        const col2=getRandomRGB();
        const col3=getRandomRGB();
    
        const colorString=`rgb(${col1},${col2},${col3})`;
        console.log(colorString);
        body.style.backgroundColor = colorString;
        color.innerHTML=colorString;
    }
    
    function getRandomRGB(){
        return Math.floor(Math.random()*256);
    }
    
});



