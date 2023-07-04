// 여러 개 선택 시 querySelectorAll을 사용함
const panels = document.querySelectorAll('.panel');

// 2. for in 반복문
for(var panel of panels) {
    panel.addEventListener('click', function() {
        removeAllActive();
        panel.classList.add('active');

    });
}

function removeAllActive() {
    for(var panel of panels) {
        panel.classList.remove('active');
    }
}