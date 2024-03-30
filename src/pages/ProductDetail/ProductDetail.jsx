import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actRoomDetail } from "../../redux/actions/actDetail";
import "./style.css";
import DateRangeForm from "../../components/HomeComponents/Detail/DateRangeForm";
import Comfort from "../../components/HomeComponents/Detail/Comfort";
import Comments from "../../components/HomeComponents/Detail/Comments";
import { useCheckRole } from "../../hooks/useCheckRole";
import Loading from "../../components/Loading";

export default function ProductDetail() {
  const param = useParams();
  const dispatch = useDispatch();
  const user = useCheckRole();
  const { id } = param;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actRoomDetail(id));
  }, [id]);
  const { loading, data } = useSelector((state) => state.detailReducer);

  if (loading) {
    <>
      <Loading />
    </>;
  }
  const renderRoom = () => {
    return (
      <>
        {data && (
          <div className="mb-4 container-fluid d-flex justify-content-center">
            <div className="section__Image text-center ">
              <img
                alt="roomImage"
                className="rounded rounded-lg"
                src={data.hinhAnh}
              />
            </div>
          </div>
        )}
      </>
    );
  };

  if (loading) {
    return <>loading...</>;
  }

  return (
    <>
      {data && (
        <div className="">
          <div className="section__Background">
            <div className="section__BackgroundTitle flex-column thanks-message">
              <div className="">Phòng số: {data.id}</div>
              <div>
                <h2 className=""> {data.tenPhong} </h2>
              </div>
            </div>
          </div>
          <div className="section__Content-primary">
            <div className="section__Item-primary px-lg-5">
              <h2 className="main__Title"> {data.tenPhong} </h2>
              <p>
                {data.khach} khách . {data.phongNgu} phòng ngủ . {data.phongTam}{" "}
                phòng tắm .
              </p>
              {renderRoom()}
              <div className="d-flex container  flex-wrap">
                <div className="col-lg-8 col-md-7 col-sm-12">
                  <div className="section__Info  d-flex justify-content-between">
                    <div>
                      <h2>Phòng trong nhà. Chủ nhà Gene</h2>
                    </div>
                    <div>
                      <img
                        width="80px"
                        alt="avatar"
                        src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
                      />
                    </div>
                  </div>

                  <hr />

                  <div className="p-2">
                    <div>
                      <h5>Sungwon là Chủ nhà siêu cấp</h5>
                      Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được
                      đánh giá cao và là những người cam kết mang lại quãng thời
                      gian ở tuyệt vời cho khách.
                    </div>

                    <div>
                      <h5>Địa điểm tuyệt vời</h5>
                      90% khách gần đây đã xếp hạng 5 sao cho vị trí này.
                    </div>

                    <h5>Miễn phí hủy trong 48 giờ.</h5>
                  </div>

                  <hr />

                  <div>
                    <div>
                      <img
                        className="my-3"
                        alt=""
                        width="150px"
                        src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                      />
                    </div>
                    <div>
                      Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp
                      Chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác
                      và những vấn đề khác như sự cố trong quá trình nhận phòng.
                    </div>
                    <div>
                      <a href="/">Tìm hiểu thêm</a>
                    </div>
                  </div>

                  <hr />

                  <div>
                    Một số thông tin đã được dịch tự động.Hiển thị ngôn ngữ gốc
                    Nhà nghỉ thôn dã hình lưỡi liềm trong một ngôi làng nghệ
                    thuật gốm hai nghìn năm. Một ngôi nhà nguyên khối lớn với
                    sân thượng ba tầng của Bảo tàng Văn hóa Guitar Serra, nổi
                    tiếng với mặt tiền đặc sắc trong một ngôi làng nghệ thuật
                    gốm hai nghìn năm pha trộn rất tốt với thiên nhiên. Tận
                    hưởng kỳ nghỉ dưỡng sức cảm xúc thư giãn trong một căn phòng
                    ấm cúng, chào... Hiển thị thêm
                  </div>

                  <hr />

                  {/**data */}
                  <Comfort data={data} />
                </div>

                <div className="section__Checkout col-lg-4 col-md-5 col-sm-12 mt-4 mt-md-0 ">
                  <DateRangeForm detail={data} user={user} />
                </div>
              </div>

              <div className="bg-white container">
                <Comments data={data} user={user} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
