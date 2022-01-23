const scrollFunc = () => {
    // const present = document.getElementById('present')
// const card = document.getElementById('card')
// const characteristics = document.getElementById('characteristics')
// const crossCell = document.getElementById('cross-sell')
//const reviews = document.getElementById('reviews')
//const delivery = document.getElementById('delivery-terms')

    const links = document.querySelectorAll('.header-menu__item a')

    seamless.polyfill();// библиотека для работы кода в браузеах Сафари

    links.forEach((element) =>{
        element.addEventListener('click', (event) => {
            event.preventDefault()

            const id = element.getAttribute('href').substring(1)
            const section = document.getElementById(id)

            if (section) {
                seamless.elementScrollIntoView(section, {
                    behavior: 'smooth',
                    block: 'start'
                })
            } else {
                seamless.elementScrollIntoView(document.querySelector("#target"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
            // if(id !== '#') {
            //     const section = document.querySelector(id)
            //     console.log(section)
            // } else {
            //     console.log('У элемента в href только #')
            // }
        })

    })

    const fullCharacteristics = document.querySelector('.card-details__link-characteristics')

    fullCharacteristics.addEventListener('click', () => {
        seamless.elementScrollIntoView(fullCharacteristics, {
            behavior: 'smooth',
            block: 'start'
        })
    })

}

scrollFunc()