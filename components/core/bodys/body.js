import React from 'react'
import Sidenav from '../nav/sidenav'
import ImgSlide from '../sliders/images'
import Popular from '../products/popular'
import Brand from '../products/brand'
import Newlest from '../products/newlest'
import Promotion from '../products/promotion'
import Smartwatch from '../products/smartwatch'
import HpSk from '../products/hpSk'
import Smarthome from '../products/smarthome'
import Lifestyle from '../products/lifestyle'
import Homeapp from '../products/homeapp'
import Game from '../products/game'
import Fittness from '../products/fittness'
import Pets from '../products/pets'
import Health from '../products/health'
import Transport from './transport'

function body() {
    return (
        <div>
            <section class="d-flex flex-column align-items-center ">
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col-2 mx-2">
                            <Sidenav/>
                        </div>
                        <div class="col">
                            <ImgSlide/>
                        </div>
                    </div>
                </div>
                <div 
                    style={{
                    width: "50vw",
                    height: "70vh",
                    marginBottom: "25px"
                    }}
                    class="p-1"
                >
                    <Popular/>
                </div>
                <div
                    style={{
                    width: "",
                    height: "70vh"
                    }}
                >
                    <Brand/>
                </div>
                <div
                    style={{
                    width: "",
                    height: "60vh",
                    marginBottom: "50px",
                    }}
                >
                    <Newlest/>
                </div>
            </section>
            <section
                style={{
                    backgroundColor:"#F9F9F9",
                    height:"100vh",
                    marginBottom: "30px",
                }}
            >
                <div 
                    style={{
                        margin:"30px"
                    }}
                >
                    <Promotion/>
                </div>
            </section>
            <section
                style={{
                    height:"85vh"
                }}
            >
                <Smartwatch/>
            </section>
            <section
                style={{
                    backgroundColor:"#F9F9F9",
                    height:"90vh",
                    marginBottom: "30px",
                }}
            >
                <div 
                    style={{
                        padding:"30px"
                    }}
                >
                    <HpSk/>
                </div>
            </section>
            <section
                style={{
                    height:"90vh"
                }}
            >
                <div 
                    style={{
                        padding:"30px"
                    }}
                >
                    <Smarthome/>
                </div>
            </section>
            <section
                style={{
                    backgroundColor:"#F9F9F9",
                    height:"80vh",
                    marginBottom: "30px",
                }}
            >
                <div 
                    style={{
                        padding:"30px"
                    }}
                >
                    <Lifestyle/>
                </div>
            </section>
            <section
                style={{
                    height:"80vh"
                }}
            >
                <Homeapp/>
            </section>
            <section
                style={{
                    backgroundColor:"#F9F9F9",
                    height:"70vh",
                    padding: "30px",
                }}
            >
                <Game/>
            </section>
            <section
                style={{
                    height:"85vh",
                    padding: "30px"
                }}
            >
                <Fittness/>
            </section>
            <section
                style={{
                    backgroundColor:"#F9F9F9",
                    height:"90vh",
                    padding: "30px",
                }}
            >
                <Pets/> 
            </section>
            <section
                style={{
                    height:"85vh",
                    padding: "20px"
                }}
            >
                <Health/>
            </section>
            <section
                style={{
                    height:"30vh",
                    padding: "20px"
                }}
            >
                <Transport/>
            </section>
        </div>
    )
}

export default body
