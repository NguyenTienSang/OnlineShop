using System;
using System.Security.Cryptography;

namespace OnlineShop.Common
{
    internal class MDscryptoServiceProvider
    {
        public MDscryptoServiceProvider()
        {
        }

        public static implicit operator MD5(MDscryptoServiceProvider v)
        {
            throw new NotImplementedException();
        }
    }
}