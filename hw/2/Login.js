// set the admin id, pw
const id = "admin"
const pw = "admin"

function check_info(){
    const get_id = document.getElementById("ID").value
    const get_pw = document.getElementById("PW").value
    
    if(id != get_id || pw != get_pw){
        alert("Please Check ID/PW")
    } else {
        // move to Reservation Page
        window.location.href = "Reservation.html"
    }
}