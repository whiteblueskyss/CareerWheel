public class SavedJob : BaseEntity
{
    public Guid UserId { get; set; }
    public Guid JobPostId { get; set; }

    // Navigation
    public User User { get; set; }
    public JobPost JobPost { get; set; }
}