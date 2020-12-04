using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToolBox;
using DAL.Repository;
using L = SmileIT.API.Models;
using S = DAL.Services;
using SmileIT.API.Services;
using System.Net.Http;
using SmileIT.API.Models;
using System.Net;
using System.Data.SqlClient;
using Newtonsoft.Json;

namespace SmileIT.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
       private const string ConnectionString = @"Data Source=desktop-12fd2ha\sqlexpress;Initial Catalog=SmileITv2.DB;Integrated Security=True"; //lk connection string
                //@"Data Source=DELL-M4500\SQLEXPRESS;Initial Catalog=SmileIT.DB;Integrated Security=True" // jy Connection string
        private Connection _connection;

        private IRepository<L.User, int> _service;

        public AuthController()
        {
            _service = new UserRepositoryAPI();
           _connection = new Connection(ConnectionString);
        }

        [HttpPost]
        //[AcceptVerbs("POST")]
        [Route("Register")]
        public HttpResponseMessage Register(RegisterInfo entity)
        {
            try
            {
                if (!(entity is null) && ModelState.IsValid)
                {
                    _service.Insert(new L.User(entity.Email,entity.Username, entity.Password, entity.Role));

                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
            }
            catch (SqlException exception)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }

        [HttpPost]
        //[AcceptVerbs("POST")]
        [Route("Login")]
        public HttpResponseMessage Login(LoginInfo entity)
        {
            try
            {
                if (!(entity is null) && ModelState.IsValid)
                {
                    Command command = new Command("SP_User_Login", true);
                    command.AddParameter("pUsername", entity.Username);
                    command.AddParameter("pPassword", entity.Password);

                    DAL.Data.User user = _connection.ExecuteReader(command, (dr) => new DAL.Data.User()
                    {
                        Id = (int)dr["id_User"],
                        Username = dr[nameof(user.Username)].ToString(),
                        Email = dr["Email"].ToString(),
                        Role = (int)dr["FK_Role"]
                    }).SingleOrDefault();

                    if (user is null)
                        return new HttpResponseMessage(HttpStatusCode.BadRequest);
                    else
                        return new HttpResponseMessage(HttpStatusCode.OK)
                        {
                            Content = new StringContent(JsonConvert.SerializeObject(user))
                        };
                }
            }
            catch (SqlException exception)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);

            }

            return new HttpResponseMessage(HttpStatusCode.BadRequest);

        }


    }
}
