let firstname;
let lastname;
let ausgabe;

const arrow_fn_wert_assign_values = (firstname, lastname) => {
    firstname = document.getElementById('fname').value;
    lastname = document.getElementById('lname').value;
    arrow_fn_show_length(firstname, lastname);
}

const arrow_fn_show_length = (firstname, lastname) => {
    let length_firstname = firstname.length;
    let length_lastname = lastname.length;
    ausgabe = `First name lenght ${firstname} = ${length_firstname} and ${lastname} lastname length = ${length_lastname}`;
    console.log(ausgabe);
    document.getElementById('pOutput').innerHTML = ausgabe;

}