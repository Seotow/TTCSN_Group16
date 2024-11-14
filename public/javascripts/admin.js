const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const listItems = $$('.list-item')
for(const item of listItems){
    item.onclick = () => {
        $('.list-item.active').classList.remove('active')
        item.classList.add('active')
    }

}

document.querySelectorAll('.clickable-row').forEach(row => {
    row.addEventListener('click', function(e) {
        if(e.target.closest('button.approve-link') || e.target.closest('button.cancel-link') ) {
            return false;
        }
        window.location.href = this.dataset.href;
    });
});

// const toggle = $('.toggle')
// const navigation = $('.navigation')
// const main = $('.main')

// toggle.onclick = () => {
//     navigation.classList.toggle('active')
//     main.classList.toggle('active')
// }
