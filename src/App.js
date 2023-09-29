import { useState } from "react";
import Employee from "./components/Employee";

function App() {

  const [employees, setEmployees] = useState([
    {
      name: "Name 1",
      image: "https://source.unsplash.com/200x200/?man,office",
      role: "Software Engineer"
    },
    {
      name: "Name 2",
      image: "https://source.unsplash.com/200x200/?man,office",
      role: "Software Engineer"
    },
    {
      name: "Name 3",
      image: "https://source.unsplash.com/200x200/?man,office",
      role: "Software Engineer"
    },
    {
      name: "Name 4",
      image: "https://source.unsplash.com/200x200/?man,office",
      role: "Software Engineer"
    },
    {
      name: "Name 5",
      image: "https://source.unsplash.com/200x200/?man,office",
      role: "Software Engineer"
    },
    {
      name: "Name 6",
      image: "https://source.unsplash.com/200x200/?man,office",
      role: "Software Engineer"
    },
  ])

  return (
    <>
      <h1 className="text-2xl text-center my-3 font-semibold">Employee Information Storer</h1>
    <div className="container flex flex-wrap justify-center mt-3">


      {
        employees.map((employee, index) => {

          return (

          <Employee name={employee.name} image={employee.image} role={employee.role} key={index}/>)

        })

        }
      </div>
    </>
  );
}

export default App;
