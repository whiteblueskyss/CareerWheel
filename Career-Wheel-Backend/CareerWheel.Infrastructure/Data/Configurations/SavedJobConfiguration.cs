using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class SavedJobConfiguration : IEntityTypeConfiguration<SavedJob>
{
    public void Configure(EntityTypeBuilder<SavedJob> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.JobPostId).IsRequired();
        builder.Property(x => x.UserId).IsRequired();
        builder.HasIndex(x => new { x.JobPostId, x.UserId }).IsUnique();
    }
}