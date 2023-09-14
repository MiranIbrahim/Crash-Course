import { LuDollarSign } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCost, setTotalCost] = useState(0);

  const hr = 20;

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectedCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id == course.id);
    let courseTime = course.credit;
    let cost = course.price;
    if (isExist) {
      return alert("This course is already in the cart");
    } else {
      selectedCourses.forEach((item) => {
        courseTime += item.credit;
        cost +=item.price;
      });
      const remaining = hr - courseTime;
      if (remaining < 0) {
        alert("You can not set courses over 20 hr");
      } else {
        setTotalCost(cost);
        setRemaining(remaining);
        const newSelectedCourse = [...selectedCourses, course];
        setSelectedCourses(newSelectedCourse);
      }
    }
  };
  return (
    <div id="main-body">
      <h1 className="text-4xl font-bold text-center">Course Registration</h1>
      <div id="home-container" className="mt-8 flex gap-16">
        <div id="card-container" className="grid grid-cols-3 gap-16 w-3/4">
          {courses.map((course) => (
            <div
              id="card"
              key={course.id}
              className="w-72 p-4 rounded bg-white mb-3 border"
            >
              <figure className="mb-4">
                <img className="rounded-lg w-full" src={course.img} alt="" />
              </figure>
              <h3 className="font-bold text-lg">{course.course_name}</h3>
              <p className="text-gray-600">{course.detail}</p>
              <div className="flex justify-around items-center text-lg">
                <LuDollarSign className="font-bold text-gray-800 "></LuDollarSign>
                <p className="text-gray-600">Price : {course.price} </p>
                <BsBook></BsBook>
                <p className="text-gray-600">Credit : {course.credit}hr</p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => handleSelectedCourse(course)}
                  className="bg-blue-600 text-white w-full p-2 rounded font-semibold"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
        <div id="cart-container" className="w-1/4 pl-7">
          <Cart 
          totalCost={totalCost}
          remaining={remaining}
          selectedCourses={selectedCourses}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
