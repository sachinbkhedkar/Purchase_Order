using System;
using System.Collections.Generic;

namespace Web.Entity;

public partial class PoDetail
{
    public int Id { get; set; }

    public int OrderId { get; set; }

    public int MaterialId { get; set; }

    public double ItmQuntity { get; set; }

    public double ItmRate { get; set; }

    public double ItmValue { get; set; }

    public string? Notes { get; set; }

    public DateTime ExpectedDttm { get; set; }

    public virtual MaterialMaster Material { get; set; } = null!;

    public virtual PoMaster Order { get; set; } = null!;
}
