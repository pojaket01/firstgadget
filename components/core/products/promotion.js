import React from 'react'
import Image from 'next/image'

function promotion() {
    return (
        <div
            style={{
                padding:"50px"
            }}
            class="d-flex flex-column align-items-center"
        >
            <div class="text-center">
                <h1 
                    style={{
                        color:"rgb(1, 3, 121)"
                    }}
                >
                    <b>
                        โปรโมชั่น
                    </b>
                </h1>
             </div>
            <Image src="/statics/images/s21.PNG" width={1250} height={450}/>
            <div class="row m-2">
                <Image src="/statics/images/s22.PNG" class="me-2" width={625} height={250}/>
                <Image src="/statics/images/s23.PNG" width={625} height={250}/>
            </div>
            <div class="row d-flex text-center justify-content-around">
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
    )
}

export default promotion
