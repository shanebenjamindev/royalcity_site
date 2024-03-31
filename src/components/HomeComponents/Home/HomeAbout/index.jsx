import React from "react";
import "./style.css";
export default function About() {
  return (
    <>
      <section className="bg-white">
        <div className="container">
          <div>
            <h2 className="text-center main__Title">ABOUT US</h2>
            <div className="outline"></div>
          </div>
          <div className="about__Container">
            <div className="about__Content about1">
              <iframe
                width={"100%"}
                height={"300px"}
                src="https://www.youtube.com/embed/pLs2SBd8pq0"
                title="Hội nghị chiến lượt &amp; phân phối sản phẩm Thắng Lợi Group năm 2022"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="about__Content about2">
              <h4 className="main__Title text-center">THẮNG LỢI GROUP</h4>
              <p>
                Chủ đầu tư Công ty TNHH BĐS Diamondland L.A là doanh nghiệp uy
                tín, dày dặn kinh nghiệm và có trụ sở ngay địa phương xã Đức
                Hòa, huyện Đức Hòa, Long An, hoạt động chủ yếu trong lĩnh vực
                kinh doanh, phát triển bất động sản và một số ngành nghề, dịch
                vụ liên quan.
              </p>
              <p>
                Các dự án do Thắng lợi phát triển mở ra những không gian sống
                mới, thay đổi bộ mặt cảnh quan cũng như tạo nên những giá trị
                sống hoàn hảo mà bất kì khách hàng nào cũng đều có thể cảm nhận,
                điều mà không nhiều dự án BĐS nào khác có thể làm được.
              </p>
              <div className="">
                <h5 className="main__p">Hotline: 0987881919</h5>
                <h5 className="main__p">mail: pnguyennha@gmail.com</h5>
              </div>
            </div>
            <div className="about__Content about3">
              <img src="/img/hoinghi1.jpg" />
            </div>
            <div className="about__Content about4">
              <img src="/img/hoinghi2.jpg" />
            </div>
          </div>
        </div>
      </section>
      <div>
        <img width="100%" src="/img/ceo.jpg" />
      </div>
    </>
  );
}
