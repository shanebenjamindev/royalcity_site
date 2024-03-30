import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actCityDetail } from "../../redux/actions/actDetail";
import "./style.css";
import { NodeIndexOutlined } from "@ant-design/icons";
import Loading from "../../components/Loading";

export default function CityDetail() {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actCityDetail(param.id));
  }, [param.id]);
  const { loading, data, error } = useSelector(
    (state) => state.cityDetailReducer
  );

  const descriptionStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    whiteSpace: "normal",
  };
  const renderRoomByCity = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <div>Error 404</div>;
    } else if (data) {
      return data.map((room, index) => (
        <div
          key={index}
          className="col-lg-3 col-sm-6 my-2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <Link to={`/roomdetail/${room.id}`} key={index}>
            <div className="custom__RoomCard">
              <div className="card__Top">
                <img
                  src={room.hinhAnh}
                  alt="img"
                  height={"100px"}
                  width={"100%"}
                />

                <h5 className="card__Title" style={descriptionStyle}>
                  {room.tenPhong}
                </h5>
                <div style={descriptionStyle}>
                  <p>{room.moTa}</p>
                  <p>Guest: {room.khach}</p>
                </div>
              </div>

              <div className="card__Bottom text-left">
                <b>Giá: {room.giaTien}$</b>
              </div>
            </div>
          </Link>
        </div>
      ));
    } else {
      return <div>No rooms available</div>;
    }
  };

  const renderCount = () => {
    if (data?.length === 0) {
      return <div>Hiện không có chỗ ở</div>;
    } else return <div>Hiện có {data?.length} chỗ ở </div>;
  };

  return (
    <section>
      <div className="section__Background">
        <div className="section__BackgroundTitle">
          <h2 className="thanks-message">List Rooms</h2>
        </div>
      </div>
      <div className="section__Item-secondary" style={{ height: "100dvh" }}>
        <div className="d-md-flex">
          <div className="col-sm-12 col-lg-8 col-md-6">
            <div className="d-flex justify-content-between">
              <div>{renderCount()}</div>
              <button className="btn btn-light d-flex align-items-center">
                <NodeIndexOutlined />
                Bộ lọc
              </button>
            </div>
            <div className="d-md-flex">{renderRoomByCity()}</div>
          </div>
          <div className="map__Container col-sm-12 col-lg-4 col-md-6">
            <iframe
              className="map__Content"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.835874782257!2d106.68809554999999!3d10.7568982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1svi!2s!4v1664300539026!5m2!1svi!2s"
              height={500}
              frameBorder={0}
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="intro__Video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
