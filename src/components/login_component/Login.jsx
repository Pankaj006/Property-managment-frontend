import './css/login.css'
import logo from './img/logo.png'

export default function Login({onForgetPassword}) {

  const onClickForgetPassword=()=>{

    onForgetPassword();

  }
    return (
      <div class="container-fluid">
		<div class="row">
			<div class="col-lg-6 col-md-6 d-none d-md-block infinity-image-container"></div>

			<div class="col-lg-6 col-md-6 infinity-form-container">
				<div class="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
					<div class="text-center mb-3 mt-5">
						<img src={logo} width="150px"/>
					</div>
					<div class="text-center mb-4">
		        <h4>Login into account</h4>
		      </div> 
					<form class="px-3">
						<div class="form-input">
							<span><i class="bi bi-envelope-fill"></i></span>
							<input type="email" name="" placeholder="Email Address" tabindex="10"required/>
						</div>
						<div class="form-input">
							<span><i class="bi bi-lock-fill"></i></span>
							<input type="password" name="" placeholder="Password" required/>
						</div>
						<div class="row mb-3">
            <div class="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
				    </div>
				
				    <div class="mb-3"> 
							<button type="submit" class="btn btn-warning">Login</button>
						</div>
						<div class="forget-pass" style={{float: 'right'}}>
            <a onClick={onClickForgetPassword} className="forget-link">Forgot password?</a>
			      </div> 
							
						<div class="text-center mb-2"> 
		         	<div class="text-center mb-3" style={{color: '#777', paddingLeft:'111px', marginTop:'36px'}}>or login with</div>
		               	
		         	<a href="" class="btn btn-social btn-facebook bi bi-facebook"> facebook</a>

							<a href="" class="btn btn-social btn-google bi bi-google"> Google</a>
 
							<a href="" class="btn btn-social btn-twitter bi bi-twitter"> twitter</a>
						</div>
					
					</form>
				</div>
			</div>
		</div>
	</div>
    )
}
