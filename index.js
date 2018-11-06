class Tabs {
    constructor(element) {
        this.element = element;
        
        element.addEventListener('click', () => {
            
            let tabbed = document.querySelectorAll('.tab');
            
            tabbed = Array.from(tabbed);
            
            for (let i = 0; i<tabbed.length; i++) {
                tabbed[i].classList.remove('tabbed');
            }

            this.element.classList.add('tabbed');

            document.querySelector('.current').innerHTML = this.element.innerHTML;
           });
    }
}

let pic = 0;
let tabs = document.querySelectorAll('.tab');

Array.from(tabs).map((tab, i) => {
    document.querySelector('.pic').classList.add(`pic-`+pic)
    {tab.addEventListener('click', () => {
        document.querySelector('.pic').classList.remove(`pic-`+pic)
        pic = i
        document.querySelector('.pic').classList.add(`pic-`+pic)
    })}
})


tabs = Array.from(tabs).map( tab => new Tabs(tab));
