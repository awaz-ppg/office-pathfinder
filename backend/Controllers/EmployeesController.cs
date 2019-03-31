using System;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
       private readonly DataContext _repo;
        public EmployeesController(DataContext context)
        {
            _repo = context;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterEmployee([FromBody] EmployeeForRegister employeeForRegisterDto)
        {

            var employeeToCreate = new Employee
            {
                employeeName = employeeForRegisterDto.employeeName,
                employeeSurname = employeeForRegisterDto.employeeSurname,
                employeePosition = employeeForRegisterDto.employeePosition,
                placeId = employeeForRegisterDto.placeId
            };

            await _repo.Employees.AddAsync(employeeToCreate);
            await _repo.SaveChangesAsync();
        
            return StatusCode(201);
        }



        // PUT api/Employees/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] EmployeeForEdit employeeDto)
        {
            var employee = await _repo.Employees.FirstOrDefaultAsync(x => x.Id == id); //returns a single item.
            if(employee != null)
            {
            if(employee.employeeName != employeeDto.employeeName && employeeDto.employeeName != null) employee.employeeName = employeeDto.employeeName;
            if(employee.employeeSurname != employeeDto.employeeSurname && employeeDto.employeeSurname != null) employee.employeeSurname = employeeDto.employeeSurname;
            if(employee.employeePosition != employeeDto.employeePosition && employeeDto.employeePosition != null) employee.employeePosition = employeeDto.employeePosition;
            if(employee.placeId != employeeDto.placeId && employeeDto.placeId != 0 ) employee.placeId = employeeDto.placeId;
            _repo.Employees.Update(employee);
            await _repo.SaveChangesAsync();
            
            return Ok();
            }
            return BadRequest();
        }

        // DELETE api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employeeToRemove = await _repo.Employees.FirstOrDefaultAsync(x => x.Id == id); //returns a single item.
        
            if(employeeToRemove != null) {
                _repo.Employees.Remove(employeeToRemove);
                _repo.SaveChanges();
                return Ok();
            }
            return BadRequest();
        
        }

        // GET api/Employees
        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            var employees = await _repo.Employees.ToListAsync();

            return Ok(employees);
        }

        // GET api/Employees/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployee(int id)
        {
            var employee = await _repo.Employees.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(employee);
        }
    }
}