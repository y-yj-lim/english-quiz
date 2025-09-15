// 스크롤 부드럽게 이동하는 기능
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // 헤더 높이 고려
                behavior: 'smooth'
            });
        }
    });
});

// 단어 데이터 로드 및 렌더링
window.onload = () => {
    const wordListContainer = document.getElementById('word-list');
    if (typeof words !== 'undefined') {
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
    }

    // 더보기/접기 기능
    const toggleButton = document.getElementById('toggle-words');
    const wordList = document.getElementById('word-list');

    toggleButton.addEventListener('click', () => {
        const isExpanded = wordList.classList.toggle('expanded');
        toggleButton.textContent = isExpanded ? '접기' : '더보기';
    });
};