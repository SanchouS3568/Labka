function createNewUser()
    {
           
           let firstName1 =prompt("твоє ім'я?");
           let lastName1 = prompt("твоя фамілія?");
       let newUser =
        {    firstName:firstName1,
            lastName: lastName1,
            getLogin()
            {
                return(newUser.firstName[0].toLowerCase()+newUser.lastName.toLowerCase())
            }
        };
    
       console.log(newUser.getLogin());
    }

    createNewUser();


 