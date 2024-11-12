function createNewUser()
{
       
       let firstName1 =prompt("твоє ім'я?");
       let lastName1 = prompt("твоя фамілія?");
       let birthday1 = prompt("коли ти народився?:")
   let newUser =
    {    firstName:firstName1,
        lastName: lastName1,
        birthday: birthday1,
        getLogin()
        {
            return(newUser.firstName[0].toLowerCase()+newUser.lastName.toLowerCase())
        },
        getAge: function() {
            const today = new Date();
            const birthDateParts = this.birthday.split('.');
            const birthDate = new Date(birthDateParts[2], birthDateParts[1] - 1, birthDateParts[0]);

            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();


            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            return age;
        },
        getPassword()
        {
            return (newUser.firstName[0].toUpperCase()+newUser.lastName.toLowerCase()+newUser.birthday.substring(6, 10))
        }
    };
    
   console.log("getLogin: " + newUser.getLogin());
   console.log("getAge: " + newUser.getAge()) ;
   console.log("getPassword: " + newUser.getPassword()) ;
}

createNewUser();
