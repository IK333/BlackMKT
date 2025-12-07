// document.addEventListener('DOMContentLoaded', () => {
    
//     // Helper function to safely get cookie values
//     function getCookie(name) {
//         const value = `; ${document.cookie}`;
//         const parts = value.split(`; ${name}=`);
//         if (parts.length === 2) return parts.pop().split(';').shift();
//         return null;
//     }

//     const form = document.getElementById('checkout-form');
    
//     if (form) {
//         form.addEventListener('submit', function(e) {
//             e.preventDefault(); // Stop the form from submitting normally

//             // --- 1. Get Cookie Data ---
//             let orderIdCookie = getCookie('orderId') || "";
//             let counterCookie = getCookie('counter') || "0";
            
//             // Clean the product list (e.g., "3 1 " -> ["3", "1"])
//             let productIds = orderIdCookie.trim().split(' ').filter(Boolean);

//             // --- 2. Get Form Data ---
//             let payload = {
//                 firstName: document.getElementById('fname').value,
//                 lastName: document.getElementById('lname').value,
//                 email: document.getElementById('email').value,
//                 phone: document.getElementById('phone').value,
//                 address: document.getElementById('address').value,
//                 paymentMethod: document.querySelector('input[name="payment"]:checked').value,
//                 products: productIds, // Array of product IDs from cookie
//                 totalItems: parseInt(counterCookie, 10) // Total count from cookie
//             };

//             // --- 3. Send the POST request ---
//             let httpRequest = new XMLHttpRequest();
//             let method = "POST";
//             let jsonRequestURL = "https://5d76bf96515d1a0014085cf9.mockapi.io/order";
            
//             httpRequest.open(method, jsonRequestURL, true);
//             // Send as JSON, which is standard for REST APIs
//             httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); 

//             httpRequest.onreadystatechange = function() {
//                 if (httpRequest.readyState == 4) {
//                     // Check for 201 (Created) or 200 (OK)
//                     if (httpRequest.status == 200 || httpRequest.status == 201) {
                        
//                         console.log('Order submitted successfully:', JSON.parse(httpRequest.responseText));
                        
//                         // --- 4. Clear the cart cookies ---
//                         // Set expiry date to the past to delete them
//                         document.cookie = "orderId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//                         document.cookie = "counter=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

//                         // Optional: Clear the cart badge in the header
//                         let badge = document.getElementById("badge");
//                         if(badge) {
//                             badge.innerHTML = "0";
//                         }
                        
//                         // --- 5. REDIRECT TO THE FINAL PAGE ---
//                         // This redirects the user after success
//                         window.location.href = 'orderfinal.html';

//                     } else {
//                         // Handle error
//                         console.error('Error submitting order:', httpRequest.statusText);
//                         alert('There was an error placing your order. Please try again.');
//                     }
//                 }
//             }
            
//             // Send the data as a JSON string
//             httpRequest.send(JSON.stringify(payload)); 
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('checkout-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the form from submitting normally

            // --- REDIRECT TO THE FINAL PAGE ---
            // This now happens immediately on click.
            window.location.href = 'orderfinal.html';
        });
    }
});