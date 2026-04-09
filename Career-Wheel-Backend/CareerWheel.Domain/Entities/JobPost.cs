public class JobPost : BaseEntity
{
    public string Title { get; set; }
    public string Description { get; set; }
    public string CompanyName { get; set; }
    public Guid CreatedByUserId { get; set; }
    public int JobType { get; set; } // 1=Remote, 2=Onsite, 3=Hybrid
    public int MinExperienceYears { get; set; }
    public int MaxExperienceYears { get; set; }
    public string? Location { get; set; }
    public decimal? MinSalary { get; set; }
    public decimal? MaxSalary { get; set; }
    public bool IsActive { get; set; } = true;
    public bool IsFeatured { get; set; } = false;
    public DateTime ExpiryDate { get; set; }

    // Navigation
    public User CreatedByUser { get; set; }
    public ICollection<Application> Applications { get; set; }
    public ICollection<SavedJob> SavedJobs { get; set; }
}