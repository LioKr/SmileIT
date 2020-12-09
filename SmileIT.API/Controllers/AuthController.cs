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
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using SmileIT.API.Utils;
using Microsoft.Extensions.Options;

namespace SmileIT.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
       private const string ConnectionString = @"Data Source=desktop-12fd2ha\sqlexpress;Initial Catalog=SmileITv2.DB;Integrated Security=True"; //lk connection string
                //@"Data Source=DELL-M4500\SQLEXPRESS;Initial Catalog=SmileIT.DB;Integrated Security=True" // jy Connection string
        private Connection _connection;
        private AppSettings _appSettings;
        private IRepository<L.User, int> _service;

        public AuthController(IOptions<AppSettings> appSettings)
        {
            _service = new UserRepositoryAPI();
           _connection = new Connection(ConnectionString);
            _appSettings = appSettings.Value;
        }

        [HttpPost]
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
        [Route("Login")]
        public IActionResult Login(LoginInfo entity)
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
                        return Unauthorized();
                    else
                    {

                        var tokenHandler = new JwtSecurityTokenHandler();
                        var key = Encoding.ASCII.GetBytes(_appSettings.SecretJWT);
                        var tokenDescriptor = new SecurityTokenDescriptor
                        {
                            Subject = new ClaimsIdentity(new Claim[]
                            {
                                new Claim(ClaimTypes.Name, user.Id.ToString())
                            }),
                            Expires = DateTime.UtcNow.AddDays(7),
                            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
                        };
                        var token = tokenHandler.CreateToken(tokenDescriptor);
                        var tokenString = tokenHandler.WriteToken(token);
                        //return Ok(new {
                        //        Id = user.Id,
                        //        Username = user.Username,
                        //        Email = user.Email,
                        //        Role = user.Role,
                        //        Password = "*******",
                        //        Token = tokenString
                        //        });
                        return Ok(new { Token = tokenString });

                    }



                        //return new HttpResponseMessage(HttpStatusCode.OK)
                        //{
                        //    Content = new StringContent(JsonConvert.SerializeObject(user))
                        //};

                    //Command command = new Command("SP_User_Check", true);
                    //command.AddParameter("pUsername", entity.Username);
                    //command.AddParameter("pPassword", entity.Password);
                    //bool isOK = (bool)_connection.ExecuteScalar<LoginInfo>(command);

                    //if (isOK == true)
                    //{
                    //    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                    //    var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                    //    var tokeOptions = new JwtSecurityToken(
                    //        issuer: "https://localhost:44356",
                    //        audience: "https://localhost:44356",
                    //        claims: new List<Claim>(),
                    //        expires: DateTime.MaxValue,
                    //        signingCredentials: signinCredentials
                    //    );
                    //    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                    //    return Ok(new { Token = tokenString });
                    //}
                    //else
                    //{
                    //    return Unauthorized();
                    //}

                }
            }
            catch (SqlException exception)
            {
                return Unauthorized();

            }

            return Unauthorized();

        }


    }
}
