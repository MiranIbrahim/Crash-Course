# Projects Features: 
 1. In this project user can select multiple item to keep it to the cart.
 2. Items will not be added to the cart repeatedly.
 3. Total cost and credit hours are calculating dynamically.
 4. A toast will be notified while adding same item in the card and total credit hour crossed over 20hrs


# Managing State in the Assignment
 ### 1. Importing dependencies : 
        I used `useState` hook to manage state and `useEffect` hook to fetch data from the data.json file. 
        so that i import those hooks from `react` library.
### 2. Initializing states according to the project requirement : 
        `useState` returns a variable and a function. The variable can contain an array or any value initially.
### 3. Updating the states using the function :
        setFunction is used to update the state
### 4. Using State in JSX :
        `<Cart 
            totalCost={totalCost}
            remaining={remaining}
            selectedCourses={selectedCourses}
            >
        </Cart>`