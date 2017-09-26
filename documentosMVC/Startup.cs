using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(documentosMVC.Startup))]
namespace documentosMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
