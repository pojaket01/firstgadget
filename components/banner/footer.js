import React from 'react'

const Text = () => (
    <div 
        style={{
        color: 'white',
        }}
        class="p-2"
    >
        <div class="d-flex flex-column flex-wrap ">
            <div class="d-flex flex-row justify-content-between m-5">
                <div class="d-flex flex-column align-items-center ">
                    <h5>บริษัท เฟิร์สดิสทริบิวชัน จำกัด</h5> 
                    <p class="mb-0">เลขที่ xx หมู่ที่ xx ตำบล xx</p> 
                    <p>อำเภอหางดง จังหวัดเชียงใหม่ 50xxx</p> 
                    <p class="mb-0">เวลาทำการ จันทร์-เสาร์</p> 
                    <p class="mb-0">(ยกเว้นอาทิตย์ และนักขัตฤกษณ์)</p> 
                    <p>ตั้งแต่เวลา 09.00-18.00 น.</p> 
                    <p>โทรศัพท์ 09-1234-5678 หรือ 09-9876-5432</p> 
                </div>
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column px-2">
                        <h5>ช่วยเหลือ</h5>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">วิธีการสั่งซื้อสินค้า</a>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">วิธีการชำระเงิน</a>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">วิธีการผูกบัตรเครดิต</a>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">นโยบายการรับประกัน</a>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">นโยบายการคืนสินค้า</a>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">คำถามที่พบบ่อย</a>       
                    </div>
                    <div class="d-flex flex-column px-2">
                        <h5>บริการ</h5>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">ติดต่อ First Gadget</a>
                    </div>
                    <div class="d-flex flex-column px-2">
                        <h5>เกี่ยวกับเรา</h5>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">ติดต่อ First Gadget</a>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">ติดต่อเรา</a>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">นโยบายความเป็นส่วนตัว</a>
                        <a href="#" class="btn text-white text-start mb-0 p-0 ">นโยบายคุกกี้</a>
                    </div>
                </div>
                
            </div>
                <hr />
            <div class="d-flex justify-content-between p-2">
                
                <div>
                    © 2020 Coppyright
                </div>
                <div class="d-flex align-items-center">
                    <p class="mx-3 mb-0"> ติดต่อเรา </p>
                    <svg class="mx-1 mb-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" style={{fill:"#000000"}} ><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path></svg>
                    <svg class="mx-1 mb-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" style={{fill:"#000000"}}><path fill="#f4511e" d="M36.683,43H11.317c-2.136,0-3.896-1.679-3.996-3.813l-1.272-27.14C6.022,11.477,6.477,11,7.048,11 h33.904c0.571,0,1.026,0.477,0.999,1.047l-1.272,27.14C40.579,41.321,38.819,43,36.683,43z"></path><path fill="#f4511e" d="M32.5,11.5h-2C30.5,7.364,27.584,4,24,4s-6.5,3.364-6.5,7.5h-2C15.5,6.262,19.313,2,24,2 S32.5,6.262,32.5,11.5z"></path><path fill="#fafafa" d="M24.248,25.688c-2.741-1.002-4.405-1.743-4.405-3.577c0-1.851,1.776-3.195,4.224-3.195 c1.685,0,3.159,0.66,3.888,1.052c0.124,0.067,0.474,0.277,0.672,0.41l0.13,0.087l0.958-1.558l-0.157-0.103 c-0.772-0.521-2.854-1.733-5.49-1.733c-3.459,0-6.067,2.166-6.067,5.039c0,3.257,2.983,4.347,5.615,5.309 c3.07,1.122,4.934,1.975,4.934,4.349c0,1.828-2.067,3.314-4.609,3.314c-2.864,0-5.326-2.105-5.349-2.125l-0.128-0.118l-1.046,1.542 l0.106,0.087c0.712,0.577,3.276,2.458,6.416,2.458c3.619,0,6.454-2.266,6.454-5.158C30.393,27.933,27.128,26.741,24.248,25.688z"></path></svg>
                </div>
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
