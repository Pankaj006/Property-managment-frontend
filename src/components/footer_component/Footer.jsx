import './css/footer.css'

export default function Footer(){

   return(

<div className="footer ">
            <div className="container">     
                <div className="row">                       
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <div className="single_footer">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div className="signup_form">                           
                                <form action="#" className="subscribe">
                                    <input type="text" className="subscribe__input" placeholder="Enter Email Address"/>
                                    <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                            </ul>
                        </div>                          
                    </div>      
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright">Copyright © 2024 <a href="#">dream-Reality</a>.</p>
                    </div>                
                </div>              
            </div>
        </div>    
   )

}