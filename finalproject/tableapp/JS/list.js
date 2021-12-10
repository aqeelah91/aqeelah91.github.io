let refreshNow = document.getElementById("refreshNowBtn")
refreshNow.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/2e256a675636ad773edb98d656753d18/bookingKpt/bookings';
    fetch(url, {cache: "no-store"}) 
        .then((response) => response.json())
        .then(json => {
           let bookingNameList = document.getElementById("bookingNameList")
           let bookingsIds = []
           //clear the table/list
           for(let k = bookingNameList.rows.length - 1; k > 0; k--){
               bookingNameList.deleteRow(k)
           }
           //load the new data/list
           for(let i = 0; i < json.bookings.length; i++){
             let gId = json.bookings[i].id
               let gCheckIn = json.bookings[i].checkIn
               let gCheckOut = json.bookings[i].checkOut
               let gNoOfRooms = json.bookings[i].noOfRooms 
               let gAdults = json.bookings[i].adults
               let gChildren = json.bookings[i].children
               let gName = json.bookings[i].name
               let btnId = "delete"+ gId 


               let row = bookingNameList.insertRow(bookingNameList.rows.length)
               row.insertCell(0).innerHTML = gId
               row.insertCell(1).innerHTML = gCheckIn
               row.insertCell(2).innerHTML = gCheckOut
               row.insertCell(3).innerHTML = gNoOfRooms
               row.insertCell(4).innerHTML = gAdults
               row.insertCell(5).innerHTML = gChildren
               row.insertCell(6).innerHTML = gName
               row.insertCell(7).innerHTML = "<button id='" + btnId + "' class='btn btn-danger'>Delete</button>"

               bookingsIds.push(btnId)
           }//attach listener to buttons
for (let j = 0; j < bookingsIds.length; j++) {
    let el = document.getElementById(bookingsIds[j])
    el.addEventListener("click", function () {
        let theId = bookingsIds[j].replace("delete", "")
        DeleteBooking(theId)
    })
}
        });



}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/2e256a675636ad773edb98d656753d18/bookingKpt/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
        });
}