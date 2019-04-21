using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    
    public class GuestsController : ControllerBase
    {
       private const string CollectionName = "GuestsCollection";
       private readonly ICosmosDbRepository<Guest> _repository;
        public GuestsController(ICosmosDbRepository<Guest> repository)
        {
            _repository = repository;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterGuest([FromBody] Guest guestForRegister)
        {

            await _repository.InsertEntityAsync(CollectionName, guestForRegister);
        
            return StatusCode(201);
        }



        // PUT api/Guests/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Guest guestDto)
        {
            guestDto.Id = Guid.Parse(id).ToString();
            await _repository.UpdateEntityAsync(CollectionName, id, guestDto);
            return Ok();
        }

        // DELETE api/Guests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGuest(string id)
        {
             await _repository.DeleteEntityAsync(CollectionName, id);
                return Ok();
        }

        // GET api/Guests
        [HttpGet]
         public List<Guest> GetGuests()
        {
            var guests =
                 _repository.GetAllEntities(CollectionName);

            return guests;
        }

        // GET api/Guests/5
        [HttpGet("{id}")]
        public async Task<Guest> GetGuest(string id)
        {
           if (id == null)
            {
                return null;
            }
            var item = await _repository.GetEntity(CollectionName,id);
            if(item == null)
            {
                return null;
            }
            return item;
        }
    }
}