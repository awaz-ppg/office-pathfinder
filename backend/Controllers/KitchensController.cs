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
    public class KitchensController : ControllerBase
    {
       private readonly DataContext _repo;
        public KitchensController(DataContext context)
        {
            _repo = context;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterKitchen([FromBody] KitchenForRegistration kitchenForRegistration)
        {

            var kitchenToCreate = new Kitchen
            {
                Number = kitchenForRegistration.Number,
                Name = kitchenForRegistration.Name,
                IsCoffee = kitchenForRegistration.IsCoffee,
                IsWater = kitchenForRegistration.IsWater
            };

            await _repo.Kitchens.AddAsync(kitchenToCreate);
            await _repo.SaveChangesAsync();
        
            return StatusCode(201);
        }



        // PUT api/Kitchens/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Kitchen kitchenDto)
        {
            var kitchen = await _repo.Kitchens.FirstOrDefaultAsync(x => x.Id == id);
            if( kitchen != null ) {
                kitchen.Number = kitchenDto.Number;
                kitchen.Name = kitchenDto.Name;
                kitchen.IsCoffee = kitchenDto.IsCoffee;
                kitchen.IsWater = kitchenDto.IsWater;
                
                _repo.Kitchens.Update(kitchen);
                await _repo.SaveChangesAsync();
            
                 return Ok();
            }
            return BadRequest();
           
        }

        // DELETE api/Kitchens/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKitchen(int id)
        {
            var kitchenToRemove = await _repo.Kitchens.FirstOrDefaultAsync(x => x.Id == id);
        
            if(kitchenToRemove != null) {
                _repo.Kitchens.Remove(kitchenToRemove);
                _repo.SaveChanges();
                return Ok();
            }
            return BadRequest();
        
        }

        // GET api/Kitchens
        [HttpGet]
        public async Task<IActionResult> GetKitchens()
        {
            var kitchens = await _repo.Kitchens.ToListAsync();

            return Ok(kitchens);
        }

        // GET api/Printer/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetKitchen(int id)
        {
            var kitchen = await _repo.Kitchens.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(kitchen);
        }
    }
}