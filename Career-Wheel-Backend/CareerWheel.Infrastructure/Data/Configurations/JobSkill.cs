using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class JobSkillConfiguration : IEntityTypeConfiguration<JobSkill>
{
    public void Configure(EntityTypeBuilder<JobSkill> builder)
    {
        builder.HasKey(x => x.Id);
        builder.HasIndex(x => new { x.JobPostId, x.SkillId }).IsUnique();
    }
}