﻿using angularjsWebapiSean.Client;
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
        //Inject the client
        private Client.IClient client;
        public ProjectsController(IClient _client)
        {
            client = _client;
        }
        //Get all projects
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
        //Update singe project
        [Route("update")]
        [HttpPost]
        public async Task<Boolean> Edit([FromBody]ProjectModel data, String token)
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
        //Delete single project
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
        //Create single project
        [Route("create")]
        [HttpPost]
        public async Task<ProjectModel> CreateProject([FromBody] ProjectCreateModel project, String token)
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
