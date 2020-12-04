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
using Microsoft.AspNetCore.Authorization;

namespace SmileIT.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IRepository<L.User, int> _service;

        public UserController()
        {
            _service = new UserRepositoryAPI();
        }

        [HttpGet, Authorize]
        public IEnumerable<L.User> Get()
        {
            return _service.Get();
        }

        [HttpGet("{id}"), Authorize]
        public L.User Get(int id)
        {
            return _service.Get(id);
        }

        [HttpPost, Authorize]
        //[AcceptVerbs("POST")]
        //[Route("AddUser")]
        public L.User AddUser(UserInfo userInfo)
        {
            return _service.Insert(new L.User(userInfo.Email,userInfo.Username, userInfo.Password, userInfo.Role));
        }

        [HttpPut("{id}"), Authorize]
        //[AcceptVerbs("PUT")]
        //[Route("UpdateUser/{id}")]
        public L.User UpdateUser(int id, UserInfo userInfo)
        {
            return _service.Update(id, new L.User(userInfo.Email,userInfo.Username, userInfo.Password, userInfo.Role));
        }

        [HttpDelete("{id}"), Authorize]
        //[AcceptVerbs("DELETE")]
        //[Route("DeleteUser/{id}")]
        public void Delete(int id)
        {
            _service.Delete(id);
        }

    }
}
