const CODES = document.querySelectorAll('.code')

CODES[0].focus()

CODES.forEach((singleCode, position) => {
    singleCode.addEventListener("keydown", (e) => {
        if (e.key <= 9 && e.key >=0) {
            singleCode.style.borderColor = 'rgb(255, 242, 60)'
            CODES[position].value =''
            setTimeout(() => CODES[position + 1].focus(), 30)
        } else if (e.key == "Backspace") {
            singleCode.style.borderColor = ''
            setTimeout(() => CODES[position - 1].focus(), 30)
            singleCode.select()
        } else if (e.key !== /[0-9]/g) {
            CODES[position].value =''
            singleCode.style.borderColor = 'red'
        } 
    })

    singleCode.setAttribute('tabindex', '-1')
})