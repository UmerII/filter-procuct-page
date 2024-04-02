document.querySelectorAll('#filter_buttons .btn').forEach(button => {
    button.addEventListener('click' , ()=> {
        let filterName = button.getAttribute('data-name');

        document.querySelectorAll('#filter_cards .card').forEach(card=>{
            card.parentElement.style.display = 
            filterName === "all" || filterName === card.getAttribute('data-name') ?
            "block" : "none";
        })
    })
})