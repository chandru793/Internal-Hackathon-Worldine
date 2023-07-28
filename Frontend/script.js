const form = document.getElementById('stud_form');

form.addEventListener('submit', ((e) => {
    e.preventDefault();

    const stud_name = document.getElementById('stud_name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const add_1 = document.getElementById('add_1').value;
    const add_2 = document.getElementById('add_2').value;
    const city = document.getElementById('city').value;
    const state_name = document.getElementById('state_name').value;
    const pin_code = document.getElementById('pin_code').value;

    postdata(stud_name, dob, gender, add_1, add_2, city, state_name, pin_code);
    window.location.href="display.html"
}))

async function postdata(stud_name, dob, gender, add_1, add_2, city, state_name, pin_code) {
    
    await fetch("http://localhost:8080/create", {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            stud_name: stud_name,
            dob: dob,
            gender: gender,
            add_1: add_1,
            add_2: add_2,
            city: city,
            state_name: state_name,
            pin_code:pin_code,
        })
    })
}