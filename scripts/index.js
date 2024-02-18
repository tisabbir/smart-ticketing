const seatContainer = document.getElementById('seat-container');
const seats = seatContainer.getElementsByClassName('btn');

    let count = 0;

for(let seat of seats){
    seat.addEventListener('click', function(){
        
        let purchasedSeatNumber = parseInt(document.getElementById('purchased-seat').innerText);

        if(purchasedSeatNumber<4){
            
            seat.classList.add('bg-[#1DD100]');
            
            this.disabled = true;

            
            // Decrease Available SeatNumber
        let seatNumber = parseInt(document.getElementById('available-seat').innerText);
        let updatedSeatNumber = seatNumber -1;
        document.getElementById('available-seat').innerText = updatedSeatNumber;

        // Increase Purchased Seat Number
        
        let updatedPurchasedSeatNumber = purchasedSeatNumber + 1;
        document.getElementById('purchased-seat').innerText = updatedPurchasedSeatNumber;

        // Seat er nam jukto hobe
        let table = document.getElementById('table');
        let tr = table.insertRow(1);
        let cell1 = tr.insertCell(0);
        let cell2 = tr.insertCell(1);

        cell1.innerText = seat.innerText;
        cell2.innerHTML = '550 TK';

        // Total Price Update
        count = count + 1;
        let totalPrice = count * 550;
        console.log(totalPrice);
        let totalPriceValue = parseInt(document.getElementById('total-price').innerText);
        document.getElementById('total-price').innerText = totalPrice;

        // Grand Total Price 
        document.getElementById('grand-total').innerText = totalPrice;
        }
        
        
    })
}

//Grand Total Price Update

function applyCoupon(){
 const coupon = document.getElementById('coupon').value;
 console.log(coupon);
 
    if(coupon == 'NEW15'){
        let totalPriceValue = parseInt(document.getElementById('total-price').innerText);
        let discount = totalPriceValue * 15/100;
        document.getElementById('discountedPrice').innerText = 'Discount = ' + discount;

        document.getElementById('grand-total').innerText = totalPriceValue - discount;
        document.getElementById('gayebulHawa').classList.add('hidden');

}else if(coupon == 'Couple 20'){
    let totalPriceValue = parseInt(document.getElementById('total-price').innerText);
    let discount = totalPriceValue * 20/100;
        document.getElementById('discountedPrice').innerText = 'Discount = ' + discount;

        document.getElementById('grand-total').innerText = totalPriceValue - discount;
        document.getElementById('gayebulHawa').classList.add('hidden');
}


}