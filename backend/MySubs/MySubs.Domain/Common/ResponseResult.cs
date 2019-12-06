using System;
using System.Collections.Generic;
using System.Text;

namespace MySubs.Domain.Common
{
    public class ResponseResult
    {
        public ResultType ResultType { get; set; }
        public Exception Error { get; set; }
        public string Message { get; set; }
        public DateTime CreatedDate { get; set; }

        public static ResponseResult Create( string message = "", ResultType resultType = ResultType.Success)
        {
            return new ResponseResult
            {
                CreatedDate = DateTime.Now,
                Message = message,
                ResultType = resultType
            };
        }


        public static ResponseResult Create(Exception error,  string message = "", ResultType resultType = ResultType.Error)
        {
            return new ResponseResult
            {
                CreatedDate = DateTime.Now,
                Message = message,
                Error = error,
                ResultType = resultType
            };
        }
    }

    public enum ResultType
    {
        Error = 0,
        Success = 1
    }
}
