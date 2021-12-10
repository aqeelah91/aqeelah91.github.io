let bookNowBtn2 = document.getElementById("bookNowBtn")
bookNowBtn2.addEventListener('click', () => {
    let CheckIn = document.getElementById("CheckIn")
    let CheckInVal = CheckIn.value

    let CheckOut = document.getElementById("CheckOut")
    let CheckOutVal = CheckOut.value

    let NoOfRooms = document.getElementById("NoOfRooms")
    let NoOfRoomsVal = NoOfRooms.value

    let Adults = document.getElementById("Adults")
    let AdultsVal = Adults.value

    let Children = document.getElementById("Children")
    let ChildrenVal = Children.value
    
    let name ="Noraqeelah"
    BookNow(CheckInVal, CheckOutVal, NoOfRoomsVal, AdultsVal, ChildrenVal,name)

})

// test

function BookNow(userCheckIn, usercheckout, userNoOfRooms, userAdults, userChildren,CustomerName) {
    let BookID;
    let url = 'https://api.sheety.co/2e256a675636ad773edb98d656753d18/bookingKpt/bookings';
    let body = {
        booking: {
            checkIn: userCheckIn,
            checkOut: usercheckout,
            noOfRooms: userNoOfRooms,
            adults: userAdults,
            children: userChildren,
            name: CustomerName
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            BookID = json.bookings.id;
            alert("ID " + json.bookings.id + "," + "successfully added")
            alert(BookID);
            GetBook(BookID);
        });

}
function GetBook(BookingID) {
    let url = 'https://api.sheety.co/2e256a675636ad773edb98d656753d18/bookingKpt/bookings/' + BookingID;
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  //console.log(json.bookings);
  alert("ID " + json.bookings.name + "," + "successfully added")
});
}
function GetBookX(BookingID) {
    //BookingID = BookingID
    alert(BookingID)
    let url = 'https://api.sheety.co/2e256a675636ad773edb98d656753d18/bookingKpt/bookings/' + BookingID;
    fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert("ID " + json.booking.name + "," + "successfully added")
        });
}



