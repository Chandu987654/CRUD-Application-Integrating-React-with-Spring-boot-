package restapi.example.Restapimethods.repo;

import org.springframework.data.repository.CrudRepository;

import restapi.example.Restapimethods.Employee.Employee;

public interface EmployeeRepo extends CrudRepository<Employee, Integer> {
}
