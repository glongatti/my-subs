﻿using Microsoft.IdentityModel.Tokens;
using MySubs.Domain.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace MySubs.Domain.Common
{
    public class Util
    {
        public const string KEY_ENCRYPT = "a6272c9b-eaae-41c0-938b-38dbd18df8a0";
        public const string JWT_KEY = "a29da9ac-882c-4f03-97a8-c36955681ff5";
        private static int TempoExpiracaoToken = 20;
        public static string Hash(string senha)
        {
            byte[] val = Encoding.UTF8.GetBytes(senha);

            using (SHA1Managed sha1 = new SHA1Managed())
            {
                var hash = sha1.ComputeHash(val);
                return Convert.ToBase64String(hash);
            }
        }

        public static string GeneratePassword()
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            var result = new string(
                Enumerable.Repeat(chars, 10)
                          .Select(s => s[random.Next(s.Length)])
                          .ToArray());
            return result;
        }
        public static string GerarToken(User usuario, DateTime dataToken, byte[] key)
        {
            var claims = new[]
            {
                new Claim("id", usuario.Id.ToString()), // Aqui é adicionado o id do usuário
                new Claim("email", usuario.Email), // Aqui é adicionado o id do usuário
                new Claim("dataCriacaoToken", DateTime.Now.ToString()), // Aqui é adicionado o id do usuário
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var securityKey = new SymmetricSecurityKey(key);
            var credential = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken
            (
                claims: claims,
                signingCredentials: credential,
                expires: DateTime.Now.AddDays(7)
                //expires: DateTime.Now.AddMinutes(TempoExpiracaoToken)
                //issuer: _config["Authentication:Issuer"],
                //audience: _config["Authentication:Audience"]
            );

            var jwtToken = new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                expiration = token.ValidTo
            };

            return jwtToken.token;

        }

        public static bool ValidarData(bool obrigatorio, string nomeCampo, string valorCampo, ref DateTime dataValidada, ref string erro)
        {
            if (String.IsNullOrEmpty(valorCampo) && obrigatorio)
            {
                erro = String.Concat("O Campo ", nomeCampo, " é obrigatório. ");
                return false;
            }

            else
            {
                DateTime data;
                DateTime dt = DateTime.ParseExact(valorCampo, "dd/MM/yyyy", CultureInfo.InvariantCulture);
                //Console.WriteLine(dt.ToString("yyyy-MM-dd"));
                valorCampo = dt.ToString("yyyy-MM-dd");
                if (!DateTime.TryParse(valorCampo, out data))
                {

                    erro = String.Concat("O Campo ", valorCampo, " não é uma data válida. ");

                    return false;
                }
                string dataString = data.ToString("yyyy-MM-dd");
                dataValidada = DateTime.Parse(dataString);
                return true;
            }
        }
    }
}
