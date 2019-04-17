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
    
    public class GuestsController : ControllerBase
    {
       private readonly DataContext _repo;
        public GuestsController(DataContext context)
        {
            _repo = context;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterGuest([FromBody] GuestsForRegistration guestForRegisterDto)
        {

            var guestToCreate = new Guest
            {
                guestName = guestForRegisterDto.GuestName,
                guestSurname = guestForRegisterDto.GuestSurname,
                startDate = guestForRegisterDto.StartDate,
                endDate = guestForRegisterDto.EndDate,
                FromWhere = guestForRegisterDto.FromWhere,
                placeId = guestForRegisterDto.PlaceId
            };

            await _repo.Guests.AddAsync(guestToCreate);
            await _repo.SaveChangesAsync();
        
            return StatusCode(201);
        }



        // PUT api/Guests/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Guest guestDto)
        {
            var guest = await _repo.Guests.FirstOrDefaultAsync(x => x.Id == id);
            if(guest != null)
            {
            _repo.Guests.Update(guestDto);
            await _repo.SaveChangesAsync();
            
            return Ok();
            }
            return BadRequest();
        }

        // DELETE api/Guests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGuest(int id)
        {
            var guestToRemove = await _repo.Guests.FirstOrDefaultAsync(x => x.Id == id);
        
            if(guestToRemove != null) {
                _repo.Guests.Remove(guestToRemove);
                _repo.SaveChanges();
                return Ok();
            }
            return BadRequest();
        
        }

        // GET api/Guests
        [HttpGet]
        public async Task<IActionResult> GetGuests()
        {
            var guests = await _repo.Guests.ToListAsync();

            return Ok(guests);
        }

        // GET api/Guests/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGuest(int id)
        {
            var guest = await _repo.Guests.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(guest);
        }
    }
}