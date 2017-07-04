using angularjsWebapiSean.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Text;

namespace angularjsWebapiSean.Client
{
    public interface IClient
    {
        Task<string> getToken(LoginModel user);
        Task<List<ProjectModel>> getProjects();
        Task<bool> updateProject(ProjectModel proj);
        Task<bool> deleteProject(int pk);
        Task<String> createProject(ProjectCreateModel project);
    }

    public class Client : IClient
    {
        private String projectsUri = "http://projectservice.staging.tangentmicroservices.com:80/";
        private String usersUri = "http://userservice.staging.tangentmicroservices.com:80/";

        private String tokenExt = "api-token-auth/";
        private String projectsExt = "api/v1/projects/";
        protected HttpClient client { get; private set; } = new HttpClient();
        private String token = null;
        public Client()
        {

        }

        public async Task<string> getToken(LoginModel user)
        {

            if (this.token != null)
            {
                return this.token;
            }
            Uri uri = new Uri(usersUri + tokenExt);
            try
            {
                
                var jsonUser = JsonConvert.SerializeObject(user);
                var httpContent = new StringContent(jsonUser, Encoding.UTF8, "application/json");

                var httpResponse = await client.PostAsync(uri, httpContent);

                if (httpResponse.Content != null)
                {
                    var responseContent = await httpResponse.Content.ReadAsStringAsync();
                    var response = JsonConvert.DeserializeObject<TokenModel>(responseContent);
                    this.token = response.token;
                    return this.token;
                }
                else throw new Exception("No response");

            }
            catch (Exception e)
            {
                throw e;
            }

        }


        public async Task<List<ProjectModel>> getProjects()
        {



            Uri uri = new Uri(projectsUri + projectsExt);
            try
            {

                var httpContent = new StringContent("", Encoding.UTF8, "application/json");
                client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", "Token " + token);
                var httpResponse = await client.GetAsync(uri);

                if (httpResponse.Content != null)
                {
                    var responseContent = await httpResponse.Content.ReadAsStringAsync();
                    var response = JsonConvert.DeserializeObject<List<ProjectModel>>(responseContent);


                    return response;
                }
                else throw new Exception("No response");

            }
            catch (Exception e)
            {
                throw e;
            }

        }


        public async Task<bool> updateProject( ProjectModel proj)
        {


            try
            {
                client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", "Token " + token);
                var httpContent = new StringContent(JsonConvert.SerializeObject(proj), Encoding.UTF8, "application/json");
                var httpResponse = await client.PutAsync(projectsUri + projectsExt + proj.pk + "/", httpContent);

                if (httpResponse.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    return true;
                }
                else throw new Exception("Update Failed");

            }
            catch (Exception e)
            {
                throw e;
            }

        }

        public async Task<bool> deleteProject(int pk)
        {


            try
            {
                client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", "Token " + token);
                var httpResponse = await client.DeleteAsync(projectsUri + projectsExt + pk + "/");

                if (httpResponse.IsSuccessStatusCode)
                {
                    return true;
                }
                else throw new Exception("Delete Failed");

            }
            catch (Exception e)
            {
                throw e;
            }

        }

        public async Task<String> createProject(ProjectCreateModel project)
        {
            Uri uri = new Uri(projectsUri + projectsExt);
            try
            {
                client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", "Token " + token);
                var jsonProj = JsonConvert.SerializeObject(project);
                var httpContent = new StringContent(jsonProj, Encoding.UTF8, "application/json");

                var httpResponse = await client.PostAsync(uri, httpContent);

                if (httpResponse.Content != null)
                {
                    var responseContent = await httpResponse.Content.ReadAsStringAsync();
                    //var response = new JavaScriptSerializer().Deserialize<ProjectModel>(responseContent);
                    return responseContent;
                }
                else throw new Exception("No response");

            }
            catch (Exception e)
            {
                throw e;
            }

        }
    }
}
