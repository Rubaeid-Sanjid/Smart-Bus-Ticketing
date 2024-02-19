let countBookedSeats = 0;
let totalPrice = 0;
let countClick = 0;
let grandTotal = 0;

const seatBtn = document.querySelectorAll('.kbd');

for(let index = 0; index< seatBtn.length; index++){
    const btn = seatBtn[index];

    btn.addEventListener('click', function(){
        countClick += 1;

        // console.log(btnId);

        // const isColored = btnId.classList.contains('bg-[#1DD100]')
        // if(isColored){
            
        // }
        // console.log(isColored);

        if(countClick <= 4){
            // changing btn color
            const btnId = document.getElementById(btn.innerText);
            btnId.classList.add('bg-[#1DD100]', 'text-white');
            
            // adding selected seats
            const selectedSeats = document.getElementById('selectedSeats');
            const h3 = document.createElement('h3');
            h3.innerText = btn.innerText + " Economy "+ " 550";       
            selectedSeats.appendChild(h3);

            // decreamenting seats
            const availableSeats = document.getElementById('availableSeats');
            let countAvailableSeats = parseInt(availableSeats.innerText);
            countAvailableSeats--;
            availableSeats.innerText = countAvailableSeats;

            // increamenting booking seats
            const bookedSeats = document.getElementById('bookedSeats');
            countBookedSeats = parseInt(bookedSeats.innerText);
            countBookedSeats++;
            bookedSeats.innerText = countBookedSeats;

            // calculating price
            totalPrice = countBookedSeats * 550;
            const totalPriceId = document.getElementById('totalPrice');
            totalPriceId.innerText = totalPrice;

            const grandTotalId = document.getElementById('grandTotal');
            grandTotalId.innerText = totalPrice;
        }
    })
}

// check phone number
const phoneNumberField = document.getElementById('phoneNumber');
phoneNumberField.addEventListener('keyup', function(e){
    const phoneNumber = e.target.value;
    const nextBtn = document.getElementById('nextBtn');

    if (!isNaN(phoneNumber)) {
        nextBtn.removeAttribute("disabled");
    } 
    else{
        nextBtn.setAttribute("disabled", true);
    }
});
   
// coupon field
const couponApplyBtn = document.getElementById('couponApplyBtn');
couponApplyBtn.addEventListener('click', function(){

    const couponField = document.getElementById('couponField');

    if(couponField.value === "NEW15"){
        const discount = totalPrice * 0.15;
        grandTotal = totalPrice - discount;

        const grandTotalId = document.getElementById('grandTotal');
        grandTotalId.innerText = grandTotal;
    }
    else if(couponField.value === "Couple 20"){
        const discount = totalPrice * 0.2;
        grandTotal = totalPrice - discount;

        const grandTotalId = document.getElementById('grandTotal');
        grandTotalId.innerText = grandTotal;             
    }
    else{
        alert("Invalid Coupon. Please insert accurate coupon Code.")
    }
})

// successful section pop up
const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', function(){
    const header = document.getElementById('header');
    header.classList.add('hidden');
    
    const offer = document.getElementById('offer');
    offer.classList.add('hidden');

    const paribahan = document.getElementById('paribahan');
    paribahan.classList.add('hidden');

    const success = document.getElementById('success');
    success.classList.remove('hidden');
})
