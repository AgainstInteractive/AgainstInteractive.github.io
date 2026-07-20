var a = 1;
a = a + 1; 

if (a === 2) {
    console.log('check'); // This runs
} else if (a === 3) {
    const button = document.getElementById('buton');
    if (button) {
        button.addEventListener('click', function showSecret() {
            console.log("button enabled");
        });
    }
}

var b = 3;

if (a + b === 4) {
    const z = document.getElementById('buton');

    if (z) { 
        z.addEventListener('click', function showSecret() {
            console.clear();
            
            var f = 33; 
            var l = 2;
            f = f * l; 
            
          
            const cf2 = document.createElement("p"); 
            
            if (f === 33) {
                cf2.style.color = 'white';
                cf2.textContent = ".";
                document.body.appendChild(cf2);
            } 
            else if (f === 66) {
                cf2.style.color = 'black';
                cf2.textContent = ".";
                document.body.appendChild(cf2);
            }
            else if (f * l === 132) { 
                cf2.style.color = 'white';
                cf2.textContent = ".";
                document.body.appendChild(cf2);
            }
        });
    }
}
