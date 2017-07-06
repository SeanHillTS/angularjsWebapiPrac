using angularjsWebapiSean.Client;
using angularjsWebapiSean.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace tests
{
    //This class is used for integration tests, to ensure that the correct Client calls are made
    public class MockClient : IClient
    {
        
        public MockClient()
        {

        }

        public async Task<string> getToken(LoginModel user)
        {
            return "46d2ab1b9fdb092f803fc83e16bf001292d98fa5";

        }


        public async Task<List<ProjectModel>> getProjects(String token)
        {
            return new List<ProjectModel>(){
                new ProjectModel
                {
                    description = "Working",
                    title = "Title",
                    pk = 1,
                    end_date = "12sd",
                    is_active = true,
                    is_billable = true,
                    start_date = "dsad",
                    task_set = null,
                    resource_set = null
                }
            };

        }


        public async Task<bool> updateProject(ProjectModel proj, String token)
        {
                return true;
        }

        public async Task<bool> deleteProject(int pk, String token)
        {

            return true;

        }

        public async Task<ProjectModel> createProject(ProjectCreateModel project, String token)
        {
            return new ProjectModel();

        }
    }
}
