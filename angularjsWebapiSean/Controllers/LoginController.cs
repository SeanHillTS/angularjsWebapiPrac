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
        public async Task<String> Post(string username, string password)
        {
                
            LoginModel login = new LoginModel()
            {
                username = username,
                password = password
            };
            try { 
                return await client.getToken(login);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }
    }
}
