﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Repository;
using DS = DAL.Services;
using DM = DAL.Data;
using SmileIT.API.Models;
using SmileIT.API.Utils;

namespace SmileIT.API.Services
{
    public class CustomerOpinionRepositoryAPI : IRepository<CustomerOpinion, int>
    {
        IRepository<DM.CustomerOpinion, int> _globalService;

        public CustomerOpinionRepositoryAPI()
        {
            _globalService = new DS.CustomerOpinionRepository();
        }

        public void Delete(int id)
        {
            _globalService.Delete(id);
        }

        public IEnumerable<CustomerOpinion> Get()
        {
            return _globalService.Get().Select(u => u.ToLocal());
        }

        public CustomerOpinion Get(int id)
        {
            return _globalService.Get(id)?.ToLocal();
        }

        public CustomerOpinion Insert(CustomerOpinion entity)
        {
            return _globalService.Insert(entity.ToGlobal()).ToLocal();
        }

        public CustomerOpinion Update(int Id, CustomerOpinion entity)
        {
            return _globalService.Update(Id, entity.ToGlobal()).ToLocal();
        }
        public IEnumerable<DM.CustomerOpinionAverageBetweenTwoDate> CustomerOpinionAverageBetweenTwoDate(string startDate, string endDate)
        {
            return new DS.CustomerOpinionRepository().GetAvg(startDate, endDate);
        }
        public IEnumerable<DM.CustomerOpinionReadListBetweenTwoDate> GetCustomerOpinionReadListBetweenTwoDates(string startDate, string endDate)
            {
                return new DS.CustomerOpinionRepository().GetListBetweenTwoDates(startDate, endDate);
            }


    }    
}
