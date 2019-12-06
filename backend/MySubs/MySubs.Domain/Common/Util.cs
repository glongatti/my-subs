using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace MySubs.Domain.Common
{
    public class Util
    {
        public const string KEY_ENCRYPT = "a6272c9b-eaae-41c0-938b-38dbd18df8a0";
        public const string JWT_KEY = "a29da9ac-882c-4f03-97a8-c36955681ff5";

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

        public static string Encrypt(string toEncrypt)
        {
            Byte[] stringBytes = Encoding.UTF8.GetBytes(toEncrypt);
            StringBuilder sbBytes = new StringBuilder(stringBytes.Length * 2);
            foreach (byte b in stringBytes)
            {
                sbBytes.AppendFormat("{0:X2}", b);
            }
            return sbBytes.ToString();
        }

        public static string DecryptOld(string cipherString)
        {
            byte[] keyArray;

            byte[] toEncryptArray = Convert.FromBase64String(cipherString);

            MD5CryptoServiceProvider hashmd5 = new MD5CryptoServiceProvider();
            keyArray = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(KEY_ENCRYPT));

            hashmd5.Clear();

            TripleDESCryptoServiceProvider tdes = new TripleDESCryptoServiceProvider();

            tdes.Key = keyArray;
            tdes.Mode = CipherMode.ECB;
            tdes.Padding = PaddingMode.PKCS7;

            ICryptoTransform cTransform = tdes.CreateDecryptor();
            byte[] resultArray = cTransform.TransformFinalBlock(
                                 toEncryptArray, 0, toEncryptArray.Length);

            tdes.Clear();

            return UTF8Encoding.UTF8.GetString(resultArray);
        }

        public static long DecryptLong(string id)
        {
            return Convert.ToInt64(Decrypt(id));
        }

        public static string Decrypt(string cipherString)
        {
            int numberChars = cipherString.Length;
            byte[] bytes = new byte[numberChars / 2];
            for (int i = 0; i < numberChars; i += 2)
            {
                bytes[i / 2] = Convert.ToByte(cipherString.Substring(i, 2), 16);
            }
            return Encoding.UTF8.GetString(bytes);
        }

        public static string ConvertStringToHex(string input, Encoding encoding)
        {
            Byte[] stringBytes = encoding.GetBytes(input);
            StringBuilder sbBytes = new StringBuilder(stringBytes.Length * 2);
            foreach (byte b in stringBytes)
            {
                sbBytes.AppendFormat("{0:X2}", b);
            }
            return sbBytes.ToString();
        }

        public static string ConvertHexToString(string hexInput, Encoding encoding)
        {
            int numberChars = hexInput.Length;
            byte[] bytes = new byte[numberChars / 2];
            for (int i = 0; i < numberChars; i += 2)
            {
                bytes[i / 2] = Convert.ToByte(hexInput.Substring(i, 2), 16);
            }
            return encoding.GetString(bytes);
        }

        public static string FormatDateTime(DateTime date)
        {
            return date.ToString("dd/MM/yyyy hh:mm tt");
        }

        public static IEnumerable<DateTime> GetDaysOfWeek()
        {
            var now = Util.DateTimeBrazil();
            var currentDay = now.DayOfWeek;
            int days = (int)currentDay;
            DateTime sunday = now.AddDays(-days);

            return Enumerable.Range(0, 7)
                .Select(d => sunday.AddDays(d))
                .ToList();
        }

        public static string GetDayCultureInfo(DateTime date)
        {
            CultureInfo culture = new CultureInfo("pt-br");
            return culture.DateTimeFormat.DayNames[(int)date.DayOfWeek];
        }

        public static int GetRandomDelayForTasks(int min = 1000, int maxValue = 5000)
        {
            return new Random().Next(min, maxValue);
        }

        public static DateTime DateTimeBrazil()
        {
            #if DEBUG
                DateTime dateTime = DateTime.UtcNow;
                TimeZoneInfo hrBrasilia = TimeZoneInfo.FindSystemTimeZoneById("E. South America Standard Time");
                return TimeZoneInfo.ConvertTimeFromUtc(dateTime, hrBrasilia);
            #else
                var finalResult = ConvertTimeZone(DateTime.UtcNow, "E. South America Standard Time");

                return finalResult;
            #endif
        }

        public static DateTime ConvertTimeZone(DateTime dateTime, string timeInfo)
        {
            var result = OlsonTimeZoneToTimeZoneInfo(timeInfo);
            if (result != null)
            {
                var finalTimeZone = TimeZoneInfo.FindSystemTimeZoneById(result);
                dateTime = (dateTime != null ? TimeZoneInfo.ConvertTimeFromUtc(dateTime != null ? dateTime : DateTime.UtcNow, finalTimeZone) : DateTime.UtcNow);
            }
            return dateTime;
        }

        public static string OlsonTimeZoneToTimeZoneInfo(string timeInfo)
        {
            var olsonWindowsTimes = new Dictionary<string, string>()
        {
            { "Africa/Bangui", "W. Central Africa Standard Time" },
            { "Africa/Cairo", "Egypt Standard Time" },
            { "Africa/Casablanca", "Morocco Standard Time" },
            { "Africa/Harare", "South Africa Standard Time" },
            { "Africa/Johannesburg", "South Africa Standard Time" },
            { "Africa/Lagos", "W. Central Africa Standard Time" },
            { "Africa/Monrovia", "Greenwich Standard Time" },
            { "Africa/Nairobi", "E. Africa Standard Time" },
            { "Africa/Windhoek", "Namibia Standard Time" },
            { "America/Anchorage", "Alaskan Standard Time" },
            { "America/Argentina/San_Juan", "Argentina Standard Time" },
            { "America/Asuncion", "Paraguay Standard Time" },
            { "America/Bahia", "Bahia Standard Time" },
            { "America/Bogota", "SA Pacific Standard Time" },
            { "America/Buenos_Aires", "Argentina Standard Time" },
            { "America/Caracas", "Venezuela Standard Time" },
            { "America/Cayenne", "SA Eastern Standard Time" },
            { "America/Chicago", "Central Standard Time" },
            { "America/Chihuahua", "Mountain Standard Time (Mexico)" },
            { "America/Cuiaba", "Central Brazilian Standard Time" },
            { "America/Denver", "Mountain Standard Time" },
            { "America/Fortaleza", "SA Eastern Standard Time" },
            { "America/Godthab", "Greenland Standard Time" },
            { "America/Guatemala", "Central America Standard Time" },
            { "America/Halifax", "Atlantic Standard Time" },
            { "America/Indianapolis", "US Eastern Standard Time" },
            { "America/Indiana/Indianapolis", "US Eastern Standard Time" },
            { "America/La_Paz", "SA Western Standard Time" },
            { "America/Los_Angeles", "Pacific Standard Time" },
            { "America/Mexico_City", "Mexico Standard Time" },
            { "America/Montevideo", "Montevideo Standard Time" },
            { "America/New_York", "Eastern Standard Time" },
            { "America/Noronha", "UTC-02" },
            { "America/Phoenix", "US Mountain Standard Time" },
            { "America/Regina", "Canada Central Standard Time" },
            { "America/Santa_Isabel", "Pacific Standard Time (Mexico)" },
            { "America/Santiago", "Pacific SA Standard Time" },
            { "America/Sao_Paulo", "E. South America Standard Time" },
            { "America/St_Johns", "Newfoundland Standard Time" },
            { "America/Tijuana", "Pacific Standard Time" },
            { "Antarctica/McMurdo", "New Zealand Standard Time" },
            { "Atlantic/South_Georgia", "UTC-02" },
            { "Asia/Almaty", "Central Asia Standard Time" },
            { "Asia/Amman", "Jordan Standard Time" },
            { "Asia/Baghdad", "Arabic Standard Time" },
            { "Asia/Baku", "Azerbaijan Standard Time" },
            { "Asia/Bangkok", "SE Asia Standard Time" },
            { "Asia/Beirut", "Middle East Standard Time" },
            { "Asia/Calcutta", "India Standard Time" },
            { "Asia/Colombo", "Sri Lanka Standard Time" },
            { "Asia/Damascus", "Syria Standard Time" },
            { "Asia/Dhaka", "Bangladesh Standard Time" },
            { "Asia/Dubai", "Arabian Standard Time" },
            { "Asia/Irkutsk", "North Asia East Standard Time" },
            { "Asia/Jerusalem", "Israel Standard Time" },
            { "Asia/Kabul", "Afghanistan Standard Time" },
            { "Asia/Kamchatka", "Kamchatka Standard Time" },
            { "Asia/Karachi", "Pakistan Standard Time" },
            { "Asia/Katmandu", "Nepal Standard Time" },
            { "Asia/Kolkata", "India Standard Time" },
            { "Asia/Krasnoyarsk", "North Asia Standard Time" },
            { "Asia/Kuala_Lumpur", "Singapore Standard Time" },
            { "Asia/Kuwait", "Arab Standard Time" },
            { "Asia/Magadan", "Magadan Standard Time" },
            { "Asia/Muscat", "Arabian Standard Time" },
            { "Asia/Novosibirsk", "N. Central Asia Standard Time" },
            { "Asia/Oral", "West Asia Standard Time" },
            { "Asia/Rangoon", "Myanmar Standard Time" },
            { "Asia/Riyadh", "Arab Standard Time" },
            { "Asia/Seoul", "Korea Standard Time" },
            { "Asia/Shanghai", "China Standard Time" },
            { "Asia/Singapore", "Singapore Standard Time" },
            { "Asia/Taipei", "Taipei Standard Time" },
            { "Asia/Tashkent", "West Asia Standard Time" },
            { "Asia/Tbilisi", "Georgian Standard Time" },
            { "Asia/Tehran", "Iran Standard Time" },
            { "Asia/Tokyo", "Tokyo Standard Time" },
            { "Asia/Ulaanbaatar", "Ulaanbaatar Standard Time" },
            { "Asia/Vladivostok", "Vladivostok Standard Time" },
            { "Asia/Yakutsk", "Yakutsk Standard Time" },
            { "Asia/Yekaterinburg", "Ekaterinburg Standard Time" },
            { "Asia/Yerevan", "Armenian Standard Time" },
            { "Atlantic/Azores", "Azores Standard Time" },
            { "Atlantic/Cape_Verde", "Cape Verde Standard Time" },
            { "Atlantic/Reykjavik", "Greenwich Standard Time" },
            { "Australia/Adelaide", "Cen. Australia Standard Time" },
            { "Australia/Brisbane", "E. Australia Standard Time" },
            { "Australia/Darwin", "AUS Central Standard Time" },
            { "Australia/Hobart", "Tasmania Standard Time" },
            { "Australia/Perth", "W. Australia Standard Time" },
            { "Australia/Sydney", "AUS Eastern Standard Time" },
            { "Etc/GMT", "UTC" },
            { "Etc/GMT+11", "UTC-11" },
            { "Etc/GMT+12", "Dateline Standard Time" },
            { "Etc/GMT+2", "UTC-02" },
            { "Etc/GMT-12", "UTC+12" },
            { "Europe/Amsterdam", "W. Europe Standard Time" },
            { "Europe/Athens", "GTB Standard Time" },
            { "Europe/Belgrade", "Central Europe Standard Time" },
            { "Europe/Berlin", "W. Europe Standard Time" },
            { "Europe/Brussels", "Romance Standard Time" },
            { "Europe/Budapest", "Central Europe Standard Time" },
            { "Europe/Dublin", "GMT Standard Time" },
            { "Europe/Helsinki", "FLE Standard Time" },
            { "Europe/Istanbul", "GTB Standard Time" },
            { "Europe/Kiev", "FLE Standard Time" },
            { "Europe/London", "GMT Standard Time" },
            { "Europe/Minsk", "E. Europe Standard Time" },
            { "Europe/Moscow", "Russian Standard Time" },
            { "Europe/Paris", "Romance Standard Time" },
            { "Europe/Sarajevo", "Central European Standard Time" },
            { "Europe/Warsaw", "Central European Standard Time" },
            { "Indian/Mauritius", "Mauritius Standard Time" },
            { "Pacific/Apia", "Samoa Standard Time" },
            { "Pacific/Auckland", "New Zealand Standard Time" },
            { "Pacific/Fiji", "Fiji Standard Time" },
            { "Pacific/Guadalcanal", "Central Pacific Standard Time" },
            { "Pacific/Guam", "West Pacific Standard Time" },
            { "Pacific/Honolulu", "Hawaiian Standard Time" },
            { "Pacific/Pago_Pago", "UTC-11" },
            { "Pacific/Port_Moresby", "West Pacific Standard Time" },
            { "Pacific/Tongatapu", "Tonga Standard Time" }
        };

            string timeInfoKey = string.Empty;
            if (olsonWindowsTimes.ContainsValue(timeInfo))
                timeInfoKey = olsonWindowsTimes.FirstOrDefault(x => x.Value == timeInfo).Key;

            return timeInfoKey;
        }

        public static string FormatDateWeekAbbreviate(DateTime date)
        {
            switch (date.Date.DayOfWeek)
            {
                case DayOfWeek.Monday:
                    return "SEG";
                case DayOfWeek.Tuesday:
                    return "TER";
                case DayOfWeek.Wednesday:
                    return "QUART";
                case DayOfWeek.Thursday:
                    return "QUINT";
                case DayOfWeek.Friday:
                    return "SEXT";
                case DayOfWeek.Saturday:
                    return "SAB";
                case DayOfWeek.Sunday:
                    return "DOM";
            }

            return "";
        }

        public static string FormatDateWeek(DateTime date)
        {
            switch (date.Date.DayOfWeek)
            {
                case DayOfWeek.Monday:
                    return "Segunda";
                case DayOfWeek.Tuesday:
                    return "Terça";
                case DayOfWeek.Wednesday:
                    return "Quarta";
                case DayOfWeek.Thursday:
                    return "Quinta";
                case DayOfWeek.Friday:
                    return "Sexta";
                case DayOfWeek.Saturday:
                    return "Sábado";
                case DayOfWeek.Sunday:
                    return "Domingo";
            }

            return "";
        }
    }
}
