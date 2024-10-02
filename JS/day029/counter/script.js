let count = 0;

function changeCount(num) {
    count += num;
    document.querySelector('#count').textContent = count;
}