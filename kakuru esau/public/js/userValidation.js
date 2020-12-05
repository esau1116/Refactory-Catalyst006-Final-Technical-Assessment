const sName = document.registration.surname;
const gName = document.registration.given_name;
// const oDob = document.registration.dateOfBirth;
const pOr = document.registration.placeofresidence;
const oOccupation = document.registration.occupation;
const oNationality = document.registration.nationality;

// const oGendr = document.urbanFarm.gender;
// const oCa = document.urbanFarm.categories;

const name_err = document.getElementById("err1");
const gName_err = document.getElementById("err2");
// // const oDob_err = document.getElementById("err3");
const pOr_err = document.getElementById("err4");
const oOccupation_err = document.getElementById("err5");
const oNationality_err = document.getElementById("err7");
//const fAct_error = document.getElementById('sAct');
// const oDtr_err = document.getElementById("err8");
// const  oGend_err = document.getElementById("err7");
// constoCa _err = document.getElementById("err8");

sName.addEventListener("blur", Sname_verify, true);
gName.addEventListener("blur", given_name_verify, true);
// // oDob.addEventListener("blur", Dob_verify, true);
pOr.addEventListener("blur", pOr_verify, true);
// oDob.addEventListener("blur", Number_verify, true);
oOccupation.addEventListener("blur", occupation_verify, true);
oNationality.addEventListener("blur", Nationality_verify, true);
// activ.addEventListener('blur', fAct_Verify, true);
// oGend.addEventListener("blur", oGend_verify, true);


// const alphanumeric2 = /^\d+\s[A-z]+\s[A-z]+/
const alphanumeric = /^[0-9a-zA-Z]+$/;
const regex = /^[a-zA-Z]+$/;

// Event handlers
// First name
function Sname_verify() {
  if (sName.value.match(regex)) {
    sName.style.border = "3px solid green";
    name_err.innerHTML = "";
    return true;
  } else {
    sName.style.border = "3px solid red";
    name_err.textContent = "Insert correct sur name";
    sName.focus();
    return false;
  }
}

// // surname
function given_name_verify() {
  if (gName.value.match(regex)) {
    gName.style.border = "3px solid green";
    gName_err.innerHTML = "";
    return true;
  } else {
    gName.style.border = "3px solid red";
    gName_err.textContent = "Insert correct  given_name";
    gName.focus();
    return false;
  }
}
// place of residence
// const numberRegex = /^\d{10}$/;
function pOr_verify() {
  if (pOr.value.match(alphanumeric)) {
    pOr.style.border = "3px solid green";
    pOr_err.innerHTML = "";
    return true;
  } else {
    pOr.style.border = "3px solid red";
    pOr_err.textContent = "Insert correct place of residence";
    pOr.focus();
    return false;
  }
}

function occupation_verify() {
  if (oOccupation.value.match(regex)) {
    oOccupation.style.border = "3px solid green";
    oOccupation_err.innerHTML = "";
    return true;
  } else {
    oOccupation.style.border = "3px solid red";
    oOccupation_err.textContent = "Insert correct occupation";
    oOccupation.focus();
    return false;
  }
}

function Nationality_verify() {
  if (oNationality.value.match(regex)) {
    oNationality.style.border = "3px solid green";
    oNationality_err.innerHTML = "";
    return true;
  } else {
    oNationality.style.border = "3px solid red";
    oNationality_err.textContent = "Insert correct nationality";
    oNationality.focus();
    return false;
  }
}
// if (
//   category[0].checked != true &&
//   category[1].checked != true &&
//   category[2].checked != true
// ) {
//   fAct_error.textContent = 'Select atleast one activity';
//   return false;
// } else {
//   fAct_error.innerHTML = '';
// }

