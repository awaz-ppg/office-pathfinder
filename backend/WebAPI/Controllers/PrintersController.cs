using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class PrintersController : ControllerBase
    {
       private const string CollectionName = "PrintersCollection";
       private readonly ICosmosDbRepository<Printer> _repository;
        public PrintersController(ICosmosDbRepository<Printer> repository)
        {
            _repository = repository;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterPrinter([FromBody] Printer printerForRegistration)
        {
            await _repository.InsertEntityAsync(CollectionName, printerForRegistration);
        
            return StatusCode(201);
        }



        // PUT api/Printers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Printer printerDto)
        {
            printerDto.id = Guid.Parse(id).ToString();
            await _repository.UpdateEntityAsync(CollectionName, id, printerDto);
            return Ok(); 
        }

        // DELETE api/Printers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrinter(string id)
        {
            await _repository.DeleteEntityAsync(CollectionName, id);
                return Ok();
        
        }

        // GET api/Printers
        [HttpGet]
        public List<Printer> GetPrinters()
        {
            var desks =
                 _repository.GetAllEntities(CollectionName);

            return desks;
        }

        // GET api/Printer/5
        [HttpGet("{id}")]
        public async Task<Printer> GetPrinter(string id)
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