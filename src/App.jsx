import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from "./components/spinnerComponent/Spinner";
import Navbars from './components/navbarComponent/Navbars';
import Carousal from './components/caraousalComponent/Carousal';
import Search from './components/search_component/Search';
import TopProperty from './components/top_propertyComponent/TopProperty';
import CountArea from './components/count_component/CountArea';
import Footer from './components/footer_component/Footer';
import Login from './components/login_component/Login';
import ForgetPassword from './components/forgetPassword_component/ForgetPassword';

import PlaceAd from './components/placeAd_component/PlaceAd';

function App() { 
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isForgetPassword, setIsForgetPassword] = useState(false);
    const [isPlaceAd, setIsPlaceAd] = useState(false); 
    
   

    useEffect(() => {
        const timer = setTimeout(() => { 
            setIsLoading(false);
        }, 1500);
 
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log('isLoading:', isLoading);
    }, [isLoading]);

    useEffect(() => {
        console.log('isLoggedIn:', isLoggedIn);
    }, [isLoggedIn]);

    useEffect(() => {
        console.log('isForgetPassword:', isForgetPassword);
    }, [isForgetPassword]);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsLoggedIn(true);
            setIsForgetPassword(false);
            setIsPlaceAd(false);
          
        }, 500); 
    };

    const handleHome = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsLoggedIn(false);
            setIsForgetPassword(false);
            setIsPlaceAd(false);
           
        }, 500);
    };
 
    const handleForgetPassword = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsForgetPassword(true);
            setIsLoggedIn(false);
            setIsPlaceAd(false);
        }, 500);
    }

    const onhandlePlaceAd=()=>{
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsForgetPassword(false);
            setIsLoggedIn(false);
            setIsPlaceAd(true);
        }, 500); 

    };




    return (
        <div>
            {isLoading? (
                <>
                 
                 <Spinner />
                </> 
                
            ) : ( 
                <>
                    {isPlaceAd?(
                         <>
                          <Navbars onLogin={handleLogin} onHome={handleHome} onPlaceAd={onhandlePlaceAd}/>
                          <PlaceAd/>
    
                            <Footer />
                         </> 
                    
                     ): isForgetPassword? (
                        <>
                          
                            <Navbars onLogin={handleLogin} onHome={handleHome} onPlaceAd={onhandlePlaceAd}/>
                            <ForgetPassword />
                            <Footer />
                        </>
                    ) : isLoggedIn? (
                        <>
                            <Navbars onLogin={handleLogin} onHome={handleHome} onPlaceAd={onhandlePlaceAd} />
                            <Login onForgetPassword={handleForgetPassword} />
                            <Footer />
                        </>
                    ) : (
                        <>
                            <Navbars onLogin={handleLogin} onHome={handleHome} onPlaceAd={onhandlePlaceAd} />
                            <Carousal />
                            <Search />
                            <TopProperty />
                            <CountArea />
                            <Footer />
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default App;
