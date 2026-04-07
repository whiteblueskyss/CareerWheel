public class Job : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }

    public ExperienceLevel ExperienceLevel { get; set; }

    public Guid CreatedById { get; set; }
    public User CreatedBy { get; set; }

    public bool IsActive { get; set; }
}