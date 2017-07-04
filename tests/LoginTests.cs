using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using angularjsWebapiSean.Controllers;
using angularjsWebapiSean.Client;
using angularjsWebapiSean;
using System.Threading.Tasks;

namespace tests
{
    [TestClass]
    public class LoginTests
    {
        //To be replaced by mock client(?)
        private static Client client;
        private static LoginController controller;

        [AssemblyInitialize]
        public static void AssemblyInit(TestContext context)
        {
            client = new Client();
            controller = new LoginController(client);
        }

        [TestMethod]
        public void LoginWithGoodData()
        {
            var temp = controller.Post("jacob.zuma", "tangent");
            Task.WaitAll(temp);
            
            Assert.IsTrue(temp.Result);

        }

        public void LoginBadData()
        {
            var temp = controller.Post("jacob.zumba", "tangent");
            Task.WaitAll(temp);

            Assert.IsFalse(temp.Result);

        }
    }
}
