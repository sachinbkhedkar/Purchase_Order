using System;
using System.Collections.Generic;

namespace Web.Entity;

public partial class VendorMaster
{
    public int Id { get; set; }

    public string Code { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string AddressLine1 { get; set; } = null!;

    public string? AddressLine2 { get; set; }

    public string? Email { get; set; }

    public string? ContactNo { get; set; }

    public DateTime? ValidTill { get; set; }

    public bool IsActive { get; set; }

    public virtual ICollection<PoMaster> PoMasters { get; set; } = new List<PoMaster>();
}
