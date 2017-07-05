using angularjsWebapiSean.Client;
using angularjsWebapiSean.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace tests
{
    //Integration Tests
    //Ensures that all the client functions are correctly called
    [TestClass]
    public class ProjectTests
    {
        private static MockClient testClient = new MockClient();
        private static ProjectsController controller = new ProjectsController((IClient)testClient);

        [TestMethod]
        public async Task ShouldCallCreate()
        {
            try { 
            var result = await controller.CreateProject(new angularjsWebapiSean.Models.ProjectCreateModel(), "faketoken");
            Assert.IsNotNull(result);
            }
            catch (Exception e)
            {
                Assert.Fail("Should not throw exception - " + e.Message);
            }
        }

        [TestMethod]
        public async Task ShouldCallGetProjects()
        {
            try { 
            var result = await controller.Get("faketoken");
            Assert.IsTrue(result.Count == 1);
            }
            catch (Exception e)
            {
                Assert.Fail("Should not throw exception - " + e.Message);
            }
        }

        [TestMethod]
        public async Task ShouldCallUpdateProject()
        {
            try { 
            var result = await controller.Edit(new angularjsWebapiSean.Models.ProjectModel(), "faketoken");
            Assert.IsTrue(result);
            }
            catch (Exception e)
            {
                Assert.Fail("Should not throw exception - " + e.Message);
            }
}

        [TestMethod]
        public async Task ShouldCallDeleteProject()
        {
            try { 
            var result = await controller.DeleteProject(1, "faketoken");
            Assert.IsTrue(result);

            }
            catch(Exception e)
            {
                throw e;
            }
        }


    }
}