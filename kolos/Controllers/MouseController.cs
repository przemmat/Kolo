using kolos.BLL;
using kolos.DTO;
using kolos.Model;
using Microsoft.AspNetCore.Mvc;

namespace kolos.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MouseController : ControllerBase
        
    {
        private IService service = new Service();
        
        [HttpGet]
        public ActionResult<IEnumerable<Mouse>> GetMice()
        {
            return Ok(service.get());
        }

        [HttpPost]
        public ActionResult<int> AddMouse([FromBody] MouseDTO newMouse)
        {
            return Ok(service.add(newMouse));
        }

        [HttpDelete("{id}")]
        public ActionResult<bool> DeleteMouse(int id)
        {
           return Ok(service.remove(id));
        }
    }
}

