import React from 'react'

const Nav = () =>(
    <div
        style={{
        backgroundColor: '#E6E6E6',
        height: '25vw',
        width: '10vw',
        borderRadius: '20px',
        paddingTop: '35px'
        }}
        class=" "
    >
        <div>
            <h6 class="text-center"><b>หมวดหมู่สินค้า</b></h6>
            <div class="text-left">
                <a class="dropdown-item" href="#">นาฬิกาสมาร์ทวอช</a>
                <a class="dropdown-item" href="#">ลำโพง และหูฟัง</a>
                <a class="dropdown-item" href="#">อุปกรณ์สมาร์ทโฮม</a>
                <a class="dropdown-item" href="#">ไลฟ์สไตล์ และแกตเจ็ต</a>
                <a class="dropdown-item" href="#">อุปกรณ์ใช้ในบ้าน</a>
                <a class="dropdown-item" href="#">เกม</a>
                <a class="dropdown-item" href="#">อุปกรณ์ออกกำลังกาย</a>
                <a class="dropdown-item" href="#">อุปกรณ์สำหรับสัตว์เลี้ยง</a>
                <a class="dropdown-item" href="#">อุปกรณ์เพื่อสุขภาพ</a>
            </div>
        </div>
        
    </div>
)

function sidenav() {
    return (
        <div>
            <Nav/>
        </div>
    )
}

export default sidenav
