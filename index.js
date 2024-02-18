let countBookedSeats = 0;
let totalPrice = 0;
let countClick = 0;
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

        // check phone number
        const phoneNumber = document.getElementById('phoneNumber');
        phoneNumber.addEventListener('keyup', function(e){
            const text = e.target.value;
            console.log(typeof text);
            if(text.length > 0){
                const nextBtn = document.getElementById('nextBtn');
                nextBtn.removeAttribute('disabled');
            }
        })
    })
}
