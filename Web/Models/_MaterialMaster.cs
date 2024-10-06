using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Web.Models
{
    public class _MaterialMaster
    {
        public int Id { get; set; }


        [Required(ErrorMessage = "This field is required")]
        [StringLength(500, ErrorMessage = "This field must be between 1 to 500 characters long", MinimumLength = 1)]
        [RegularExpression(@"^([a-zA-Z0-9].*){0,500}$", ErrorMessage = "This field should start with alphanumeric characters and maximum 500 characters long")]

        public string Code { get; set; } 


        [Required(ErrorMessage = "This field is required")]
        [StringLength(500, ErrorMessage = "This field must be between 1 to 500 characters long", MinimumLength = 1)]
        [RegularExpression(@"^([a-zA-Z0-9].*){0,500}$", ErrorMessage = "This field should start with alphanumeric characters and maximum 500 characters long")]

        public string ShotText { get; set; }

        [RegularExpression(@"^([a-zA-Z0-9].*){0,500}$", ErrorMessage = "This field should start with alphanumeric characters and maximum 500 characters long")]

        public string LongText { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [StringLength(500, ErrorMessage = "This field must be between 1 to 500 characters long", MinimumLength = 1)]
        [RegularExpression(@"^([a-zA-Z0-9].*){0,500}$", ErrorMessage = "This field should start with alphanumeric characters and maximum 500 characters long")]

        public string? Unit { get; set; }


        [Required(ErrorMessage = "This field is required")]
        [StringLength(500, ErrorMessage = "This field must be between 1 to 500 characters long", MinimumLength = 1)]
        [RegularExpression(@"^([a-zA-Z0-9].*){0,500}$", ErrorMessage = "This field should start with alphanumeric characters and maximum 500 characters long")]

        public string? ReorderLevel { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Minimum Order Quantity must be greater than 0.")]
        [Required(ErrorMessage = "This field is required")]
        public int? MinOrderQuntity { get; set; }

        public bool IsActive { get; set; }
    }
}
