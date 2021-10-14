const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonLeft = e.target.offsetLeft
        const buttonTop = e.target.offsetTop

        const xIncide = x - buttonLeft
        const yIncide = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.left = xIncide + 'px'
        circle.style.top = yIncide + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})