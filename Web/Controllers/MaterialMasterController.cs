using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Web.Entity;
using Web.Models;

namespace Web.Controllers
{
    public class MaterialMasterController : Controller
    {
        TaskContext _dbcontext;

        public MaterialMasterController(TaskContext _dbcontext)
        {
            this._dbcontext = _dbcontext;
        }
        // GET: VendorController
        public ActionResult Index()
        {
            return View();
        }
        public IActionResult GetMaterialList()
        {
            return Json(_dbcontext.MaterialMasters.Select(model => new _MaterialMaster
            {
                Id = model.Id,
                Code = model.Code,
                IsActive = model.IsActive,
                LongText = model.LongText,
                MinOrderQuntity = model.MinOrderQuntity,
                ReorderLevel = model.ReorderLevel,
                ShotText = model.ShotText,
                Unit = model.Unit,

            }).ToList());


        }


        public IActionResult _AddMaterial()
        {
            var model = new _MaterialMaster();
           var code= _dbcontext.MaterialMasters.OrderByDescending(x => x.Code).FirstOrDefault()?.Code;
            if (code == null)
            {
                code = "0001";
            }
            else
            {
                code = (Convert.ToInt32(code) + 1).ToString("D4");

            }
            model.Code = code;
            model.IsActive = true;
            return PartialView("_AddMaterialMaster", model);
        }
        // POST: VendorController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(_MaterialMaster model)
        {
            if (ModelState.IsValid)
            {
                _dbcontext.MaterialMasters.Add(new MaterialMaster
                {
                    Id = model.Id,
                    Code = model.Code,
                    IsActive = model.IsActive,
                    LongText = model.LongText,
                    MinOrderQuntity = model.MinOrderQuntity,
                    ReorderLevel = model.ReorderLevel,
                    ShotText = model.ShotText,
                    Unit=model.Unit,
                    
                

                });
                _dbcontext.SaveChanges();

            }
            return RedirectToAction(nameof(Index));
        }


        public ActionResult _EditPopup(int Id)
        {
            var model = _dbcontext.MaterialMasters.Where(x => x.Id == Id).Select(model => new _MaterialMaster
            {
                Id = model.Id,
                Code = model.Code,
                IsActive = model.IsActive,
                LongText = model.LongText,
                MinOrderQuntity = model.MinOrderQuntity,
                ReorderLevel = model.ReorderLevel,
                ShotText = model.ShotText,
                Unit = model.Unit,


            }).FirstOrDefault();
            return PartialView("_EditPopUp", model);
        }

        // POST: VendorController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(_MaterialMaster model)
        {
            try
            {
                var models = _dbcontext.MaterialMasters.Where(x => x.Id == model.Id).FirstOrDefault();
                models.Id = model.Id;
                models.Code = model.Code;
                models.IsActive = model.IsActive;
                models.LongText = model.LongText;
                models.MinOrderQuntity = model.MinOrderQuntity;
                models.ReorderLevel = model.ReorderLevel;
                models.ShotText = model.ShotText;
                models.Unit = model.Unit;

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
            var model = _dbcontext.MaterialMasters.FirstOrDefault(x => x.Id == Id);
            _dbcontext.Remove(model);
            _dbcontext.SaveChanges();
            return Json(true);


        }
    }
}
