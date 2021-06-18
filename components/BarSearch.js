import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";

const BarSearch = (prop) => {
  const { t, lang } = useTranslation("common");
  const [showOption, setShowOption] = useState(false);
  const showmore = () => setShowOption(!showOption);
  return (
    <form method="get" action="/search">
      <div className={prop.isIndex ? `pt-3` : `pt-3 pb-3 bg-red`}>
        <div
          className={
            prop.isIndex
              ? `container form-header for-index bg-red`
              : `container form-header`
          }
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="m-2" style={{ flex: " 1 0 auto" }}>
              <select
                id=""
                name=""
                className="form-control"
                style={{ fontSize: 14 }}
              >
                <option value="">
                  {t("sell")}-{t("rent")}
                </option>
              </select>
            </div>
            <div className="m-2" style={{ flex: " 1 0 auto" }}>
              <select
                id=""
                name=""
                className="form-control"
                style={{ fontSize: 14 }}
              >
                <option value="">ประเภท</option>
              </select>
            </div>
            <div className="m-2" style={{ flex: " 2 0 auto" }}>
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                placeholder="ทำเล"
              />
            </div>
            <div className="m-2" style={{ flex: " 1 0 auto" }}>
              <select id="" name="" className="form-control">
                <option value="">ราคา</option>
              </select>
            </div>
            <div className="m-2" style={{ flex: " 1 0 auto" }}>
              <button
                id="btnmore"
                name="btnmore"
                type="button"
                className="btn btn-more"
                onClick={showmore}
              >
                เพิ่มเติม <i className="fas fa-angle-down"></i>
              </button>
            </div>
            <div className="m-2" style={{ flex: " 1 0 auto" }}>
              <button
                type="submit"
                id="btnsubmit"
                name="btnsubmit"
                className="btn-search-subimit"
                style={{ marginTop: 0 }}
              >
                {t("search")}
              </button>
            </div>
          </div>
          {showOption && (
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="m-2" style={{ flex: " 1 0 auto" }}>
                  <select
                    id=""
                    name=""
                    className="form-control"
                    style={{ fontSize: 14 }}
                  >
                    <option value="">ห้องนอน</option>
                    <option value="">1 ห้องนอน</option>
                    <option value="">2 ห้องนอน</option>
                    <option value="">3 ห้องนอน</option>
                    <option value="">มากกว่า 3 ห้องนอน</option>
                  </select>
                </div>
                <div className="m-2" style={{ flex: " 1 0 auto" }}>
                  <select
                    id=""
                    name=""
                    className="form-control"
                    style={{ fontSize: 14 }}
                  >
                    <option value="">ห้องน้ำ</option>
                    <option value="">1 ห้องน้ำ</option>
                    <option value="">2 ห้องน้ำ</option>
                    <option value="">3 ห้องน้ำ</option>
                    <option value="">มากกว่า 3 ห้องน้ำ</option>
                  </select>
                </div>
                <div className="m-2" style={{ flex: " 1 0 auto" }}>
                  <select
                    id=""
                    name=""
                    className="form-control"
                    style={{ fontSize: 14 }}
                  >
                    <option value="">เฟอร์นิเจอร์</option>
                  </select>
                </div>
                <div className="m-2" style={{ flex: " 1 0 auto" }}>
                  <select
                    id=""
                    name=""
                    className="form-control"
                    style={{ fontSize: 14 }}
                  >
                    <option value="">ขนาดพื้นที่ใช้สอย</option>
                  </select>
                </div>
                <div className="m-2" style={{ flex: " 1 0 auto" }}>
                  <select
                    id=""
                    name=""
                    className="form-control"
                    style={{ fontSize: 14 }}
                  >
                    <option value="">ประกาศเมื่อ</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
        <style jsx>
          {`
            .form-control {
              font-size: 14px;
            }
            .btn-more {
              border: 1px solid #fff;
              font-size: 14px;
              width: 100%;
            }
            .for-index {
              border-radius: 10px;
              top: -45px;
              position: relative;
              z-index: 1;
              padding: 15px;
            }
          `}
        </style>
      </div>
    </form>
  );
};

export default BarSearch;
