using Newtonsoft.Json;
using System;

namespace InterviewPrep
{
    public class Cocktail
    {
        [JsonProperty(PropertyName = "idDrink")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "strDrink")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "strDrinkThumb")]
        public string Url { get; set; }
    }
}
