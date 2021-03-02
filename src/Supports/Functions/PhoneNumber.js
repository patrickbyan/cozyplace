function PhoneNumberValidatior(inputPhoneNumber){
    if(inputPhoneNumber[0] !== '0'){
        return 'Nomor Harus Diawali Dengan 0'
    }

    if(inputPhoneNumber.length >= 9 && inputPhoneNumber.length <= 12){
        for(let i = 0; i < inputPhoneNumber.length; i++){
            if(!(inputPhoneNumber[i] >= 0)){
                return 'Nomor Harus Berupa Angka'
            }else if(inputPhoneNumber[i] === ' '){
                return 'Nomor Tanpa Spasi'
            }
        }
    }else{
        return 'Nomor Harus 9-12 Digit'
    }

    return true
}

export default PhoneNumberValidatior