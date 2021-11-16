import React from 'react'
import Image from 'next/image'

function transport() {
    return (
        <div class="d-flex justify-content-center">

            <div>
                <Image src="/statics/images/logo1.png" width={400} height={200}/>
                <Image src="/statics/images/logo2.png" width={400} height={200}/>
                <Image src="/statics/images/logo3.png" width={400} height={200}/>
            </div>
            
        </div>
    )
}

export default transport
