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
                roomName = roomForRegisterDto.RoomName,
                roomNumber = roomForRegisterDto.RoomNumber,
                NumberOfPeople = roomForRegisterDto.NumberOfPeople,
                Description = roomForRegisterDto.Description,
                IsBlackboard = roomForRegisterDto.IsBlackboard,
                IsPhone = roomForRegisterDto.IsPhone,
                IsTV = roomForRegisterDto.IsTV
            };
            await _repo.Rooms.AddAsync(roomToCreate);
            await _repo.SaveChangesAsync();
        
            return StatusCode(201);
        }



        // PUT api/Rooms/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Room roomDto)
        {
            var room = await _repo.Rooms.FirstOrDefaultAsync(x => x.Id == id);
            if(room != null) {
                 room.NumberOfPeople = roomDto.NumberOfPeople;
                 room.roomName = roomDto.roomName;
                 room.roomNumber = roomDto.roomNumber;
                 room.IsBlackboard = roomDto.IsBlackboard;
                 room.IsPhone = roomDto.IsPhone;
                 room.IsTV = roomDto.IsTV;
                 room.Description =roomDto.Description; 
                 
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
            var roomToRemove = await _repo.Rooms.FirstOrDefaultAsync(x => x.Id == id);
        
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