
import { useState } from "react";
import Employee from "../components/Employee";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";

function Employees() {


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
    <div className="min-h-screen bg-slate-200">
      <h1 className="text-2xl text-center my-3 font-semibold">Employee Information Storer</h1>
      <div className="container flex flex-wrap justify-center mt-3">


        {
          employees.map((employee) => {
            const editEmployee = <EditEmployee updateEmployee={updateEmployee} name={employee.name} role={employee.role} id={employee.id} />
            return (

              <Employee editEmployee={editEmployee} id={employee.id} name={employee.name} image={employee.image} role={employee.role} key={employee.id} />)

          })

        }
      </div>
      <div className="flex mx-auto" >
        <AddEmployee addEmployee={addEmployee} />
      </div>
    </div>
    </>
  );


}
export default Employees;
