using angularjsWebapiSean.Client;
using angularjsWebapiSean.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace angularjsWebapiSean.Controllers
{
    [Route("api/projects")]
    public class ProjectsController : Controller
    {
        private Client.IClient client;
        public ProjectsController(IClient _client)
        {
            client = _client;
        }

        [Route("get")]
        [HttpGet]
        public async Task<List<ProjectModel>> Get(String token){
            try{
                var projects = await client.getProjects(token);
                return projects;
            }
            catch(Exception e){
                throw e;
            }
        }

        [Route("update")]
        [HttpPost]
        public async Task<Boolean> Edit(ProjectModel data, String token)
        {
            Console.WriteLine(data);
            try
            {
                return await client.updateProject(data, token);
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        [Route("delete")]
        [HttpPost]
        public async Task<Boolean> DeleteProject(int pk, String token)
        {
            try
            {
                var temp = await client.deleteProject(pk, token);
                return temp;

            }
            catch (Exception e)
            {
                throw e;
            }
        }
        [Route("create")]
        [HttpPost]
        public async Task<ProjectModel> CreateProject(ProjectCreateModel project, String token)
        {
            try
            {
                return await client.createProject(project, token);
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
