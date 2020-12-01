using DAL.Data;
using DAL.Mappers;
using DAL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ToolBox;

namespace DAL.Services
{
    public class UserRepository : IRepository<User, int>
    {
        private const string ConnectionString = @"Data Source=DESKTOP-12FD2HA\SQLEXPRESS;Initial Catalog=DB_TerryPratchett;Integrated Security=True";
        private Connection _dbConnection;

        public UserRepository()
        {
            _dbConnection = new Connection(ConnectionString);
        }

        public void Delete(int id)
        {
            Command command = new Command("SP_User_Delete", true);
            command.AddParameter("Id", id);

            _dbConnection.ExecuteNonQuery(command);
        }

        public IEnumerable<User> Get()
        {
            Command command = new Command("SELECT * FROM User_ReadAll");
            return _dbConnection.ExecuteReader(command, (dr) => dr.ToUser());
        }

        public User Get(int id)
        {
            Command command = new Command("SP_User_ReadOne", true);
            command.AddParameter("Id", id);
            return _dbConnection.ExecuteReader(command, (dr) => dr.ToUser()).SingleOrDefault();
        }

        public User Insert(User entity)
        {
            Command command = new Command("SP_User_Add", true);
            command.AddParameter("Id", entity.Id);
            command.AddParameter("Email", entity.Email);
            command.AddParameter("Username", entity.Username);
            command.AddParameter("Password", entity.Password);
            command.AddParameter("Role", entity.Role);
            _dbConnection.ExecuteNonQuery(command);
            return entity;
        }

        public User Update(int Id, User entity)
        {
            Command command = new Command("SP_User_Update", true);
            command.AddParameter("Id", Id);
            command.AddParameter("Email", entity.Email);
            command.AddParameter("Username", entity.Username);
            command.AddParameter("Password", entity.Password);
            command.AddParameter("Role", entity.Role);

            if (_dbConnection.ExecuteNonQuery(command) > 0)
            {
                return this.Get(Id);
            }
            return entity;
        }
    }    
}
