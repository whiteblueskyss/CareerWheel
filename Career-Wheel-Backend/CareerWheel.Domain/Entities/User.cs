using static System.Runtime.InteropServices.JavaScript.JSType;

public class User : BaseEntity
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public UserRole Role { get; set; }

    public Profile Profile { get; set; }
}