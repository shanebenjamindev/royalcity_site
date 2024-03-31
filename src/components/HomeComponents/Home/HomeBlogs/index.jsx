import React from "react";
import "./blogs.css";

export default function HomeBlogs() {
  return (
    <section className="position-relative">
      <div className="section__Background-Secondary"></div>
      <div className="container">
        <div className="text-center">
          <h2 className="main__Title">Mô hình Dịch vụ phòng</h2>
          <div className="outline" />
        </div>

        <div className="row event__Container align-items-center">
          <div className="event__Content col-lg-6 col-sm-12 ">
            <div
              className="event__Item "
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="event__Img">
                <img width="100%" src="/img/decoroom2.png" alt="" />
                <div className="event__Text">
                  <h2 className="main__Title bg-white">Đảm bảo</h2>
                  <h3 className="main__p text-white bg-warning">Riêng tư</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="event__Content col-lg-6 col-sm-12">
            <div
              className="event__Item"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="event__Img">
                <img width="100%" src="/img/decoroom4.png" alt="" />
                <div className="event__Text">
                  <h2 className="main__Title bg-white">Không gian</h2>
                  <h3 className="main__p text-white bg-warning">Thoáng mát</h3>
                </div>
              </div>
            </div>

            <div
              className="event__Item"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="event__Img">
                <img width="100%" src="/img/decoroom3.png" alt="" />

                <div className="event__Text">
                  <h2 className="main__Title bg-white">Tiện ích</h2>
                  <h3 className=" main__p text-white bg-warning">
                    đáp ứng đầy đủ vật chất
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
