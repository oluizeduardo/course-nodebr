// Get a user.
// Get user's phone from the user's id.
// Get user's address from the user's phone.

function getUser(callback) {
    setTimeout(() => {
        // The first parameter is the error.
      return callback(null, {
        id: 1,
        name: "Luiz Eduardo Costa",
        birthday: new Date('1993/05/24').getFullYear(),
        age: (new Date().getFullYear() - new Date('1993/05/24').getFullYear())
      });
    }, 1000);
  }

  // Returns the user's phone based on the user's id.
  function getPhone(idUser, callback) {
    setTimeout(() => {
      if(idUser){// Checks if it's a valid id.        
        return callback(null, {
            phone: '354-7246',
            ddd: 83,
        });
      }else
        return;
    }, 500);
  }
  
  // Returns the user's address based on the user's phone.
  function getAddress(idPhone, callback) {
    setTimeout(() => {
      return callback(null, {
        street: "Howth Road",
        number: 230,
      }, 300);
    });
  }
  
  
getUser(function resolveNewUser(error, newUser) {
    if (error) {
      console.log("Error! ", error);
      return;
    }
  
    getPhone(newUser.id, function resolvePhone(error1, phone) {
      if (error1) {
        console.log("Error!", error1);
        return;
      }
  
      getAddress(newUser.phone, function resolveAddress(error2, address) {
        if (error2) {
          console.log("Error!", error2);
          return;
        }
  
        console.log(`
        Name:${ newUser.name},
        Address:${address.street}, ${address.number}
        Phone:(${phone.ddd})${phone.phone},
        Birthday: ${newUser.birthday},
        Age: ${newUser.age}
            `);
      });
    });
  });