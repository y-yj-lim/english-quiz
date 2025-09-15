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

// 더보기/접기 기능
const toggleButton = document.getElementById('toggle-words');
const wordList = document.getElementById('word-list');

toggleButton.addEventListener('click', () => {
    if (wordList.style.maxHeight === '300px' || wordList.style.maxHeight === '') {
        wordList.style.maxHeight = wordList.scrollHeight + 'px';
        toggleButton.textContent = '접기';
    } else {
        wordList.style.maxHeight = '300px';
        toggleButton.textContent = '더보기';
    }
});