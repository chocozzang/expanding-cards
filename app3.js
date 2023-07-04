// 여러 개 선택 시 querySelectorAll을 사용함
const panels = document.querySelectorAll('.panel');

// 3. forEach 반복문
panels.forEach(function(item){
    item.addEventListener('click', function(){
        removeAllActive();
        item.classList.add('active');
    })
});

function removeAllActive() {
    panels.forEach(function(item){
        item.classList.remove('active');
    })
}