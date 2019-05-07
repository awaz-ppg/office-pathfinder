using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]

    public class EmployeesController : ControllerBase
    {
        private const string CollectionName = "EmployeesCollection";
        private readonly ICosmosDbRepository<Employee> _repository;
        public EmployeesController(ICosmosDbRepository<Employee> repository)
        {
            _repository = repository;
        }
        [HttpPost("register")]
        public async Task<IActionResult> RegisterEmployee([FromBody] Employee employeeForRegister)
        {
            await _repository.InsertEntityAsync(CollectionName, employeeForRegister);

            return StatusCode(201);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Employee employeeDto)
        {
            employeeDto.id = Guid.Parse(id).ToString();
            await _repository.UpdateEntityAsync(CollectionName, id, employeeDto);
            return Ok();

        }

        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(string id)
        {
            await _repository.DeleteEntityAsync(CollectionName, id);
            return Ok();
        }

        
        [HttpGet]
        public List<Employee> GetEmployee()
        {
            var desks =
                 _repository.GetAllEntities(CollectionName);

            return desks;
        }
    }
}