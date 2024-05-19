import './css/search.css'

export default function Search(){

    return(

        <div className='search-filter container-fluid'>
                    <h2 className='search-heading'>Property search got easier</h2>
                    <p className='search-paragraph'> Where dream becomes reality...</p>
                    <div className="card">
                        <div className="container" id='search-content'>
                           
                         <div className='row'>
                            <div className='col'>
                            <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='col'>
                            <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        </select>
                            </div>
                            <div className='col'>
                            <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    </select>
                            </div>
                            <div className='col-1'>
                            <button type="button" className="btn btn-danger btn-lg">
                                <i className="bi bi-search" style={{ fontSize: '1rem'}}></i>
                            </button>
                           </div>



                         </div>

                        </div>
                </div>

        </div>

    )
}