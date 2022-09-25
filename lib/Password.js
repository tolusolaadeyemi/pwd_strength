class Password {
    static checkStrength(password){
        try {
            let counter = 0
            if(/^(?=.*[a-z])/.test(password)){
                counter += 25
            }
            if(/^(?=.*[A-Z])/.test(password)){
                counter += 25
            }
            if(/^(?=.*[0-9])/.test(password)){
                counter += 25
            }
            if(/^(?=.*[$@#&!])/.test(password)){
                counter += 25
            }
            if( counter != 0 && password.length < 6){
                return('minimum password length is 6')
            }
            if( counter != 0 && password.length > 12){
                return('maximum password length is 12')
            }
           else{
                return(`password strength is ${counter}%`);
            }
        } catch (error) {
            console.log(error)
        }   
    }
}

module.exports = Password;