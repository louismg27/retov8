import logo from "../../Images/LogInSignUp/Welcome.PNG";
import sigin from "../../Images/LogInSignUp/Signin.PNG";
import welcome from "../Login/Styles/imagen.css";
import sigincss from "../Login/Styles/siginlinks.css";
import facebooksass from "./Styles/facebook.css";
import logofacebook from "../../Images/LogInSignUp/facebook.png";

export default function Login() {
    return (
        <>
            <main className="main w-100 p-0 m-0 d-flex  ">

                <div
                    className="container d-flex flex-row    justify-content-around align-content-lg-center  p-0  container-login ">

                    <div className="container p-0 m-0 container-login__left">
                        <img src={sigin} className={"image"} alt=""/>
                    </div>

                    <div className="container p-0 m-0 d-flex bg-white justify-content-around container-login__right ">

                        <div className="container d-flex flex-column  p-0 m-0 w-100">

                            <div className="container d-flex flex-row text-center  p-0 m-0 ">
                                <div className="container    p-3 fw-bold tab-item tab-active  ">
                                    LOG IN
                                </div>
                                <div className="container   p-3 fw-bold  tab-item ">
                                    SIGN IN
                                </div>
                            </div>

                            <div className="container">
                                <form>
                                    <div className="container d-flex flex-row mt-4  justify-content-center gap-4 mb-2">
                                        <div className="form-group w-100">
                                            <input type="text" className="form-control" id="formGroupExampleInput"
                                                   placeholder="First Name"/>
                                        </div>
                                        <div className="form-group w-100">
                                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                                   placeholder="Last Name"/>
                                        </div>
                                    </div>

                                    <div className="container mb-4 form-group">

                                        <input type="text" className="form-control" id="formGroupExampleInput3"
                                               placeholder="Email"/>
                                    </div>


                                    <div className="container mb-4 form-group">
                                        <input type="text" className="form-control" id="formGroupExampleInput4"
                                               placeholder="Password"/>
                                    </div>


                                    <div className=" container mb-4 form-group">
                                        <input type="text" className="form-control" id="formGroupExampleInput5"
                                               placeholder="Re-type password"/>
                                    </div>
                                    <div className="container ">
                                        <button
                                            className="btn btn-danger justify-content-center w-100 fw-bold rounded-3 ">
                                            SIGN UP
                                        </button>
                                    </div>

                                    <div className="container d-flex flex-row align-content-center p-0 mt-4 gap-3 mb-4">
                                        <div className="container   or-container mt-2 p-0 "></div>
                                        <div className="text-secondary m-0 p-0 text-center"> OR</div>
                                        <div className="container   or-container mt-2 p-0"></div>
                                    </div>

                                    <div className="container">
                                        <div
                                            className="btn btn-google container   border border-secondary  d-flex flex-row btn  w-100 mb-2 p-0 justify-content-between align-content-center">
                                            <div
                                                className="container    justify-content-center p-0 m-0 container-google-icon">
                                                <img className="google-icon  p-0 mt-2"
                                                     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                            </div>
                                            <div className="container  align-content-center m-2 fw-bold ">
                                                CONTINUE WITH GOOGLE
                                            </div>
                                        </div>
                                        <div
                                            className="btn btn-facebook container   border border-secondary  d-flex flex-row btn  w-100 mb-2 p-0 justify-content-between align-content-center">
                                            <div
                                                className="container    justify-content-center p-0 m-0 container-google-icon">
                                                <img className="facebook-icon  p-0 mt-1"
                                                     src={logofacebook}/>
                                            </div>
                                            <div className="container  align-content-center m-2 fw-bold ">
                                                CONTINUE WITH FACEBOOK
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="container d-flex flex-column text-secondary text-center   mt-5 p-0   ">
                                        <p className="container m-0 p-0 ">By signing up you agree to the store</p>
                                        <p className="container m-0 p-0"><span><u className="fw-bold">Terms & Conditions</u></span> and <span> <u className="fw-bold">Privacy Policty</u></span></p>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>


                </div>
            </main>
        </>
    );
}