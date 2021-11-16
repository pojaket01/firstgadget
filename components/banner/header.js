import Image from 'next/image'
import React from 'react'

const Searchbar = () => (
    <div class="w-100 p-3">
        <div class="d-flex flex-row align-items-center justify-content-around ">
            <form class="form-inline d-flex flex-row align-items-center ">
                <div class="mb-3 mt-3 p-2">
                    <input type="search" class="form-control" placeholder=" ค้นหาสินค้าที่คุณต้องการช้อป" style={{width:"15vw"}}/>
                </div>
            </form>
            <Image src="/statics/images/logo.png" width={150} height={85}/> 
            <div class="btn-group">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <a class="btn " href="#">เข้าสู่ระบบ</a>
                    |
                    <a class="btn " href="#">สมัครสมาชิก</a>
                </div>
            </div>
        </div>
    </div>
    
)




function header() {
    return (
            <Searchbar/>
    )
}

export default header
