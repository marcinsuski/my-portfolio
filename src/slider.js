// skills slider

const sliderTitles = document.querySelector('.slider__title');
const sliderTitle = document.querySelectorAll('.slider__title-item');
const languages = document.getElementById('languages');
const frameworks = document.getElementById('frameworks');
const tools = document.getElementById('tools');
const other = document.getElementById('other');

const sliderContent = document.querySelectorAll('.slider-content__item')
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const item4 = document.querySelector('.item-4');

function changeTitle(e) {

    const title = e.target.innerText;
    sliderTitle.forEach(item => {
        
        item.classList.remove('active');
        item.innerText === title && item.classList.add('active')
        item.innerText === 'Languages' 
        && item1.classList.add('active')
  



      
      
    //    item.innerText === 'Frameworks' && item2.classList.add('active')
        // item.innerText !== 'Tools' && item.classList.remove('active') && item3.classList.add('active')
        // item.innerText !== 'Other skills' && item.classList.remove('active') && item4.classList.add('active')
    });
    };



sliderTitle.forEach(title => {
    title.addEventListener('click', changeTitle);
}) 

// sliderTitles.addEventListener('click', () => {console.log('clicked')});