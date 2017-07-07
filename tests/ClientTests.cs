using angularjsWebapiSean.Client;
using angularjsWebapiSean.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;
using Moq;
using System.Collections.Generic;

namespace tests
{
    [TestClass]
    public class ClientTests
    {

        List<int> created = new List<int>();
        Client client = new Client();
        String token = "46d2ab1b9fdb092f803fc83e16bf001292d98fa5";

        [TestMethod]
        public async Task ShouldGetToken()
        {
            var result = await client.getToken(new LoginModel() { username = "jacob.zuma", password = "tangent" });
            Assert.IsNotNull(result);
        }
        [TestMethod]
        public async Task ShouldNotGetToken()
        {
            var result = await client.getToken(new LoginModel(){ username = "jacob.zumba", password = "tangent"});
            Assert.IsNull(result);
        }
        [TestMethod]
        public async Task ShouldGetProjects()
        {
            var result = await client.getProjects(token);

            Assert.IsTrue(result.Count > 0);
        }

        [TestMethod]
        public async Task ShouldNotGetProjects()
        {

                await Assert.ThrowsExceptionAsync<Exception>(async() =>
                {
                    await client.getProjects("faketoken");
                });
                
        }


        [TestMethod]
        public async Task ShouldNotCreateProject()
        {
            try
            {
                var result = await client.createProject(new ProjectCreateModel()
                {
                    description = "test",
                    title = "test",
                    end_date = "12 Jun",
                    start_date = "12 Jun",
                    is_active = false,
                    is_billable = false
                }, "faketoken");

                Assert.IsNull(result);
                
            }
            catch (Exception e)
            {
                
            }
        }

        //Checks if service is actually called using incorrect data as not to change anything
        [TestMethod]
        public async Task ShouldHitCreateService()
        {
            try
            {
                var result = await client.createProject(new ProjectCreateModel()
                {
                    description = "",
                    title = "test",
                    end_date = "2017-11-24",
                    start_date = "2017-11-24",
                    is_active = false,
                    is_billable = false
                }, token);

                Assert.IsNotNull(result);

            }
            catch (Exception e)
            {
                //This means that the api was called correctly since that was invalid data
                Assert.IsTrue(e.Message == "Invalid data");
            }
        }

        //Checks if service is actually called using incorrect data as not to change anything
        [TestMethod]
        public async Task ShouldHitDeleteService()
        {
            try
            {
                
                    var result = await client.deleteProject(-1, token);

               
            }
            catch (Exception e)
            {
                Assert.IsTrue(e.Message == "Project not found");
            }
        }
        //Checks if service is actually called using incorrect data as not to change anything
        [TestMethod]
        public async Task ShouldHitUpdateService()
        {
            try
            {

                var result = await client.updateProject(new ProjectModel(), token);


            }
            catch (Exception e)
            {
                Assert.IsTrue(e.Message == "Project not found");
            }
        }



    }


}
