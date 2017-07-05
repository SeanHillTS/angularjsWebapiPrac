using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using angularjsWebapiSean.Client;
using angularjsWebapiSean.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace angularjsWebapiSean.Controllers
{
    [Route("api/login")]
    public class LoginController : Controller
    {
        private IClient client;
        public LoginController(IClient _client)
        {
            client = _client;
        }

        // POST api/values
        [HttpPost]
        public async Task<bool> Post([FromBody]string username, [FromBody]string password)
        {
            LoginModel login = new LoginModel()
            {
                username = username,
                password = password
            };
            try { 
                String token = await client.getToken(login);
                if(token != null)
                {
                    return true;
                }
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }
            return false;
        }
    }
}
