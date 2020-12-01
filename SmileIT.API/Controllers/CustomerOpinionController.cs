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

        [HttpGet]
        public L.CustomerOpinion Get(int id)
        {
            return _service.Get(id);
        }

        [HttpPost]
        //[AcceptVerbs("POST")]
        //[Route("AddUser")]
        public L.CustomerOpinion AddCustomerOpinion(CustomerOpinionInfo entityInfo)
        {
            return _service.Insert(new L.CustomerOpinion(entityInfo.Vote, entityInfo.Commentary, entityInfo.Created_at));
        }

        [HttpPut]
        //[AcceptVerbs("PUT")]
        //[Route("UpdateUser/{id}")]
        public L.CustomerOpinion UpdateCustomerOpinion(int id, CustomerOpinionInfo entityInfo)
        {
            return _service.Update(id, new L.CustomerOpinion(entityInfo.Vote, entityInfo.Commentary, entityInfo.Created_at));
        }

        [HttpDelete]
        //[AcceptVerbs("DELETE")]
        //[Route("DeleteUser/{id}")]
        public void Delete(int id)
        {
            _service.Delete(id);
        }

    }
}
