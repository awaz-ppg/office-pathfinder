using System;
using System.Collections.Generic;
using System.Net;
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
    
    public class DesksController : ControllerBase
    {
        private const string CollectionName = "DesksCollection";
       private readonly ICosmosDbRepository<Desk> _repository;
        public DesksController(ICosmosDbRepository<Desk> repository)
        {
            _repository = repository;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterDesk([FromBody] Desk deskForRegister)
        {
            await _repository.InsertEntityAsync(CollectionName, deskForRegister);
        
            return StatusCode(201);
        }



        // PUT api/Desks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Desk deskDto)
        {
            deskDto.Id = Guid.Parse(id).ToString();
            await _repository.UpdateEntityAsync(CollectionName, id, deskDto);
            return Ok();
            
        }

        // DELETE api/Desks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDesk(string id)
        {
            await _repository.DeleteEntityAsync(CollectionName, id);
                return Ok();
        }

        // GET api/Desks
        [HttpGet]
        public List<Desk> GetDesks()
        {
            var desks =
                 _repository.GetAllEntities(CollectionName);

            return desks;
        }

        // GET api/Desks/5
        [HttpGet("{id}")]
        public async Task<Desk> GetDesk(string id)
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