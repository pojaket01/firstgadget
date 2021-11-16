import React from 'react'
import Image from 'next/image'

function newlest() {
    return (
        <div class="d-flex flex-column align-items-center ">
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
                    <div class="col-md-7" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                    
                    <Image src="/statics/images/smarthome/2.png" width={500} height={500}/>
                    </div>
                    <div class="col flex-nowrap">
                        <div class="row flex-nowrap">
                            <div class="col-md-8 m-2">
                                <div class="m-2" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                                    <Image src="/statics/images/smartwatch/8.png" width={300} height={300}/>
                                </div>
                                <div class="m-2" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                                    <Image src="/statics/images/smartwatch/1.png" width={300} height={300}/>
                                </div>
                            </div>
                            <div class="col-md-8 m-2">
                                <div class="m-2" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                                    <Image src="/statics/images/health/1.png" width={300} height={300}/>
                                </div>
                                <div class="m-2" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                                    <Image src="/statics/images/voice/4.png" width={300} height={300}/>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex text-center justify-content-end">
                            <a 
                            style={{
                                color:"rgb(1, 3, 121)"
                            }}
                            class="btn w-auto" href="#"
                            >
                            <b>ดูทั้งหมด</b> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newlest
