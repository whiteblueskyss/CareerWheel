using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class UserSkillConfiguration : IEntityTypeConfiguration<UserSkill>
{
    public void Configure(EntityTypeBuilder<UserSkill> builder)
    {
       builder.HasKey(x => x.Id);
        builder.HasIndex(x => new { x.UserId, x.SkillId }).IsUnique();
    }
}