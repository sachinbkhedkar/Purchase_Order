using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Web.Models
{
    public class PO_Master
    {
        public int Order_ID { get; set; }
        public string  Order_No { get; set; }
        public DateTime OrderDate { get; set; }=DateTime.Now;
        public string Vendor_No { get; set; }
        [Required(ErrorMessage = "This field is required")]
        public int Vendor_Id { get; set; }
        [Required(ErrorMessage = "This field is required")]
        public string Notes { get; set; }
        public double? Oredervalue { get; set; }
        public string OrderStatus { get; set; }
        public List<PurechaseOrder> materialList { get; set; }
        public PurechaseOrder PurechaseOrder { get; set; }
        [Required(ErrorMessage = "This field is required")]
        // [Remote(action: "ValidateQuntity", controller: "PO", AdditionalFields ="",HttpMethod = "POST", ErrorMessage = "Expected Date not less than current date.")]

        public double Quntity { get; set; }
        [Required(ErrorMessage = "This field is required")]
        public double Rate { get; set; }
        public double Amount { get; set; }
       // [Remote(action: "ValidateDate", controller: "PO", HttpMethod = "POST", ErrorMessage = "Expected Date not less than current date.")]

        public DateTime ExpDate { get; set; }= DateTime.Now;

    }
    public class PurechaseOrder
    {
        public int ID { get; set; }
        public int OrderID { get; set; }
        public string Code { get; set; }
        public List<_MaterialMaster> _MaterialMaster { get; set; }

        public double Quntity { get; set; }
        public double Rate { get; set; }
        public double Amount { get; set; }

        public DateTime ExpDate { get; set; }


    }
}
