import { LuDollarSign } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        toast.error('Already you added this course');
    } else {
      selectedCourses.forEach((item) => {
        courseTime += item.credit;
        cost +=item.price;
      });
      const remaining = hr - courseTime;
      if (remaining < 0) {
        toast.error("You can not set courses over 20 hr");
      } else {
        setTotalCost(cost);
        setRemaining(remaining);
        const newSelectedCourse = [...selectedCourses, course];
        setSelectedCourses(newSelectedCourse);
      }
    }
  };
  return (
    <div id="main-body" className="mx-auto">
        <ToastContainer />
      <h1 className="text-4xl font-bold text-center">Course Registration</h1>
      <div id="home-container" className="mt-8 flex gap-8">
        <div id="card-container" className="max-w-3/4 grid grid-cols-3 gap-4 mx-auto">
          {courses.map((course) => (
            <div
              id="card"
              key={course.id}
              className="w-64 p-4 rounded bg-white mb-3 border"
            >
              <figure className="mb-4">
                <img className="rounded-lg w-full" src={course.img} alt="" />
              </figure>
              <h3 className="font-bold text-lg">{course.course_name}</h3>
              <p className="text-gray-600">{course.detail}</p>
              <div className="flex justify-around items-center">
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
        <div id="cart-container" className="w-1/4 mx-auto">
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
