// scripts/a11y.js 


// Accessibility Modal
const accessibilityModal = document.getElementById('accessibilityModal');
accessibilityModal.innerHTML += 
`<dialog>
    <div>
        <h6>Text Adjustments</h6>
        <button id="textFontSize" class="button inverted">Increase Font Size</button>
        <button id="textLineHeight" class="button inverted">Increase Line Height</button>
    </div>
    <div>
        <h6>Color Adjustments</h6>
        <button id="colorInvert" class="button inverted">Invert</button>
        <button id="colorGrayscale" class="button inverted">Grayscale</button>
    </div>
</dialog>
<span id="accessibilityClose" class="accessibility__icon-close" tabindex="0"></span>`

const accessibilityModalButton = document.querySelector('.button__accessibility');
accessibilityModalButton.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
        accessibilityModal.classList.add('open');
    }
});

const accessibilityModalClose = document.getElementById('accessibilityClose')
accessibilityModalClose.addEventListener('keyup', function(event){
    if (event.code === 'Enter') {
        accessibilityModal.classList.remove('open')
    }
});

accessibilityModalClose.addEventListener('click', function(){
    accessibilityModal.classList.remove('open')
});

accessibilityModalButton.addEventListener('click', function(){
    var modal_is_open = accessibilityModal.classList.contains('open');
        modal_is_open ? accessibilityModal.classList.remove('open') : accessibilityModal.classList.add('open');
});

document.addEventListener("click", (e) => {
    const accessibilityModalButton = document.querySelector('.button__accessibility');
    let target = e.target;  
    do {
        if(target == accessibilityModalButton) {
            accessibilityModal.classList.add('open');
            return;
        }
        if(target == accessibilityModalClose) {
            accessibilityModal.classList.remove('open');
            return;
        }
        target = target.parentNode;
    }
    while (target);   
        accessibilityModal.classList.remove('open');
});

const fontSize = document.getElementById('textFontSize')
const lineHeight = document.getElementById('textLineHeight')
const colorInvert = document.getElementById('colorInvert')
const colorGreyscale = document.getElementById('colorGrayscale')

fontSize.addEventListener('click', function(){
    if(this.classList.contains('active') && localStorage.getItem('increaseFontSize')) {
        this.classList.remove('active');
        document.body.classList.remove('accessibility__increase__font-size');
        localStorage.setItem("increaseFontSize", 'false');
    }
    else {
        this.classList.add('active');
        document.body.classList.add('accessibility__increase__font-size');
        localStorage.setItem("increaseFontSize", 'true');
    }
});

lineHeight.addEventListener('click', function(){
    if(this.classList.contains('active') && localStorage.getItem('increaseLineHeight')) {
        this.classList.remove('active');
        document.body.classList.remove('accessibility__increase__line-height');
        localStorage.setItem("increaseLineHeight", 'false');
    }
    else {
        this.classList.add('active');
        document.body.classList.add('accessibility__increase__line-height');
        localStorage.setItem("increaseLineHeight", 'true');
    }
});

colorInvert.addEventListener('click', function(){
    if(this.classList.contains('active') && localStorage.getItem('colorInvert')) {
        this.classList.remove('active');
        document.body.classList.remove('accessibility__color__invert');
        localStorage.setItem("colorInvert", 'false');
    }
    else {
        this.classList.add('active');
        document.body.classList.add('accessibility__color__invert');
        localStorage.setItem("colorInvert", 'true');
    }
});

colorGreyscale.addEventListener('click', function(){
    if(this.classList.contains('active') && localStorage.getItem('colorGreyscale')) {
        this.classList.remove('active');
        document.body.classList.remove('accessibility__color__greyscale');
        localStorage.setItem("colorGreyscale", 'false');
    }
    else {
        this.classList.add('active');
        document.body.classList.add('accessibility__color__greyscale');
        localStorage.setItem("colorGreyscale", 'true');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem('increaseFontSize') === 'true') {
        fontSize.classList.add('active');
        document.body.classList.add('accessibility__increase__font-size');
    }
    if(localStorage.getItem('increaseLineHeight')  === 'true') {
        lineHeight.classList.add('active');
        document.body.classList.toggle('accessibility__increase__line-height');
    }
    if(localStorage.getItem('colorInvert')  === 'true') {
        colorInvert.classList.add('active');
        document.body.classList.toggle('accessibility__color__invert');
    }
    if(localStorage.getItem('colorGreyscale')  === 'true') {
        colorGreyscale.classList.add('active');
        document.body.classList.toggle('accessibility__color__greyscale');
    }
});