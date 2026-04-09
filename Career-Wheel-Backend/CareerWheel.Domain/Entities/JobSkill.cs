public class JobSkill : BaseEntity
{
    public Guid JobPostId { get; set; }
    public Guid SkillId { get; set; }
    public JobPost JobPost { get; set; }
    public Skill Skill { get; set; }
}