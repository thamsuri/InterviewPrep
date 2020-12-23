using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestaurantAPI.Model;

namespace InterviewPrep.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        
        private readonly ILogger<CustomerController> _logger;

        public CustomerController(ILogger<CustomerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<Customer>> Get()
        {
            IEnumerable<Customer> customers = null;

            var address = "https://randomuser.me/api/";
            
            var client = new HttpClient();

            HttpResponseMessage response = await client.GetAsync(address);
            response.EnsureSuccessStatusCode();
            var json = await response.Content.ReadAsStringAsync();

            JObject result = JObject.Parse(json);

            customers = JObject.Parse(json).SelectToken("$.results").ToObject<IEnumerable<Customer>>();



            for (int i = 0; i < 10; i++)
            {
                response = await client.GetAsync(address);
                response.EnsureSuccessStatusCode();
                json = await response.Content.ReadAsStringAsync();

                result = JObject.Parse(json);

                var customersList = JObject.Parse(json).SelectToken("$.results").ToObject<IEnumerable<Customer>>();

                customers = customers.Concat(customersList);

            }
            //var cocktail =  result["drinks"].ToObject<IEnumerable<Cocktail>>();

            return customers;
        }
    }
}
