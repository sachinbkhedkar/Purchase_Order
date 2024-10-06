using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using Web.Entity;
using Web.Models;

namespace Web.Controllers
{
    public class POController : Controller
    {
        TaskContext _dbContext;
        public POController(TaskContext _dbContext)
        {
            this._dbContext = _dbContext;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult GetPOList()
        {
            return Json(_dbContext.PoMasters.Select(x => new PO_Master
            {
                Order_ID = x.Id,
                Order_No = x.OrderNo,
                Oredervalue = x.OrderValue,
                OrderDate = x.OrderDttm,
                OrderStatus = x.OrderStatus,
                materialList = x.PoDetails.Select(y => new PurechaseOrder
                {
                    Amount = y.ItmValue,
                    Code = y.Material.Code,
                    ExpDate = y.ExpectedDttm,
                    Quntity = y.ItmQuntity,
                    Rate=y.ItmRate,

                }).ToList()

            }).ToList());
        }
        public IActionResult GetMaterialList(int ID)
        {
            return Json(_dbContext.PoMasters.Where(x=>x.Id==ID).Select(x => new PO_Master
            {
                Order_ID = x.Id,
                Order_No = x.OrderNo,
                Oredervalue = x.OrderValue,
                OrderDate = x.OrderDttm,
                OrderStatus = x.OrderStatus,
                materialList = x.PoDetails.Select(y => new PurechaseOrder
                {
                    Amount = y.ItmValue,
                    Code = y.Material.Code,
                    ExpDate = y.ExpectedDttm,
                    Quntity = y.ItmQuntity,
                    Rate = y.ItmRate,

                }).ToList()

            }).ToList());

        }
        public IActionResult _AddPO()
        {

            ViewBag.VendorList = _dbContext.VendorMasters.Where(x => x.IsActive == true).Select(x => new _VendorMaster
            {
                Id = x.Id,
                Name = x.Name,
            }).ToList();
            ViewBag.MaterialList = _dbContext.MaterialMasters.Where(x => x.IsActive == true).Select(x => new _MaterialMaster
            {
                Id = x.Id,
                Code = x.Code,
                ShotText = x.ShotText,
                Unit = x.Unit,
                MinOrderQuntity = x.MinOrderQuntity,


            }).ToList();

            var model = new PO_Master();
            var orderNo = _dbContext.PoMasters.OrderByDescending(x => x.Id).FirstOrDefault();
            if (orderNo == null)
            {
                model.Order_No = "OR-0001";

            }
            else
            {
                model.Order_No = "OR-" + (Convert.ToInt32(orderNo.OrderNo.Split("-")[1]) + 1).ToString("D4");
            }


            return PartialView("_AddPO", model);
        }
        public IActionResult ValidateDate(DateTime ExpDate)
        {
            if (ExpDate < DateTime.Now)
            {
                return Json(false);
            }
            return Json(true);
        }
        public IActionResult SavePO(PO_Master model, string MaterialList)
        {
            _dbContext.PoMasters.Add(new PoMaster
            {
                OrderNo = model.Order_No,
                Notes = model.Notes,
                OrderDttm = model.OrderDate,
                OrderValue = model.Oredervalue,
                OrderStatus = "Complete",
                VendorId = model.Vendor_Id,
            });
            _dbContext.SaveChanges();
            var List = JsonSerializer.Deserialize<List<PurechaseOrder>>(MaterialList);
            foreach (var item in List)
            {
                _dbContext.PoDetails.Add(new PoDetail
                {
                    OrderId = _dbContext.PoMasters.FirstOrDefault(x => x.OrderNo == model.Order_No).Id,
                    ItmQuntity = item.Quntity,
                    ItmRate = item.Rate,
                    MaterialId = _dbContext.MaterialMasters.FirstOrDefault(x => x.Code == item.Code).Id,
                    ExpectedDttm = item.ExpDate,
                    ItmValue = item.Amount,
                    Notes = ""
                });

            }

            _dbContext.SaveChanges();
            return RedirectToAction(nameof(Index));
        }
        public ActionResult _EditPopup(int Id)
        {
            var model = new PO_Master();
            model.Order_ID = Id;
            return PartialView("_EditPopUp", model);
        }


    }
}
