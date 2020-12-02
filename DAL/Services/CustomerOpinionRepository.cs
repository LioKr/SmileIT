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
    public class CustomerOpinionRepository:IRepository<CustomerOpinion, int>
    {
        private const string ConnectionString = @"Data Source=desktop-12fd2ha\sqlexpress;Initial Catalog=SmileIT.DB;Integrated Security=True"; //lk connection string
        private Connection _dbConnection;

        public CustomerOpinionRepository()
        {
            _dbConnection = new Connection(ConnectionString);
        }

        public void Delete(int id)
        {
            Command command = new Command("SP_CustomerOpinion_Delete", true);
            command.AddParameter("Id", id);

            _dbConnection.ExecuteNonQuery(command);
        }

        public IEnumerable<CustomerOpinion> Get()
        {
            Command command = new Command("SELECT * FROM CustomerOpinion_ReadAll");
            return _dbConnection.ExecuteReader(command, (dr) => dr.ToCustomerOpinion());
        }

        public CustomerOpinion Get(int id)
        {
            Command command = new Command("SP_CustomerOpinion_ReadOne", true);
            command.AddParameter("CustomerOpinionId", id);
            return _dbConnection.ExecuteReader(command, (dr) => dr.ToCustomerOpinion()).SingleOrDefault();
        }

        public CustomerOpinion Insert(CustomerOpinion entity)
        {
            Command command = new Command("SP_CustomerOpinion_Add", true);
            command.AddParameter("Id", entity.Id);
            command.AddParameter("Vote", entity.Vote);
            command.AddParameter("Commentary", entity.Commentary);
            command.AddParameter("Created_at", entity.Created_at);
            _dbConnection.ExecuteNonQuery(command);
            return entity;
        }

        public CustomerOpinion Update(int Id, CustomerOpinion entity)
        {
            Command command = new Command("SP_CustomerOpinion_Update", true);
            command.AddParameter("Id", Id);
            command.AddParameter("Vote", entity.Vote);
            command.AddParameter("Commentary", entity.Commentary);
            command.AddParameter("Created_at", entity.Created_at);

            if (_dbConnection.ExecuteNonQuery(command) > 0)
            {
                return this.Get(Id);
            }
            return entity;
        }
    }
}

