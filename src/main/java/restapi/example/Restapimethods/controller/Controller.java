package restapi.example.Restapimethods.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import restapi.example.Restapimethods.Employee.Employee;
import restapi.example.Restapimethods.repo.EmployeeRepo;

@RestController
public class Controller
{
	@Autowired
	EmployeeRepo repo;
	
	 @GetMapping("/employees")
	    public Iterable<Employee> getValues() {
			
			return repo.findAll();
		}
	

	 @PostMapping("/insert")
	 public Employee addvalues(@RequestBody Employee emp) {
	     repo.save(emp);
	     return emp;
	 }
     
	 @DeleteMapping("/delete/{id}")
	 public String delete(@PathVariable(name = "id") Integer id) {
	     try {
	         repo.deleteById(id);
	         return "Employee with ID " + id + " deleted successfully.";
	     } catch (Exception e) {
	         return "Error deleting employee with ID " + id + ": " + e.getMessage();
	     }
	 }
      
	 @PutMapping("/update/{id}")
	 public ResponseEntity<?> update(@PathVariable(name = "id") Integer id, @RequestBody Map<String, String> requestBody) {
	     if (!repo.existsById(id)) {
	         return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee with ID " + id + " not found");
	     }

	     String newName = requestBody.get("name");
	     Employee employee = repo.findById(id).orElseThrow(() -> new RuntimeException("Employee not found with ID: " + id));
	     employee.setEname(newName); 
	     repo.save(employee);

	     return ResponseEntity.ok("Name updated successfully");
	 }
     // this request parameter is used to bind the url requests from web browser to our method variables
	 // for this Request param we use ? for representing query 
	 @GetMapping("/students")
     public String stud(@RequestParam(name="firstname") String firstname)
     {
    	 return firstname;
     }
	
	 
	 //similarly we use path variable to bind the url template path to the method variables 
	 @GetMapping("{firstname}")
     public String studen(@PathVariable("firstname") String firstname)
     {
    	 return firstname;
     }
	
}

