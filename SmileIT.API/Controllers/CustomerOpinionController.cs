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
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerOpinionController : ControllerBase
    {
        private IRepository<L.CustomerOpinion, int> _service;

        public CustomerOpinionController()
        {
            _service = new CustomerOpinionRepositoryAPI();
        }

        [HttpGet]
        public IEnumerable<L.CustomerOpinion> Get()
        {
            return _service.Get();
        }

        [HttpGet("{id}")]
        public L.CustomerOpinion Get(int id)
        {
            return _service.Get(id);
        }

        [HttpPost, AllowAnonymous]
        //[AcceptVerbs("POST")]
        //[Route("AddUser")] 
        public L.CustomerOpinion AddCustomerOpinion(CustomerOpinionInfo entityInfo)
        {
            return _service.Insert(new L.CustomerOpinion(entityInfo.SmileyId, entityInfo.Commentary, entityInfo.Created_at));
        }

        [HttpPut("{id}")]
        //[AcceptVerbs("PUT")]
        //[Route("UpdateUser/{id}")]
        public L.CustomerOpinion UpdateCustomerOpinion(int id, CustomerOpinionInfo entityInfo)
        {
            return _service.Update(id, new L.CustomerOpinion(entityInfo.SmileyId, entityInfo.Commentary, entityInfo.Created_at));
        }

        [HttpDelete("{id}")]
        //[AcceptVerbs("DELETE")]
        //[Route("DeleteUser/{id}")]
        public void Delete(int id)
        {
            _service.Delete(id);
        }

    }
}
