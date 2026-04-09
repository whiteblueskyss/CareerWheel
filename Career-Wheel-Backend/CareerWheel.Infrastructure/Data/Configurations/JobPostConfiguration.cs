using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class JobPostConfiguration : IEntityTypeConfiguration<JobPost>
{
    public void Configure(EntityTypeBuilder<JobPost> builder)
    {
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Title).IsRequired().HasMaxLength(150);
        builder.Property(x => x.Description).IsRequired().HasMaxLength(1000);
        builder.Property(x => x.CompanyName).IsRequired().HasMaxLength(150);
        builder.Property(x => x.JobType).IsRequired();
        builder.Property(x => x.MinExperienceYears).IsRequired();
        builder.Property(x => x.Location).HasMaxLength(150);
        builder.Property(x => x.MinSalary).HasColumnType("decimal(18,2)");
        builder.Property(x => x.MaxSalary).HasColumnType("decimal(18,2)");
        builder.Property(x => x.IsActive).IsRequired();
        builder.Property(x => x.IsFeatured).IsRequired();
        builder.Property(x => x.ExpiryDate).IsRequired();
        builder.Property(x => x.CreatedAt).IsRequired();
        builder.Property(x => x.UpdatedAt).IsRequired(false);
    }
}