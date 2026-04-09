public class User : BaseEntity
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public int Role { get; set; } // 1=JobSeeker, 2=Recruiter
    public int ExperienceYears { get; set; }
    public string? Headline { get; set; }
    public string? ProfileImageUrl { get; set; }
    public string? Location { get; set; }
    public bool OpenToWork { get; set; }

    // Navigation
    public ICollection<Application> Applications { get; set; }
    public ICollection<SavedJob> SavedJobs { get; set; }
}