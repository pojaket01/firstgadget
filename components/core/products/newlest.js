import React from 'react'
import Image from 'next/image'

function newlest() {
    return (
        <div class="d-flex flex-column align-items-center">
            <div class="text-center">
                <h1
                    style={{
                        color:"rgb(1, 3, 121)"
                    }}
                >
                    <b>
                        สินค้าใหม่
                    </b>
                </h1>
            </div>
            <div class="w-75 d-flex">
                <div class="row">
                    <div class="col-md-5">
                    <Image src="/statics/images/smarthome/2.png" width={500} height={500}/>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-sm-5 m-2">
                                <Image src="/statics/images/smartwatch/8.png" width={300} height={300}/>
                                <Image src="/statics/images/smartwatch/1.png" width={300} height={300}/>
                            </div>
                            <div class="col-sm-5 m-2">
                                <Image src="/statics/images/health/1.png" width={300} height={300}/>
                                <Image src="/statics/images/voice/4.png" width={300} height={300}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newlest
