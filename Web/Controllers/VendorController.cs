
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Numerics;
using System.Runtime.CompilerServices;
using Web.Entity;
using Web.Models;

namespace Web.Controllers
{
    public class VendorController : Controller
    {
        TaskContext _dbcontext;

        public VendorController(TaskContext _dbcontext)
        {
            this._dbcontext = _dbcontext;
        }
        // GET: VendorController
        public ActionResult Index()
        {
            return View();
        }
        public IActionResult GetVendorList()
        {
            return Json(_dbcontext.VendorMasters.Select(x=>new _VendorMaster
            {
               Id = x.Id,
               Name = x.Name,
               AddressLine1 = x.AddressLine1,
               AddressLine2 =x.AddressLine2,
               Code = x.Code,
               Email = x.Email,
               IsActive = x.IsActive,
               Phone = x.ContactNo,
               Valid= x.ValidTill



            }).ToList());
        }

    
        public IActionResult _AddVendor()
        {
            var model = new _VendorMaster();
            var code=_dbcontext.VendorMasters.OrderByDescending(x => x.Code).FirstOrDefault()?.Code;
            if (code == null)
                code = "0001";
            else
            {
                code=(Convert.ToInt32(code)+1).ToString("D4");
            }
            model.Code = code;
            model.IsActive = true;
            return PartialView("_AddVendor",model);
        }
        // POST: VendorController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(_VendorMaster model)
        {
            if (ModelState.IsValid)
            {
                _dbcontext.VendorMasters.Add(new Entity.VendorMaster
                {
                    Id = model.Id,
                    Name = model.Name,
                    AddressLine1 = model.AddressLine1,
                    AddressLine2 = model.AddressLine2,
                    Code = model.Code,
                    Email = model.Email,
                    IsActive = model.IsActive,
                    ContactNo = model.Phone, 
                    ValidTill = model.Valid 

                });
                _dbcontext.SaveChanges();

            }
            return RedirectToAction(nameof(Index));
        }


        public ActionResult _EditPopup(int Id)
        {
            var model = _dbcontext.VendorMasters.Where(x=>x.Id==Id).Select(x => new _VendorMaster
            {
                Id = x.Id,
                Name = x.Name,
                AddressLine1 = x.AddressLine1,
                AddressLine2 = x.AddressLine2,
                Code = x.Code,
                Email = x.Email,
                IsActive = x.IsActive,
                Phone = x.ContactNo,
                Valid = x.ValidTill


            }).FirstOrDefault();
            return PartialView("_EditPopUp", model);
        }

        // POST: VendorController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(_VendorMaster model)
        {
            try
            {
                var models = _dbcontext.VendorMasters.Where(x=>x.Id== model.Id).FirstOrDefault();
                models.Name = model.Name;
                models.AddressLine1 = model.AddressLine1;
                models.AddressLine2 = model.AddressLine2;
                models.Code = model.Code;
                models.Email = model.Email;
                models.IsActive = model.IsActive;
                models.ContactNo = model.Phone;
                models.ValidTill = model.Valid;
                _dbcontext.Update(models);
                _dbcontext.SaveChanges();
                    
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: VendorController/Delete/5
        [HttpPost]
        public IActionResult Delete(int Id)
        {
                var model = _dbcontext.VendorMasters.FirstOrDefault(x => x.Id == Id);
                _dbcontext.Remove(model);
                _dbcontext.SaveChanges();
                return Json(true);

         
        }

      
    }
}
