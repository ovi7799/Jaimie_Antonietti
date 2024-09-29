const items = document.querySelectorAll('button');

items.forEach(item => item.addEventListener('click', function(){

    const itemToggle = this.getAttribute('aria-expanded');

    for(i = 0; i < items.length; i++){

        items[i].setAttribute('aria-expanded', 'false')

        if(itemToggle == 'false'){
            this.setAttribute('aria-expanded', 'true');
        }
    }
}))