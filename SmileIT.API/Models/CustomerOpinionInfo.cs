using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SmileIT.API.Models
{
    public class CustomerOpinionInfo
    {
        [Required]
        [MaxLength(1)]
        public int Vote { get; set; }
        public string Commentary { get; set; }
        [Required]
        [MaxLength(50)]
        [DataType(DataType.Date)]
        public DateTime Created_at { get; set; }
    }
}
