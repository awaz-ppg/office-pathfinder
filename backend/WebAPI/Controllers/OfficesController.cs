using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class OfficesController : ControllerBase
    {
      private const string CollectionName = "OfficesCollection";
       private readonly ICosmosDbRepository<Office> _repository;    
        public OfficesController(ICosmosDbRepository<Office> repository)
        {
            _repository = repository;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterOffice([FromBody] Office officeForRegister)
        {
            await _repository.InsertEntityAsync(CollectionName, officeForRegister);
        
            return StatusCode(201);
        }

        // PUT api/Offices/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Office officeDto)
        {
            officeDto.id = Guid.Parse(id).ToString();
            await _repository.UpdateEntityAsync(CollectionName, id, officeDto);
            return Ok();
        }

        // DELETE api/Offices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOffice(string id)
        {
            await _repository.DeleteEntityAsync(CollectionName, id);
                return Ok();
        }

        // GET api/Offices
        [HttpGet]
        public List<Office> GetOffices()
        {
            var offices =
                 _repository.GetAllEntities(CollectionName);

            return offices;
        }

        // GET api/Offices/5
        [HttpGet("{id}")]
        public async Task<Office> GetOffice(string id)
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