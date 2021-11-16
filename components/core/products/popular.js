import React from 'react'
import Image from 'next/image'

function popular() {
    return (
        <div class="d-flex flex-column align-items-center">
            <div class="text-center">
                <h1 
                    style={{
                        color:"rgb(1, 3, 121)"
                    }}
                >
                    <b>
                        สินค้ายอดฮิต
                    </b>
                </h1>
             </div>
            <div class="row align-items-center text-center">
                <div class="col " >
                        <div style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/hit/2.png" width={150} height={150}/>
                        </div>
                        <div class="card-body">
                            <p class="card-text">This is a longe</p>
                            <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                        </div>
                        <a href="#" class="btn btn-outline-primary align-self-center">
                            ดูเพิ่มเติม
                        </a>
                </div>
                <div class="col ">  
                        <div style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/hit/3.png" width={150} height={150}/>
                        </div>
                        
                        <div class="card-body">
                            <p class="card-text">This is a longe</p>
                            <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                        </div>
                        <a href="#" class="btn btn-outline-primary align-self-center">
                            ดูเพิ่มเติม
                        </a>
                </div>
                <div class="col ">
                        <div style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                             <Image src="/statics/images/hit/4.png" width={150} height={150}/>
                        </div>
                        <div class="card-body">
                            <p class="card-text">This is a longe</p>
                            <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                        </div>
                        <a href="#" class="btn btn-outline-primary align-self-center">
                            ดูเพิ่มเติม
                        </a>
                </div>
                <div class="col ">
                        <div style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/hit/5.png" width={150} height={150}/>
                        </div>
                        <div class="card-body">
                            <p class="card-text">This is a longe</p>
                            <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                        </div>
                        <a href="#" class="btn btn-outline-primary align-self-center">
                            ดูเพิ่มเติม
                        </a>
                </div>
            </div>
            <div class="row align-items-center text-center">
                <div class="col ">
                        <div style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/hit/6.png" width={150} height={150}/>
                        </div>
                        <div class="card-body">
                            <p class="card-text">This is a longe</p>
                            <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                        </div>
                        <a href="#" class="btn btn-outline-primary align-self-center">
                            ดูเพิ่มเติม
                        </a>
                </div>
                <div class="col ">
                        <div style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/hit/7.png" width={150} height={150}/>
                        </div>
                        <div class="card-body">
                            <p class="card-text">This is a longe</p>
                            <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                        </div>
                        <a href="#" class="btn btn-outline-primary align-self-center">
                            ดูเพิ่มเติม
                        </a>
                </div>
                <div class="col ">
                        <div style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/hit/8.png" width={150} height={150}/>
                        </div>
                        <div class="card-body">
                            <p class="card-text">This is a longe</p>
                            <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                        </div>
                        <a href="#" class="btn btn-outline-primary align-self-center">
                            ดูเพิ่มเติม
                        </a>
                </div>
                <div class="col ">
                        <div style={{backgroundColor:"#F9F9F9" ,borderRadius:"20px"}}>
                            <Image src="/statics/images/hit/1.png" width={150} height={150}/>
                        </div>
                        <div class="card-body">
                            <p class="card-text">This is a longe</p>
                            <p class="card-text"><small class="text-muted">350 Baht.</small></p>
                        </div>
                        <a href="#" class="btn btn-outline-primary align-self-center">
                            ดูเพิ่มเติม
                        </a>
                </div>
            </div>
            
        </div>
    )
}

export default popular
