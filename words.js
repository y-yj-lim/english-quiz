const words = [
    { word: "Anchor", meaning: "닻, 앵커", example: "The sailor dropped the anchor to stop the boat." },
    { word: "Flow", meaning: "흐름", example: "The river's flow was calm and steady." },
    { word: "Crisis", meaning: "위기", example: "The company faced a financial crisis last year." },
    { word: "Drought", meaning: "가뭄", example: "The crops died because of the long drought." },
    { word: "Check Out", meaning: "계산대", example: "Please pay for your items at the check out." },
    { word: "Layer", meaning: "겹", example: "Put another layer of cream on the cake." },
    { word: "Politeness", meaning: "정중함", example: "He spoke with politeness, even when he was angry." },
    { word: "Abandon", meaning: "버리다", example: "The mother cat abandoned her kittens." },
    { word: "Reach for", meaning: "손을 뻗다", example: "She reached for the book on the top shelf." },
    { word: "Favor", meaning: "배려, 부탁", example: "Can you do me a favor and close the window?" },
    { word: "Pack", meaning: "포장하다", example: "He packed his clothes into a suitcase." },
    { word: "Remind", meaning: "상기시키다", example: "Please remind me to call my friend later." },
    { word: "Stack", meaning: "쌓다", example: "She stacked the books neatly on the desk." },
    { word: "Flush", meaning: "얼굴을 붉히다", example: "He flushed when everyone looked at him." },
    { word: "Resume", meaning: "재개하다", example: "The meeting will resume after lunch." },
    { word: "Address", meaning: "주소", example: "Please write down your home address here." },
    { word: "Population", meaning: "인구", example: "The population of the city is growing rapidly." },
    { word: "Shortage", meaning: "부족", example: "There is a shortage of clean water in the village." },
    { word: "Normal", meaning: "정상의", example: "Everything seems normal after the repair." },
    { word: "Bitter", meaning: "쓴", example: "This medicine tastes very bitter." },
    { word: "Fade", meaning: "흐려지다", example: "The colors of the painting slowly faded over time." },
    { word: "Grab", meaning: "잡다", example: "He grabbed my hand to stop me from falling." },
    { word: "Firmly", meaning: "굳게", example: "She held his hand firmly and didn't let go." },
    { word: "Version", meaning: "판", example: "This is the latest version of the software." },
    { word: "Empty", meaning: "비어있는", example: "The box was completely empty." },
    { word: "Manage", meaning: "관리하다", example: "She manages a team of ten people at work." },
    { word: "Precious", meaning: "값비싼, 소중한", example: "This ring is very precious to me." },
    { word: "Hostility", meaning: "적개심", example: "There was clear hostility between the two rivals." },
    { word: "Displaced", meaning: "쫓겨난", example: "Many families were displaced by the flood." },
    { word: "Viral", meaning: "퍼뜨리다, 급속히 퍼지는", example: "The video went viral on social media." },
    { word: "Phenomenon", meaning: "현상", example: "The northern lights are a natural phenomenon." },
    { word: "Distributor", meaning: "배급자", example: "The company is a distributor of electronic goods." },
    { word: "Provocative", meaning: "도발적인", example: "His provocative comments angered the audience." },
    { word: "Stimulate", meaning: "자극하다", example: "This game will stimulate your brain." },
    { word: "Shelter", meaning: "대피소", example: "They found shelter from the storm in a cave." },
    { word: "Immediately", meaning: "즉시", example: "Call me immediately if you need help." },
    { word: "Astonished", meaning: "놀란", example: "She was astonished by the magician's trick." },
    { word: "Criticize", meaning: "비평, 비판하다", example: "He criticized my decision to quit my job." }
];
window.onload = () => {
    const wordListContainer = document.getElementById('word-list');
    words.forEach(word => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        wordItem.innerHTML = `
            <h4>${word.word}</h4>
            <p><strong>의미:</strong> ${word.meaning}</p>
            <p><strong>예문:</strong> ${word.example}</p>
        `;
        wordListContainer.appendChild(wordItem);
    });
};