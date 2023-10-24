// to validate email
// passing the callback function in another function

const printEmail = () => {
    console.log(`email is valid`);
}
function validateEmail(email, callback) {
  let at = email.includes('@');
  let dot = email.includes('.');
  if(at && dot) callback(true) ; callback(false);
}
validateEmail('tesfuad@gmail.com', printEmail);