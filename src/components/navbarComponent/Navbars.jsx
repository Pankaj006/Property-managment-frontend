import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/navbar.css';


export default function Navbars({ onLogin ,onHome, onPlaceAd }) {

    const [showModal, setShowModal] = useState(false);


    const onClickLogin = () => {
        onLogin(); // Notify parent component that login has been triggered
       
    };  
    const onClickHome = () => {
        onHome(); 
       
    }; 

    const onClickPlaceAD=()=>{
        onPlaceAd();
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className='container-fluid ' id='navbar-component'>
            <div className='row' id='navbar-row'>
                <div className="col">
                    <img src='https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/11e0719e75e67bbeafcfce50b1b0ceb4.svg' className='navbar-logo'></img>
                </div>
                <div className="col-6">
                    <ul className='menu-div'>
                        <li>
                            <a className='menu-item' onClick={onClickHome}>Home</a>
                        </li>
                        <li>
                            <a className='menu-item'>Listing</a>
                        </li>
                        <li>
                            <a className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a className='menu-item'>Home</a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <div className='row'>
                        <div className='col-2'>
                            <i className="bi bi-bookmark-star-fill" style={{ fontSize: '2rem', color: '#dc3545' }}></i>
                        </div>
                        <div className='col-2'>
                            <i className="bi bi-envelope" style={{ fontSize: '2rem', color: 'cornflowerblue' }} data-toggle="modal" data-target="#largeModal" onClick={toggleModal}></i>
                        </div>
                        <div className='col-4'>
                            <button type="button" onClick={onClickLogin} className="btn btn-outline-danger btn-lg">Login</button>
                        </div>
                        <div className='col-4'>
                            <button type="button" onClick={onClickPlaceAD} className="btn btn-warning btn-lg" style={{color:'#fff'}}>PlaceAd</button>
                        </div>
                    </div>
                  
                </div>
            </div>

             {/* Modal */}
             {showModal && (
         <div class="modal fade" id="largeModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
         <div class="modal-dialog modal-lg">
           <div class="modal-content">
             <div class="modal-header">
               <h4 class="modal-title" id="myModalLabel">Large Modal</h4>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div class="modal-body">
               <h3>Modal Body</h3>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary">Save changes</button>
             </div>
           </div>
         </div>
       </div>
            )}
        </div>
    );
}
