using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using WebAPI.Dtos;

namespace WebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            AutomapperWebProfile.Run();
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}