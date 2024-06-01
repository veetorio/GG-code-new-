const bar = document.querySelectorAll('.pages');
const pages = bar[0].children

for (const iterator of pages) {
    iterator.addEventListener('click',(ev) => {
        redi(ev.target.dataset.page)
    })
}

function redi(ev) {
    if (ev === "home") {
        location.href = '../../../../index.html';
    } else {
        location.href = `./src/version/desktop/pages/${ev}-page.html`;
    }
}