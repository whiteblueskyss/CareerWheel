public class Skill : BaseEntity
{
    public string Name { get; set; }

    public ICollection<UserSkill> UserSkills { get; set; }
    public ICollection<JobSkill> JobSkills { get; set; }
}