import React from 'react'
import Image from 'next/image'

function brand() {
    return (
        <div>
            <div class="text-center">
                <h1
                    style={{
                        color:"rgb(1, 3, 121)"
                    }}
                >
                    <b>
                        ช้อปสินค้าตามแบรนด์
                    </b>
                </h1>
            </div>
            <div>
            <div class="gallery">
              <div class="gallery-container">
                <Image class="gallery-item gallery-item-1" src="/statics/images/s1.png" data-index="1" width={150} height={150}/>
                <Image class="gallery-item gallery-item-2" src="/statics/images/s2.png" data-index="2" width={150} height={150}/>
                <Image class="gallery-item gallery-item-3" src="/statics/images/s3.png" data-index="3" width={150} height={150}/>
                <Image class="gallery-item gallery-item-4" src="/statics/images/s4.png" data-index="4" width={150} height={150}/>
                <Image class="gallery-item gallery-item-5" src="/statics/images/s5.png" data-index="5" width={150} height={150}/>
                <Image class="gallery-item gallery-item-4" src="/statics/images/s6.png" data-index="4" width={150} height={150}/>
                <Image class="gallery-item gallery-item-5" src="/statics/images/s7.png" data-index="5" width={150} height={150}/>
              </div>
              <div class="gallery-controls"></div>
            </div>
            </div>
            
        </div>
    )
}

export default brand
