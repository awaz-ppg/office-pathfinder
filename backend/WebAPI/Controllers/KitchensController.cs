using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    
    public class KitchensController : ControllerBase
    {
       private const string CollectionName = "KitchensCollection";
       private readonly ICosmosDbRepository<Kitchen> _repository;      
         public KitchensController(ICosmosDbRepository<Kitchen> repository)
        {
            _repository = repository;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterKitchen([FromBody] Kitchen kitchenForRegistration)
        {
            await _repository.InsertEntityAsync(CollectionName, kitchenForRegistration);
        
            return StatusCode(201);
        }



        // PUT api/Kitchens/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Kitchen kitchenDto)
        {
            kitchenDto.id = Guid.Parse(id).ToString();
            await _repository.UpdateEntityAsync(CollectionName, id, kitchenDto);
            return Ok();
           
        }

        // DELETE api/Kitchens/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKitchen(string id)
        {
             await _repository.DeleteEntityAsync(CollectionName, id);
                return Ok();
        
        }

        // GET api/Kitchens
        [HttpGet]
        public List<Kitchen> GetKitchens()
        {
            var kitchens =
                 _repository.GetAllEntities(CollectionName);

            return kitchens;
        }

        // GET api/Printer/5
        [HttpGet("{id}")]
        public async Task<Kitchen> GetKitchen(string id)
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