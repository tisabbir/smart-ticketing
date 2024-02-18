const seatContainer = document.getElementById('seat-container');
const seats = seatContainer.getElementsByClassName('btn');

    let count = 0;

for(let seat of seats){
    seat.addEventListener('click', function seatFunction(){
        
        let purchasedSeatNumber = parseInt(document.getElementById('purchased-seat').innerText);

        if(count<4){
            
            seat.classList.add('bg-[#1DD100]');


            // Decrease Available SeatNumber
        let seatNumber = parseInt(document.getElementById('available-seat').innerText);
        let updatedSeatNumber = seatNumber -1;
        document.getElementById('available-seat').innerText = updatedSeatNumber;

        // Increase Purchased Seat Number
        
        let updatedPurchasedSeatNumber = purchasedSeatNumber + 1;
        document.getElementById('purchased-seat').innerText = updatedPurchasedSeatNumber;

        // Seat er nam jukto hobe
        let table = document.getElementById('table');

            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.innerText = seat.innerText;
            td2.innerText = 'Economy Class';
            td3.innerText = '550 Tk';

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);

        // Total Price Update
        count = count + 1;
        let totalPrice = count * 550;
        let totalPriceValue = parseInt(document.getElementById('total-price').innerText);
        document.getElementById('total-price').innerText = totalPrice;

        // Grand Total Price 
        document.getElementById('grand-total').innerText = totalPrice;
        } else {
            alert('You can not buy more than 4 tickets')
        }

        if(count === 4){
            document.getElementById('couponBtn').removeAttribute('disabled');
        }

        
        
        seat.removeEventListener('click', seatFunction);
    })
}

//Grand Total Price Update

function applyCoupon(){
 const coupon = document.getElementById('coupon').value;
 
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

// Next Button Enabling 


// document.addEventListener('mouseover', function(){
//     const phoneNumber = parseFloat(document.getElementById('phoneNumber').value);

//     if(phoneNumber>0){
//         const grandValue = parseFloat(document.getElementById('grand-total').innerText);
//         if(grandValue>0){
//             document.getElementById('nextBtn').removeAttribute('disabled');
//         }
//     }
// })


document.getElementById('phoneNumber').addEventListener('keypress', function(){
        const phoneNumber = parseFloat(document.getElementById('phoneNumber').value);

            
    if(phoneNumber){
        const grandValue = parseFloat(document.getElementById('grand-total').innerText);
        if(grandValue>0){
            document.getElementById('nextBtn').removeAttribute('disabled');
        }
    }else{

    }
})
