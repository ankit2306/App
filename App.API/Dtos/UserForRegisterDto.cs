using System.ComponentModel.DataAnnotations;

namespace App.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "Username is mandatory.")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is mandatory.")]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Min character required is 4 and Max characters required is 8.")]
        public string Password { get; set; }
    }
}