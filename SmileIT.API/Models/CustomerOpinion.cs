using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmileIT.API.Models
{
    public class CustomerOpinion
    {
        public int Id { get; set; }
        public int Vote { get; set; }
        public string Commentary { get; set; }
        public DateTime Created_at { get; set; }

        public CustomerOpinion()
        {

        }

        public CustomerOpinion(int vote, string commentary, DateTime created_at)
        {
            Vote = vote;
            Commentary = commentary;
            Created_at = created_at;
        }

        internal CustomerOpinion(int id, int vote, string commentary, DateTime created_at)
            :this(vote,commentary,created_at)
        {
            Id = id;
        }

    }
}
