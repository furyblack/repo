var regex = /^[a-z\d_]{4,16}$/;
function validateUsr(username) {
  return regex.test(username) 
}