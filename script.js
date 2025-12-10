function validateform(){
    cont firstname = document.getElementById('firstname').value;
    cont lastname = document.getElementById('last-name').value;
    cont dob = document.getElementById('dob').value;
    cont age = document.getElementById('age').value;
    cont email = document.getElementById('email').value;
    cont password = document.getElementById('password').value;
    cont confrim = document.getElementById('confrim password').value;
}

if (!firstname || !lastname || !dob || !email  || !password || !confrim password){
    alert("All the fieds are required");
    return false;
}

if(password!==confirmpassword){
    alert("password do not match")
    return false;
}


if(!ispasswordvalid(password)){
    alert("password must contain either of one upper letter,lower letter or numeric word.");
    return false;
}

return true;
    
function handleformsubmission(event){
    if(!validateform()){
        event.preventDefault();
    } else{
        alert("form sucesssfully submitted!")
    }
}

function isPasswordValid(password){
    const hasUppercase= /[A-Z]/.test(password);
    const hasLowercase= /[a-z]/.test(password);
    const hasNumber= /[0-9]/.test(password);
    const hasSpecialChar= /[!@$%^&*()_+<>:"]/.test(password);

    return hasUppercase&& hasLowercase&&hasNumber&&hasSpecialChar;

}


function calculateAge(dob){
    const today=new Date();
    const birthdate= new Date (dob);
    let age=today.getfullyear()-birthdate.getfullyear();
    const monthDiff=today.getmonth()-birthdate.getmonth();
    if(monthDiff<0 || (monthDiff===0 && today.getDate()<birthDate.getDate)){
        age--
    }
    return age;

}document.getElementById('dob').addEventListener('change',function()
{
    const dob=this.value;
    if(dob){
        const age =calculateAge(dob);
        Document.getElementbyId('age').value=age;
    }
}); 

document.querySelector('.application-form').addEventListener('submit',handleformsubmission);
document.querySelector('.application-form').addEventListener('submit'storeFormData);

function storeForm data(){
    const formData={
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
         dob: document.getElementById('dob').value,
          age: document.getElementById('age').value,
          gender: document.querySelector('input[name="gender"]:checked')?.value,
          email:document.getElementById('email').value,
          posistion:Array.form(document.querySelectorAll('input[name="position"]:checked')).map(el=>el.value),
         languages:Array.form(document.querySelectorAll('input[name="position"]:checked')).map(el=>el.value),
        
         password:document.getElementById('password').value
    };
    localStorage.setItem('formData'),JSON.stringify((formdata));
}