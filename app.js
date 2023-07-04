// 여러 개 선택 시 querySelectorAll을 사용함
const panels = document.querySelectorAll('.panel');

// 1. 정통적인 for문
for(let i = 0; i < panels.length; i++) {
    panels[i].addEventListener('click', function() {
        // 다른 클래스의 active를 먼저 지움
        removeAllActive();
        panels[i].classList.add('active');
    });
}

function removeAllActive() {
    for(let i = 0; i < panels.length; i++) {
        // 클래스의 active를 지움
        panels[i].classList.remove('active');
    }
}