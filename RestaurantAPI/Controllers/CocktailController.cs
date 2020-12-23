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

namespace InterviewPrep.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CocktailController : ControllerBase
    {
        
        private readonly ILogger<CocktailController> _logger;

        public CocktailController(ILogger<CocktailController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<Cocktail>> Get()
        {

            var address = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
            
            var client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync(address);
            response.EnsureSuccessStatusCode();
            var json = await response.Content.ReadAsStringAsync();

            JObject result = JObject.Parse(json);

            var cocktail = JObject.Parse(json).SelectToken("$.drinks").ToObject<IEnumerable<Cocktail>>(); 


            //var cocktail =  result["drinks"].ToObject<IEnumerable<Cocktail>>();

            return cocktail;
        }
    }
}
