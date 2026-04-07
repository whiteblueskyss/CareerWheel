using CareerWheel.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Add Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || app.Environment.IsEnvironment("Stage"))
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// Add a test endpoint for the database connection
app.MapGet("/api/test-db", async (ApplicationDbContext dbContext) =>
{
    try
    {
        var canConnect = await dbContext.Database.CanConnectAsync();
        if (canConnect)
            return Results.Ok("Successfully connected to PostgreSQL database!");

        return Results.Problem("Could not connect to the database. Check your connection string and ensure PostgreSQL is running.");
    }
    catch (Exception ex)
    {
        return Results.Problem($"Connection failed: {ex.Message}");
    }
})
.WithTags("HealthCheck");

// Log application startup details
app.Lifetime.ApplicationStarted.Register(() =>
{
    Console.WriteLine("======================================================================");
    Console.WriteLine($"   Project:     {app.Environment.ApplicationName}");
    Console.WriteLine($"   Environment: {app.Environment.EnvironmentName}");

    var urls = app.Urls.Any() ? string.Join(", ", app.Urls) : "Managed by IIS/VS";
    Console.WriteLine($"   Listening on: {urls}");

    if (app.Environment.IsDevelopment() || app.Environment.IsEnvironment("Stage"))
    {
        var swaggerUrls = app.Urls.Any() 
            ? string.Join(", ", app.Urls.Select(u => $"{u}/swagger")) 
            : "[Host]/swagger";
        Console.WriteLine($"   Swagger UI:  {swaggerUrls}");
    }
    Console.WriteLine("======================================================================");
});

app.Run();
