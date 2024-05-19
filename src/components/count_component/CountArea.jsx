import './css/countArea.css'

export default function CountArea(){
return(

    <div className="count-area">
    <div className="container">
        <div className="row">
            <div className="col-md-14 col-md-offset-1 col-sm-12 text-center page-title">
                
                <h2 style={{color: '#a9a9a9'}}>You can trust Us </h2> 
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 col-xs-12 percent-blocks m-main" data-waypoint-scroll="true">
                <div className="row">
                    <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                            <div className="count-item-circle">
                                <span className="bi bi-people-fill" style={{color: '#ffc107'}}></span>
                              
                            </div>
                            <div className="chart" data-percent="5000">
                                <h2 className="percent" id="counter">5000</h2>
                                <h5>HAPPY CUSTOMER </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                            <div className="count-item-circle">
                                <span className="bi bi-house-check-fill" style={{color: '#ffc107'}}></span>
                            </div>
                            <div className="chart" data-percent="12000">
                                <h2 className="percent" id="counter1">12000</h2>
                                <h5>Properties in stock</h5>
                            </div>
                        </div> 
                    </div> 
                    <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                            <div className="count-item-circle">
                                <span className="bi bi-flag-fill" style={{color: '#ffc107'}}></span>
                            </div>
                            <div className="chart" data-percent="120">
                                <h2 className="percent" id="counter2">120</h2>
                                <h5>City registered </h5>
                            </div>
                        </div> 
                    </div> 
                    <div className="col-sm-3 col-xs-6">
                        <div className="count-item">
                            <div className="count-item-circle">
                                <span className="bi bi-emoji-wink-fill" style={{color: '#ffc107'}}></span>
                            </div>
                            <div className="chart" data-percent="5000">
                                <h2 className="percent"  id="counter3">5000</h2>
                                <h5>DEALER BRANCHES</h5>
                            </div>
                        </div> 

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)

}