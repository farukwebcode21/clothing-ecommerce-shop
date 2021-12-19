import React from 'react'

// Scroll Back To Top
// function scrollTopBack(){
//     let scrollTopButton = document.querySelector("#scrollUp");
//     window.onscroll = function (){
//         var scroll = document.documentElement.scrollTop;
//         if(scroll >= 250){
//             scrollTopButton.classList.add('scrollActive');
//         } else{
//             scrollTopButton.classList.remove('scrollActive');
//         }
//     }
// }
// scrollTopBack();


const Footer = () => {
    return (
            <footer>
                <div className="p-3 copyright">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-start">
                                <p className="my-0">Copyright © 2022 <a href="#/">E-SHOP</a> All Rights Reserved</p>
                            </div>
                            <div className="col-12 col-lg-6 p-1 p-lg-3 text-center text-lg-end">
                                <p>Designed by <a href="#/" target=" _blank">FARUK AHMAD</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
