using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmileIT.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }

        public User()
        {

        }
        public User(string email, string username, string password, string role)
        {
            Email = email;
            Username = username;
            Password = password;
            Role = role;
        }

        internal User(int id, string email,string username, string password, string role)
            :this(email,username,password,role)
        {
            Id = id;
        }
    }
}
