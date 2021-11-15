import Image from 'next/image'
import React from 'react'



const Searchbar = () => (
    <div class="w-50 p-3">
        <div class="d-flex flex-row align-items-center justify-content-around ">
            <form class="form-inline d-flex flex-row align-items-center ">
                <div class="mb-3 mt-3 p-2">
                    <input type="search" class="form-control" placeholder="ค้นหาสินค้า"/>
                </div>
                <button class="btn btn-outline-success my-2 my-sm-0 h-25" type="submit" >ค้นหา</button>   
            </form>
            <Image src="/statics/images/logo.png" width={117.6} height={63.4}/> 
            <div class="btn-group">
                <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    หมวดหมู่สินค้า
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">นาฬิกาสมาร์ทวอช</a></li>
                    <li><a class="dropdown-item" href="#">ลำโพง และหูฟัง</a></li>
                    <li><a class="dropdown-item" href="#">อุปกรณ์สมาร์ทโฮม</a></li>
                    <li><a class="dropdown-item" href="#">ไลฟ์สไตล์ และแกตเจ็ต</a></li>
                    <li><a class="dropdown-item" href="#">อุปกรณ์ใช้ในบ้าน</a></li>
                    <li><a class="dropdown-item" href="#">เกม</a></li>
                    <li><a class="dropdown-item" href="#">อุปกรณ์ออกกำลังกาย</a></li>
                    <li><a class="dropdown-item" href="#">อุปกรณ์สำหรับสัตว์เลี้ยง</a></li>
                    <li><a class="dropdown-item" href="#">อุปกรณ์เพื่อสุขภาพ</a></li>
                </ul>
                <div>
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
        <div class="d-flex justify-content-around ">
            <Searchbar/>
        </div>
    )
}

export default header
