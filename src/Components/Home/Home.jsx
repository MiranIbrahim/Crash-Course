import { LuDollarSign } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
import { useEffect, useState } from "react";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div id="main-body">
      <h1 className="text-4xl font-bold text-center">Course Registration</h1>
      <div id="home-container">
        <div id="card-container" className="flex flex-wrap gap-4">
          {courses.map((course) => (

            <div
              id="card"
              key={course.id}
              className="w-80 p-4 rounded bg-white mt-8 border"
            >
              <figure className="mb-4">
                <img
                  className="rounded-lg"
                  src={course.img}
                  alt=""
                />
              </figure>
              <h3 className="font-bold text-lg">
                {course.course_name}
              </h3>
              <p className="text-gray-600">
                {course.detail}
              </p>
              <div className="flex justify-around items-center text-lg">
                <LuDollarSign className="font-bold text-gray-800 "></LuDollarSign>
                <p className="text-gray-600">Price : {course.price} </p>
                <BsBook></BsBook>
                <p className="text-gray-600">Credit : {course.credit}hr</p>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-blue-600 text-white w-full p-2 rounded font-semibold">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Home;
