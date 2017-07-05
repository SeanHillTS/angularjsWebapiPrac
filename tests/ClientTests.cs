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
    }
}
