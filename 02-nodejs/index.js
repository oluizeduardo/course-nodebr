// Get a user.
// Get user's phone from the user's id.
// Get user's address from the user's id.

function getUser(callback) {
    setTimeout(() => {
      return callback(null, {
        id: 1,
        name: "Luiz Costa",
        birthday: new Date()
      });
    }, 1000);
  }
  
  function getPhone(idUser, callback) {
    setTimeout(() => {
      return callback(null, {
        phone: '3547246',
        ddd: 83,
      });
    }, 500);
  }
  
  function getAddress(idUser, callback) {
    setTimeout(() => {
      return callback(null, {
        street: "Dos bobos",
        number: 230,
      }, 300);
    });
  }
  
  
getUser(function resolvernewUser(error, newUser) {
    if (error) {
      console.log("Error! ", error);
      return;
    }
  
    getPhone(newUser.id, function resolverphone(error1, phone) {
      if (error1) {
        console.log("Error!", error1);
        return;
      }
  
      getAddress(newUser.id, function resolverEndereco(error2, address) {
        if (error2) {
          console.log("Error!", error2);
          return;
        }
  
        console.log(`
        Name:${ newUser.name},
        Address:${address.street}, ${address.number}
        Phone:(${phone.ddd})${phone.phone}
            `);
      });
    });
  });