/* eslint-disable react/prop-types */
const Cart = ({selectedCourses, remaining, totalCost}) => {

    

  return (
    <div>
      <div className="pb-4 border-b-2 border-gray-300">
        <h4 className="font-semibold">Credit Hour Remaining {remaining} hr</h4>
      </div>
      <div className="mt-2 pb-2 border-b-2 border-gray-300">
      <h2 className="text-xl font-bold">Course Name</h2>
      <ol className="list-decimal pl-4">
      {
        selectedCourses.map(course =>(
            <li key={course.id}>{course.course_name}</li>
        ))
      }
      </ol>
      </div>
      <div className="mt-2 pb-2 border-b-2 border-gray-300 font-semibold">
        <p>Total Credit Hour : {20-remaining} </p>
      </div>
      <div className="mt-2 pb-2 border-b-2 border-gray-300 font-semibold">
        <p>Total Price : {totalCost}  Taka</p>
      </div>

    </div>
  );
};

export default Cart;
