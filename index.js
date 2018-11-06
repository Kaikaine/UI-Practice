
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

            
           });
    }
}


let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map( tab => new Tabs(tab));

// let img = document.querySelectorAll('.service-img');
// img = Array.from(img);