var firstName = document.getElementById('first-name')
var sirName = document.getElementById('sir-name')
var eMail = document.getElementById('email')
var mobile = document.getElementById('mobile')
var message = document.getElementById('message')
var error = document.getElementById('error')

form.addEventListener('Send', (e) => {
    let message = []
    if (firstName.value === "" || firstName.value === null){
        message.push('First Name is required')
    } 
    if (sirName.value === "" || sirName.value === null){
        message.push('Sir Name is required')
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        error.innerText = message.join(', ')
    }
})
