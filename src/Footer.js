import React from 'react';

const Footer = () =>{
    return(
        <footer className="bg-dark text-center text-white fixed-bottom">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fa fa-google" aria-hidden="true"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>

            
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>

                
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                </section>
            </div>
        
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2'}}>
                © 2021 Copyright:
                <a className="text-white" href="#"> Avinash_Shukla.com</a>
            </div>
        </footer>
    )
}

export default Footer;