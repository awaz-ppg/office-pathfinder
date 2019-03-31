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
    public class RoomsController : ControllerBase
    {
       private readonly DataContext _repo;
        public RoomsController(DataContext context)
        {
            _repo = context;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterRoom([FromBody] RoomForRegister roomForRegisterDto)
        {

            var roomToCreate = new Room
            {
                roomName = roomForRegisterDto.roomName,
                roomNumber = roomForRegisterDto.roomNumber,
                employeeId = roomForRegisterDto.employeeId,
                guestId = roomForRegisterDto.guestId
            };

            await _repo.Rooms.AddAsync(roomToCreate);
            await _repo.SaveChangesAsync();
        
            return StatusCode(201);
        }



        // PUT api/Rooms/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] RoomForEdit roomDto)
        {
            var room = await _repo.Rooms.FirstOrDefaultAsync(x => x.Id == id); //returns a single item.
            if(room != null)
            {
            if(room.roomName != roomDto.roomName && roomDto.roomName != null) room.roomName = roomDto.roomName;
            if(room.roomNumber != roomDto.roomNumber && roomDto.roomNumber != null) room.roomNumber = roomDto.roomNumber;
            if(room.employeeId != roomDto.employeeId && roomDto.employeeId != 0 ) room.employeeId = roomDto.employeeId;
            if(room.guestId != roomDto.guestId && roomDto.guestId != 0 ) room.guestId = roomDto.guestId;
            _repo.Rooms.Update(room);
            await _repo.SaveChangesAsync();
            
            return Ok();
            }
            return BadRequest();
        }

        // DELETE api/Rooms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom(int id)
        {
            var roomToRemove = await _repo.Rooms.FirstOrDefaultAsync(x => x.Id == id); //returns a single item.
        
            if(roomToRemove != null) {
                _repo.Rooms.Remove(roomToRemove);
                _repo.SaveChanges();
                return Ok();
            }
            return BadRequest();
        
        }

        // GET api/Rooms
        [HttpGet]
        public async Task<IActionResult> GetRooms()
        {
            var rooms = await _repo.Rooms.ToListAsync();

            return Ok(rooms);
        }

        // GET api/Rooms/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRoom(int id)
        {
            var room = await _repo.Rooms.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(room);
        }
    }
}