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
            Command command = new Command("SP_CustomerOpinion_DeleteById", true);
            command.AddParameter("Id", id);

            _dbConnection.ExecuteNonQuery(command);
        }

        public IEnumerable<CustomerOpinion> Get()
        {
            Command command = new Command("SELECT * FROM CustomersOpinions");
            return _dbConnection.ExecuteReader(command, (dr) => dr.ToCustomerOpinion());
        }

        public CustomerOpinion Get(int id)
        {
            Command command = new Command("SELECT * FROM CustomersOpinions WHERE id_CustomerOpinion = "+id+";");
            command.AddParameter("CustomerOpinionId", id);
            return _dbConnection.ExecuteReader(command, (dr) => dr.ToCustomerOpinion()).SingleOrDefault();
        }

        public CustomerOpinion Insert(CustomerOpinion entity)
        {
            Command command = new Command("SP_CustomerOpinion_Insert", true);
            //command.AddParameter("id", entity.Id);
            command.AddParameter("idSmiley", entity.SmileyId);
            command.AddParameter("Comment", entity.Commentary);
            command.AddParameter("pCreated_at", entity.Created_at);
            command.AddParameter("userId", 2);
            _dbConnection.ExecuteNonQuery(command);
            return entity;
        }

        public CustomerOpinion Update(int IdCustomerOp, CustomerOpinion entity)
        {
            Command command = new Command("SP_CustomerOpinion_Update", true);
            command.AddParameter("pCustomerComment", entity.Commentary);
            command.AddParameter("pId", IdCustomerOp);
            command.AddParameter("pFK_Smiley", entity.SmileyId);
            //command.AddParameter("pFK_User", 2);

            if (_dbConnection.ExecuteNonQuery(command) > 0)
            {
                return this.Get(IdCustomerOp);
            }
            return entity;
        }
    }
}

