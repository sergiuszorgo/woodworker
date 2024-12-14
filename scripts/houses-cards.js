const inputs = document.querySelectorAll('.inp');
const images = document.querySelectorAll('.big');

inputs.forEach((el) => {
    el.addEventListener("click", (e) => {
        let a = Number(el.getAttribute("data-enter")) % 2 === 0 ? "Even" : "Odd";
        console.log(a);
        images.forEach((img) => {
            let b = Number(img.getAttribute("data-object")) % 2 === 0 ? "Even" : "Odd";
            if (a == b) {
                img.classList.add('visible');  
            }
            else {
                img.classList.remove('visible');
            }
        })
    })
})