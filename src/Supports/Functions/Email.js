function EmailValidator(inputEmail){
    // Email dipisah @
    let emailSplit = inputEmail.split('@')

    if(emailSplit.length !== 2) return false
    let emailName = emailSplit[0]
    let hostingEmail = emailSplit[1]

    if(emailName[0] >= 0) return false

    let hostingEmailSplit = hostingEmail.split('.')

    if(hostingEmailSplit.length <=1 ) return false
    for(let i = 0; i < hostingEmailSplit.length; i++){
        if(hostingEmailSplit[i] === '' || hostingEmailSplit[i] === ' '){
            return false
        }
    }

    return true
}   

export default EmailValidator