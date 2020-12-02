using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using DAL.Data;

namespace DAL.Mappers
{
    internal static class DataRecordExtensions
    {
        internal static User ToUser(this IDataRecord dR)
        {
            return new User()
            {
                Id = (int)dR["Id"],
                Email = dR["Email"].ToString(),
                Username = dR["Username"].ToString(),
                Password = "******", //Attention, mot de passe encrypté, pas possible de le récupérer
                Role = (int)dR["Role"]
            };
        }

        internal static CustomerOpinion ToCustomerOpinion(this IDataRecord dR)
        {
            return new CustomerOpinion()
            {
                Id = (int)dR["BookId"],
                SmileyId = (int)dR["SmileyId"],
                Commentary = (dR["Commentary"] != DBNull.Value) ? dR["Commentary"].ToString() : null,
                Created_at = (DateTime)dR["Created_at"]
                //SagaName = (dR["SagaName"] != DBNull.Value) ? dR["SagaName"].ToString() : null,
                //LastEdit = (dR["LastEdit"] != DBNull.Value) ? (DateTime?)dR["LastEdit"] : null
            };
        }
    }
}
