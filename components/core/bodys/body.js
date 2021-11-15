import React from 'react'
import Sidenav from '../nav/sidenav'
import ImgSlide from '../sliders/images'


function body() {
    return (
        <div>
            <section class="d-flex flex-column align-items-center w-100">
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col-2">
                            <Sidenav/>
                        </div>
                        <div class="col">
                            <ImgSlide/>
                        </div>
                    </div>
                </div>
                <div>
                    2
                </div>
                <div>
                    3
                </div>
                <div>
                    4
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}

export default body
