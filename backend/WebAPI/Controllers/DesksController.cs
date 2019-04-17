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
    
    public class DesksController : ControllerBase
    {
       private readonly DataContext _repo;
        public DesksController(DataContext context)
        {
            _repo = context;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterDesk([FromBody] DeskForRegistration deskForRegisterDto)
        {

            var deskToCreate = new Desk
            {
                FirstName = deskForRegisterDto.FirstName,
                LastName = deskForRegisterDto.LastName,
                NumberDesk = deskForRegisterDto.NumberDesk,
                IsCoordinator = deskForRegisterDto.IsCoordinator,
                Team = deskForRegisterDto.Team,
                IsVolunteer = deskForRegisterDto.IsVolunteer
            };

            await _repo.Desks.AddAsync(deskToCreate);
            await _repo.SaveChangesAsync();
        
            return StatusCode(201);
        }



        // PUT api/Desks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Desk deskDto)
        {
            var desk = await _repo.Desks.FirstOrDefaultAsync(x => x.Id == id);
            if(desk != null)
            {
            _repo.Desks.Update(deskDto);
            await _repo.SaveChangesAsync();
            
            return Ok();
            }
            return BadRequest();
        }

        // DELETE api/Desks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDesk(int id)
        {
            var deskToRemove = await _repo.Desks.FirstOrDefaultAsync(x => x.Id == id);
        
            if(deskToRemove != null) {
                _repo.Desks.Remove(deskToRemove);
                _repo.SaveChanges();
                return Ok();
            }
            return BadRequest();
        
        }

        // GET api/Desks
        [HttpGet]
        public async Task<IActionResult> GetDesks()
        {
            var desks = await _repo.Desks.ToListAsync();

            return Ok(desks);
        }

        // GET api/Desks/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDesk(int id)
        {
            var desk = await _repo.Desks.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(desk);
        }
    }
}