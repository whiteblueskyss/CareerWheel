using System.ComponentModel.DataAnnotations;

public class Profile
{
    [Key]
    public Guid UserId { get; set; }
    public string Headline { get; set; }
    public ExperienceLevel ExperienceLevel { get; set; }
    public bool OpenToWork { get; set; }

    public ICollection<string> Skills { get; set; } = new List<string>();
}