using System;
using System.Collections.Generic;

namespace Web.Entity;

public partial class MaterialMaster
{
    public int Id { get; set; }

    public string Code { get; set; } = null!;

    public string ShotText { get; set; } = null!;

    public string LongText { get; set; } = null!;

    public string? Unit { get; set; }

    public string? ReorderLevel { get; set; }

    public int? MinOrderQuntity { get; set; }

    public bool IsActive { get; set; }

    public virtual ICollection<PoDetail> PoDetails { get; set; } = new List<PoDetail>();
}
