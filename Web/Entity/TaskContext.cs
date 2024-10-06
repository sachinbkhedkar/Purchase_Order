using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Web.Entity;

public partial class TaskContext : DbContext
{
    public TaskContext()
    {
    }

    public TaskContext(DbContextOptions<TaskContext> options)
        : base(options)
    {
    }

    public virtual DbSet<MaterialMaster> MaterialMasters { get; set; }

    public virtual DbSet<PoDetail> PoDetails { get; set; }

    public virtual DbSet<PoMaster> PoMasters { get; set; }

    public virtual DbSet<VendorMaster> VendorMasters { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=127.0.0.1,1433;Database=TaskDB;Integrated Security=True;TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MaterialMaster>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Material__3214EC27C4270216");

            entity.ToTable("Material_Master");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Code)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.LongText)
                .HasMaxLength(1000)
                .IsFixedLength();
            entity.Property(e => e.ReorderLevel)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.ShotText)
                .HasMaxLength(500)
                .IsFixedLength();
            entity.Property(e => e.Unit)
                .HasMaxLength(500)
                .IsFixedLength();
        });

        modelBuilder.Entity<PoDetail>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PO_Detai__3214EC2737BB659D");

            entity.ToTable("PO_Details");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.MaterialId).HasColumnName("MaterialID");
            entity.Property(e => e.Notes)
                .HasMaxLength(500)
                .IsFixedLength();
            entity.Property(e => e.OrderId).HasColumnName("OrderID");

            entity.HasOne(d => d.Material).WithMany(p => p.PoDetails)
                .HasForeignKey(d => d.MaterialId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Po_Details_Material");

            entity.HasOne(d => d.Order).WithMany(p => p.PoDetails)
                .HasForeignKey(d => d.OrderId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Po_Master_Details");
        });

        modelBuilder.Entity<PoMaster>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__PO_Maste__3214EC270A97333A");

            entity.ToTable("PO_Master");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Notes)
                .HasMaxLength(500)
                .IsFixedLength();
            entity.Property(e => e.OrderNo)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.OrderStatus)
                .HasMaxLength(20)
                .IsFixedLength();

            entity.HasOne(d => d.Vendor).WithMany(p => p.PoMasters)
                .HasForeignKey(d => d.VendorId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("vendor_po");
        });

        modelBuilder.Entity<VendorMaster>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Vendor_M__3214EC272D386EBF");

            entity.ToTable("Vendor_Master");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.AddressLine1)
                .HasMaxLength(500)
                .IsFixedLength();
            entity.Property(e => e.AddressLine2)
                .HasMaxLength(500)
                .IsFixedLength();
            entity.Property(e => e.Code)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.ContactNo)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsFixedLength();
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsFixedLength();
            entity.Property(e => e.ValidTill).HasColumnType("datetime");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
