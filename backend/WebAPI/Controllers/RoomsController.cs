using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class RoomsController : ControllerBase
    {
       private const string CollectionName = "RoomsCollection";
       private readonly ICosmosDbRepository<Room> _repository;
        public RoomsController(ICosmosDbRepository<Room> repository)
        {
            _repository = repository;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterRoom([FromBody] Room roomForRegister)
        {
            await _repository.InsertEntityAsync(CollectionName, roomForRegister);
        
            return StatusCode(201);
        }



        // PUT api/Rooms/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Room roomDto)
        {
            roomDto.id = Guid.Parse(id).ToString();
            await _repository.UpdateEntityAsync(CollectionName, id, roomDto);
            return Ok();
        }

        // DELETE api/Rooms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom(string id)
        {
             await _repository.DeleteEntityAsync(CollectionName, id);
                return Ok();
        }

        // GET api/Rooms
        [HttpGet]
        public List<RoomToSend> GetRooms()
        {
            var rooms =
                 _repository.GetAllEntities(CollectionName);

            List<RoomToSend> Rooms = new List<RoomToSend>();
            foreach(var element in rooms) {
                Rooms.Add(new RoomToSend() {
                    NumberOfPeople = element.NumberOfPeople,
                    Description = element.Description,
                    roomName = element.roomName,
                    roomNumber = element.roomNumber,
                    NumberSVG = element.roomNumberSVG,
                    IsTV = element.IsTV,
                    IsBlackboard = element.IsBlackboard,
                    IsPhone = element.IsPhone,
                    id = element.id
                });
            }
            return Rooms;
        }
    }
}