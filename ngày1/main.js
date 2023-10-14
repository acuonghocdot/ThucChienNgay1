var btn_Size = document.querySelectorAll(".card_size span");
var btn_Color = document.querySelectorAll(".card_color span");
var btn_action = document.querySelectorAll(".card__action li");
var body = document.querySelector("#Product_Card")
console.log(body)

class DonHang {
    constructor(Size, Color,) {
        this.Size = Size
        this.Color = Color
    }
}
class SoLuongDatHang {
    constructor(SoLuong) {
        this.SoLuong = SoLuong
    }
}
const setupSizeClickHandlers = () => {
    let ThongTinSize;
    let Mau;
    let n = 0;
    let SoLuong;
    btn_Size.forEach(cb => {
        cb.addEventListener("click", () => {
            var btn_Check = document.querySelector(".Color_btn");
            if (btn_Check) {
                btn_Check.classList.remove("Color_btn");
            }
            ThongTinSize = cb.textContent
            cb.classList.add("Color_btn");
        });
        btn_Color.forEach(cb => {
            cb.addEventListener("click", () => {
                Mau = cb.className
            });
        });
    });

    btn_action.forEach(cb => {
        cb.addEventListener("click", () => {
            if (cb.textContent == 'Buy Now') {
                SoLuong = 1;
                let ThongTin = new DonHang(ThongTinSize, Mau)
                ThanhToanDonHang(ThongTin, SoLuong)
            }
            else if (cb.textContent == "add Cart") {
                n++
                let ThongTin = new DonHang(ThongTinSize, Mau)
                SoLuong = new SoLuongDatHang(n);
                if (cb.textContent == 'Buy Now') {
                    ThanhToanDonHang(ThongTin, SoLuong)
                }
            }
        })
    })


}



const ThanhToanDonHang = (ThongTin, SoLuong) => {
    console.log(SoLuong)
    body.innerHTML = `<h1>Thanh Toán Thành Công</h1> <p class="thongbao">Bạn Đã Mua Thành Công Đơn Hàng</p></br>
    <div class ="thongbao">
    <i> Màu${ThongTin.Color}</i><br>
    <i> Size Giày ${ThongTin.Size}</i><br>
    <i> Số Lượng Là ${SoLuong}</i><br>
    </div>
    
    `

}
setupSizeClickHandlers()
// export default { setupSizeClickHandlers, ThanhToanDonHang };
