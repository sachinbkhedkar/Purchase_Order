using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Web.Models
{
    public class _VendorMaster
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [StringLength(500, ErrorMessage = "This field must be between 1 to 500 characters long", MinimumLength = 1)]
        [RegularExpression(@"^([a-zA-Z0-9].*){0,500}$", ErrorMessage = "This field should start with alphanumeric characters and maximum 500 characters long")]

        public string Name { get; set; }

        [Required(ErrorMessage = "Code is required.")]
        public string Code { get; set; }

        [Required(ErrorMessage = "This field is required")]
        [StringLength(500, ErrorMessage = "This field must be between 1 to 500 characters long", MinimumLength = 1)]
        [RegularExpression(@"^([a-zA-Z0-9].*){0,500}$", ErrorMessage = "This field should start with alphanumeric characters and maximum 500 characters long")]

        public string AddressLine1 { get; set; }

        public string AddressLine2 { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Phone is required.")]
        [Phone(ErrorMessage = "Invalid phone number format.")]
        public string Phone { get; set; }

        public DateTime? Valid { get; set; } = DateTime.Now;

        public bool IsActive { get; set; }
    }
}
