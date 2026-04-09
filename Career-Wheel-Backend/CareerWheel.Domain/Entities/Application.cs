public class Application : BaseEntity
{
    public Guid JobPostId { get; set; }
    public Guid UserId { get; set; }
    public string CVUrl { get; set; }
    public string? CoverLetter { get; set; }
    public int Status { get; set; }
    
    // Navigation
    public User User { get; set; }
    public JobPost JobPost { get; set; }
}