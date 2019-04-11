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
    public class PrintersController : ControllerBase
    {
       private readonly DataContext _repo;
        public PrintersController(DataContext context)
        {
            _repo = context;
        }
        [HttpPost("register")]
         public async Task<IActionResult> RegisterPrinter([FromBody] PrinterForRegistration printerForRegistration)
        {

            var printerToCreate = new Printer
            {
                Number = printerForRegistration.Number,
                IsColor = printerForRegistration.IsColor
            };

            await _repo.Printers.AddAsync(printerToCreate);
            await _repo.SaveChangesAsync();
        
            return StatusCode(201);
        }



        // PUT api/Printers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Printer printerDto)
        {
            var printer = await _repo.Printers.FirstOrDefaultAsync(x => x.Id == id);
            if( printer != null ) {
                printer.Number = printerDto.Number;
                printer.IsColor = printerDto.IsColor;
                _repo.Printers.Update(printer);
                await _repo.SaveChangesAsync();
            
                 return Ok();
            }
            return BadRequest();
           
        }

        // DELETE api/Printers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePrinter(int id)
        {
            var printerToRemove = await _repo.Printers.FirstOrDefaultAsync(x => x.Id == id);
        
            if(printerToRemove != null) {
                _repo.Printers.Remove(printerToRemove);
                _repo.SaveChanges();
                return Ok();
            }
            return BadRequest();
        
        }

        // GET api/Printers
        [HttpGet]
        public async Task<IActionResult> GetPrinters()
        {
            var printers = await _repo.Printers.ToListAsync();

            return Ok(printers);
        }

        // GET api/Printer/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPrinter(int id)
        {
            var printer = await _repo.Printers.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(printer);
        }
    }
}