using System;
using System.Collections.Generic;

namespace Web.Entity;

public partial class PoMaster
{
    public int Id { get; set; }

    public string OrderNo { get; set; } = null!;

    public DateTime OrderDttm { get; set; }

    public int VendorId { get; set; }

    public string? Notes { get; set; }

    public double? OrderValue { get; set; }

    public string? OrderStatus { get; set; }

    public virtual ICollection<PoDetail> PoDetails { get; set; } = new List<PoDetail>();

    public virtual VendorMaster Vendor { get; set; } = null!;
}
