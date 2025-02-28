let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'cyan', 'lime'];
let targetColor;


let hints = {
    red: "मैं वह रंग हूँ जो रात को अक्सर दिखाई देता हूँ, और शबनम के बाद भी मुझे देखा जा सकता है।",
    blue: "मैं हमेशा दिन में ऊपर दिखाई देता हूँ, और आसमान का रंग हूँ।",
    green: "मुझे ज़मीन पर हमेशा देखा जा सकता है, मैं तो पौधों का रंग हूँ!",
    yellow: "मुझे सूरज की रोशनी के साथ देखा जाता है, मैं धूप का रंग हूँ।",
    purple: "मैं एक रंग हूँ जो फूलों और रंगोली में अक्सर दिखाई देता हूँ, और कभी रात के अंधेरे में भी चमकता हूँ।",
    orange: "मुझे आमतौर पर फलों में देखा जाता है, मैं एक मीठा और खट्टा रंग हूँ।",
    pink: "मैं एक रंग हूँ जिससे नाम भी रखा जाता है, मैं अक्सर गुलाबों का रंग हूँ।",
    brown: "मुझे ज़मीन, मिट्टी और लकड़ी में देखा जाता है, मैं एक पृथ्वी जैसा रंग हूँ।",
    cyan: "मैं एक ठंडा और ताज़ा रंग हूँ, जो समुद्र और दरिया का रंग हूँ।",
    lime: "मुझे हमेशा पेड़-पौधों और घास में देखा जाता है, मैं हल्का हरा रंग हूँ।",
};


function startGame() {

    targetColor = colors[Math.floor(Math.random() * colors.length)];

  
    document.getElementById('hint').innerText = `Hint: ${hints[targetColor]}`;


  let gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; 
    let colorOptions = [...colors];
    colorOptions = colorOptions.sort(() => Math.random() - 0.5);


    for (let i = 0; i < 16; i++) {
        let color = colorOptions[i % colorOptions.length];
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.style.backgroundColor = color;
        gridItem.addEventListener('click', function() {
            checkColor(color);
        });
        gridContainer.appendChild(gridItem);
    }
}


function checkColor(selectedColor) {
    if (selectedColor === targetColor) {
        window.location.href = "win.html"; ;
    } else {
        window.location.href = "lose.html"; 
    }
}

document.getElementById('restartButton').addEventListener('click', function() {
    startGame();
});


startGame();