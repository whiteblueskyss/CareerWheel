public class Application : BaseEntity
{
    public Guid JobId { get; set; }
    public Job Job { get; set; }

    public Guid UserId { get; set; }
    public User User { get; set; }

    public string CvUrl { get; set; }
    public string Status { get; set; }
}