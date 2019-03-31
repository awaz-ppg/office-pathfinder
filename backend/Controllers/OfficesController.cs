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
    public class OfficesController : ControllerBase
    {
       private readonly DataContext _repo;
        public OfficesController(DataContext context)
        {
            _repo = context;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterOffice([FromBody] OfficeForRegister officeForRegisterDto)
        {

            var officeToCreate = new Office
            {
                officeName = officeForRegisterDto.officeName,
                officeNumber = officeForRegisterDto.officeNumber,
                employeeId = officeForRegisterDto.employeeId,
                guestId = officeForRegisterDto.guestId
            };

            await _repo.Offices.AddAsync(officeToCreate);
            await _repo.SaveChangesAsync();
        
            return StatusCode(201);
        }



        // PUT api/Offices/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] OfficeForEdit officeDto)
        {
            var office = await _repo.Offices.FirstOrDefaultAsync(x => x.Id == id); //returns a single item.
            if(office != null)
            {
            if(office.officeName != officeDto.officeName && officeDto.officeName != null) office.officeName = officeDto.officeName;
            if(office.officeNumber != officeDto.officeNumber && officeDto.officeNumber != null) office.officeNumber = officeDto.officeNumber;
            if(office.employeeId != officeDto.employeeId && officeDto.employeeId != 0 ) office.employeeId = officeDto.employeeId;
            if(office.guestId != officeDto.guestId && officeDto.guestId != 0 ) office.guestId = officeDto.guestId;
            _repo.Offices.Update(office);
            await _repo.SaveChangesAsync();
            
            return Ok();
            }
            return BadRequest();
        }

        // DELETE api/Offices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOffice(int id)
        {
            var officeToRemove = await _repo.Offices.FirstOrDefaultAsync(x => x.Id == id); //returns a single item.
        
            if(officeToRemove != null) {
                _repo.Offices.Remove(officeToRemove);
                _repo.SaveChanges();
                return Ok();
            }
            return BadRequest();
        
        }

        // GET api/Offices
        [HttpGet]
        public async Task<IActionResult> GetOffices()
        {
            var offices = await _repo.Offices.ToListAsync();

            return Ok(offices);
        }

        // GET api/Offices/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOffice(int id)
        {
            var office = await _repo.Offices.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(office);
        }
    }
}