const refs = {
    link: document.querySelector('.link-footer'),
    modal: document.querySelector('.overlay'),
    btn:document.querySelector('.btn')
}
refs.link.addEventListener('click', openModal);
refs.btn.addEventListener('click',closeModal)
function openModal() {
    refs.modal.classList.remove('is-hidden')
    console.log("click link");
}
function closeModal() {
     refs.modal.classList.add('is-hidden')
}