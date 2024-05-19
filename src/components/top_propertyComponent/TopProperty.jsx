import image1 from './img/demo/property-1.jpg';
import image2 from './img/demo/property-2.jpg';
import image3 from './img/demo/property-3.jpg';
import image4 from './img/demo/property-4.jpg';

import './css/topproperty.css'


export default function TopProperty(){

   return(

      <div className='container-fluid' id='top-property'>

          <div className='container'>
          <div className='row'>
          <div className="col-md-14 col-md-offset-1 col-sm-12 text-center page-title" id='property-paragraph'>
                       
                        <h2>Top submitted property</h2>
                    </div>
           </div>  
           <div className='row'>
                 <div className='top-property-img'>
                 
                        <div className="row">
                            <div className="col">
                            <div className="card" style={{width: '18rem'}}>
                                <img src={image1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    {/* <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    <div className="item-entry overflow">
                                    <h5><a href="property-1.html" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="card" style={{width: '18rem'}}>
                                <img src={image1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                  
                                    <div className="item-entry overflow">
                                    <h5><a href="property-1.html" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="card" style={{width: '18rem'}}>
                                <img src={image1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                  
                                <div className="item-entry overflow">
                                    <h5><a href="property-1.html" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="card" style={{width: '18rem'}}>
                                <img src={image1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <div className="item-entry overflow">
                                    <h5><a href="property-1.html" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                                </div>
                                </div>
                            </div>   
                            
                        </div>

                     
                        
                </div>
                <div className='top-property-img' style={{marginTop:'3%'}}>
                 
                 <div className="row">
                     <div className="col">
                     <div className="card" style={{width: '18rem'}}>
                         <img src={image1} className="card-img-top" alt="..."/>
                         <div className="card-body">
                             {/* <h5 className="card-title">Card title</h5>
                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                             <div className="item-entry overflow">
                             <h5><a href="property-1.html" >Super nice villa </a></h5>
                             <div className="dot-hr"></div>
                             <span className="pull-left"><b>Area :</b> 120m </span>
                             <span className="proerty-price pull-right">$ 300,000</span>
                         </div>
                         </div>
                         </div>
                     </div>
                     <div className="col">
                     <div className="card" style={{width: '18rem'}}>
                         <img src={image1} className="card-img-top" alt="..."/>
                         <div className="card-body">
                           
                             <div className="item-entry overflow">
                             <h5><a href="property-1.html" >Super nice villa </a></h5>
                             <div className="dot-hr"></div>
                             <span className="pull-left"><b>Area :</b> 120m </span>
                             <span className="proerty-price pull-right">$ 300,000</span>
                         </div>
                         </div>
                         </div>
                     </div>
                     <div className="col">
                     <div className="card" style={{width: '18rem'}}>
                         <img src={image1} className="card-img-top" alt="..."/>
                         <div className="card-body">
                           
                         <div className="item-entry overflow">
                             <h5><a href="property-1.html" >Super nice villa </a></h5>
                             <div className="dot-hr"></div>
                             <span className="pull-left"><b>Area :</b> 120m </span>
                             <span className="proerty-price pull-right">$ 300,000</span>
                         </div>
                         </div>
                         </div>
                     </div>
                     <div className="col">
                     <div className="card" style={{width: '18rem'}}>
                         <img src={image1} className="card-img-top" alt="..."/>
                         <div className="card-body">
                         <div className="item-entry overflow">
                             <h5><a href="property-1.html" >Super nice villa </a></h5>
                             <div className="dot-hr"></div>
                             <span className="pull-left"><b>Area :</b> 120m </span>
                             <span className="proerty-price pull-right">$ 300,000</span>
                         </div>
                         </div>
                         </div>
                     </div>   
                     
                 </div>

              
                 
         </div>
                </div>



          {/* <div classNameName='row'>
          <div className="col-md-14 col-md-offset-1 col-sm-12 text-center page-title" id='property-paragraph'>
                       
                        <h2>Top submitted property</h2>
                    </div>
            
          </div>

          <div classNameName='row'>
             <div classNameName='top-property-img'>
                       <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-1.html" ><img src={image1}/></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-1.html" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-1.html" ><img src={image1}/></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-1.html" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-1.html" ><img src={image1}/></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-1.html" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 p0">
                            <div className="box-two proerty-item">
                                <div className="item-thumb">
                                    <a href="property-1.html" ><img src={image1}/></a>
                                </div>
                                <div className="item-entry overflow">
                                    <h5><a href="property-1.html" >Super nice villa </a></h5>
                                    <div className="dot-hr"></div>
                                    <span className="pull-left"><b>Area :</b> 120m </span>
                                    <span className="proerty-price pull-right">$ 300,000</span>
                                </div>
                            </div>
                        </div>
             </div>

          </div> */}
       

          </div>

        </div>



   ) 

}