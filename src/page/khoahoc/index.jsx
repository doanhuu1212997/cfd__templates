import React, { useEffect, useState } from "react";
import CourseList from "../../components/courseList";
import { useDispatch, useSelector } from "react-redux";
import { getCoures } from "../../redux/reducers/coureseReducers";
export default function Courses() {
  let dispatch = useDispatch();
  const khoahoc = useSelector((state) => state.coures);
  useEffect(() => {
    dispatch(getCoures());
  }, []);

  console.log(khoahoc.courses);
  return (
    <main className="homepage" id="main">
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">KHÓA HỌC CFD</h2>
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <CourseList
            offline={khoahoc.courses.data}
            online={khoahoc.courses.data}
          />
        </div>
      </section>
    </main>
  );
}
