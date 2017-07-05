using angularjsWebapiSean.Client;
using angularjsWebapiSean.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace tests
{
    //Integration Tests
    //Ensures that all the client functions are correctly called
    [TestClass]
    public class LoginTests
    {
        private static MockClient testClient = new MockClient();
        private static LoginController controller = new LoginController((IClient)testClient);

        [TestMethod]
        public async Task ShouldCallGetToken()
        {
            var result = await controller.Post("any", "any");
            Assert.IsTrue(result);
        }
        
    }
}
