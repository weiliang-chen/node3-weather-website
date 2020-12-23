const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value

    messageOne.textContent = "loading..."
    messageTwo.textContent = ''

    fetch('/weather?address='+ location).then((res) => {
    res.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = "It is " + data.forecast+" and currently " + ((data.temperature - 32)/9*5).toFixed(1) +" degree out. The humidity is " + data.humidity +" %."
        }
    })
  })
})