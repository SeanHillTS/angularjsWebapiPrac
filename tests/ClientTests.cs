using angularjsWebapiSean.Client;
using angularjsWebapiSean.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace tests
{
    [TestClass]
    public class ClientTests
    {
        //Unit Tests
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
            var result = await client.getProjects("faketoken");

            Assert.IsFalse(result.Count > 0);
        }

        [TestMethod]
        public async Task ShouldCreateProject()
        {
            try
            {
                var result = await client.createProject(new ProjectCreateModel()
                {
                    description = "test",
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
                Assert.Fail("Should not throw exception - " + e.Message);
            }
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

    }
}
