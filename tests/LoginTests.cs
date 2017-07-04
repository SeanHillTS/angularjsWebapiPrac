using angularjsWebapiSean.Client;
using angularjsWebapiSean.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace tests
{
    [TestClass]
    public class LoginTests
    {
        private static Client testClient = new Client();
        private static LoginController controller = new LoginController((IClient)testClient);

        [TestMethod]
        public async Task ShouldLoginWithCorrectDetails()
        {
            var result = await controller.Post("jacob.zuma", "tangent");
            Assert.IsTrue(result);
        }
    }
}
