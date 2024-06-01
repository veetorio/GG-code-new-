const bar = document.querySelectorAll('.pages');
const pages = bar[0].children

for (const iterator of pages) {
    console.log(iterator.dataset.page)
    iterator.addEventListener('click',(ev) => {
        const page = ev.target.dataset.page
        redi(page)
    })
}

function redi(ev) {
    if (ev === "index") {
        location.href = '../../../../home/index.html';
    } else {
        location.href = `../pages/${ev}-page.html`;
    }
}