import { useState } from "react";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";

function App() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Employee Name",
      image: "https://source.unsplash.com/200x200/?man,office",
      role: "Employee Role"
    }
  ])

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        let newEmployee = { ...employee, name: newName, role: newRole };
        return newEmployee;
      }
      return employee;
    });

    setEmployees(updatedEmployees);

  }

  function addEmployee(name, role, image) {
    let id = new Date().getTime();
    const newEmployee = {
      id: id,
      name: name,
      role: role,
      image: image
    }
    setEmployees([...employees, newEmployee]);
  }

  return (
    <>
      <h1 className="text-2xl text-center my-3 font-semibold">Employee Information Storer</h1>
      <div className="container flex flex-wrap justify-center mt-3">


        {
          employees.map((employee) => {

            return (

              <Employee updateEmployee={updateEmployee} id={employee.id} name={employee.name} image={employee.image} role={employee.role} key={employee.id} />)

          })

        }
      </div>
      <div className="flex mx-auto" >
        <AddEmployee addEmployee={addEmployee} />
      </div>
    </>
  );
}

export default App;
