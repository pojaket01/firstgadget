import React from 'react'

const Text = () => (
    <div 
        style={{
        color: 'white',
        }}
        class="p-5"
    >
        <div class="d-flex flex-column flex-wrap ">
            <div class="d-flex flex-row justify-content-around ">
                <div class="d-flex flex-column align-items-center ">
                    <h5>บริษัท เฟิร์สดิสทริบิวชัน จำกัด</h5> 
                    <p class="mb-0">เลขที่ xx หมู่ที่ xx ตำบล xx</p> 
                    <p>อำเภอหางดง จังหวัดเชียงใหม่ 50xxx</p> 
                    <p class="mb-0">เวลาทำการ จันทร์-เสาร์</p> 
                    <p class="mb-0">(ยกเว้นอาทิตย์ และนักขัตฤกษณ์)</p> 
                    <p>ตั้งแต่เวลา 09.00-18.00 น.</p> 
                    <p>โทรศัพท์ 09-1234-5678 หรือ 09-9876-5432</p> 
                </div>
                <div class="d-flex flex-column align-items-center ">
                    <h5>ช่วยเหลือ</h5>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">วิธีการสั่งซื้อสินค้า</a>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">วิธีการชำระเงิน</a>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">วิธีการผูกบัตรเครดิต</a>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">นโยบายการรับประกัน</a>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">นโยบายการคืนสินค้า</a>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">คำถามที่พบบ่อย</a>       
                </div>
                <div class="d-flex flex-column align-items-center ">
                    <h5>บริการ</h5>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">ติดต่อ First Gadget</a>
                </div>
                <div class="d-flex flex-column align-items-center ">
                    <h5>เกี่ยวกับเรา</h5>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">ติดต่อ First Gadget</a>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">ติดต่อเรา</a>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">นโยบายความเป็นส่วนตัว</a>
                    <a href="#" class="btn text-white text-center mb-0 p-0 ">นโยบายคุกกี้</a>
                </div>
            </div>
            <div>
                2020 Coppyright
            </div>
        </div>
    </div>
)

const color = () =>{}

function footer() {
    return (
        <div 
            style={{
            backgroundColor: '#01035c',
            }}
          >
            <Text/>
        </div>
    )
}

export default footer
