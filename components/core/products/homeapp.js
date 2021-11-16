import React from 'react'
import Image from 'next/image'

function homeapp() {
    return (
        <div class="d-flex flex-column align-items-center">
            <div class="text-center">
                <h1 
                    style={{
                        color:"rgb(1, 3, 121)"
                    }}
                >
                    <b>
                        อุปกรณ์ใช้ในบ้าน
                    </b>
                </h1>
            </div>
            <div class="d-flex row">
                <div class="col-2">
                    <Image src="/statics/images/5.png" width={300} height={1000}/>
                </div>
                <div class="col">
                    <div class="row align-items-center text-center m-5">
                    <div class="col ">
                        <a href="#" class="btn  align-self-center" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/smarthome/1.png" width={150} height={150}/>
                            <div class="card-body">
                                <p class="card-text">This is a longe</p>
                                <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                            </div>
                        </a>
                    </div>
                    <div class="col ">
                        <a href="#" class="btn align-self-center" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>  
                            <Image src="/statics/images/smarthome/2.png" width={150} height={150}/>
                            <div class="card-body">
                                <p class="card-text">This is a longe</p>
                                <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                            </div>
                        </a>
                    </div>
                    <div class="col ">
                        <a href="#" class="btn align-self-center" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/smarthome/3.png" width={150} height={150}/>
                            <div class="card-body">
                                <p class="card-text">This is a longe</p>
                                <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                            </div>
                        </a>
                    </div>
                    <div class="col ">
                        <a href="#" class="btn align-self-center" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/smarthome/4.png" width={150} height={150}/>
                            <div class="card-body">
                                <p class="card-text">This is a longe</p>
                                <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                            </div>
                        </a>
                    </div>
                    <div class="col ">
                        <a href="#" class="btn align-self-center" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/smarthome/5.png" width={150} height={150}/>
                            <div class="card-body">
                                <p class="card-text">This is a longe</p>
                                <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row align-items-center text-center m-5">
                <div class="col ">
                        <a href="#" class="btn align-self-center" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/smarthome/5.png" width={150} height={150}/>
                            <div class="card-body">
                                <p class="card-text">This is a longe</p>
                                <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                            </div>
                        </a>
                    </div>
                    <div class="col "> 
                        <a href="#" class="btn align-self-center" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/smarthome/4.png" width={150} height={150}/>
                            <div class="card-body">
                                <p class="card-text">This is a longe</p>
                                <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                            </div>
                        </a>
                    </div>
                    <div class="col ">
                        <a href="#" class="btn align-self-center" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/smarthome/3.png" width={150} height={150}/>
                            <div class="card-body">
                                <p class="card-text">This is a longe</p>
                                <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                            </div>
                        </a>
                    </div>
                    <div class="col ">
                        <a href="#" class="btn align-self-center" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/smarthome/2.png" width={150} height={150}/>
                            <div class="card-body">
                                <p class="card-text">This is a longe</p>
                                <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                            </div>
                        </a>
                    </div>
                    <div class="col ">
                        <a href="#" class="btn align-self-center" style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/smarthome/1.png" width={150} height={150}/>
                            <div class="card-body">
                                <p class="card-text">This is a longe</p>
                                <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                            </div>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default homeapp
