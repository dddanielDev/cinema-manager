using System.Text;
using CinemaManager.API.Data;
using CinemaManager.API.Models;
using CinemaManager.API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") // vite port
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
string connectionString = "Host=localhost;Port=5432;Database=cinema_manager_db;Username=admin;Password=pass";
builder.Services.AddDbContext<CinemaDbContext>(options =>
    options.UseNpgsql(connectionString));

// Add JWT Configuration
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"] ?? "cinema-manager-api",
            ValidAudience = builder.Configuration["Jwt:Audience"] ?? "cinema-manager-clients",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                builder.Configuration["Jwt:Key"] ?? "YourSuperSecretKeyHereShouldBeAtLeast32Chars"))
        };
    });

builder.Services.AddAuthorization();

builder.Services.AddScoped<MovieService>();
builder.Services.AddScoped<CinemaHallService>();
builder.Services.AddScoped<ScheduleService>();
builder.Services.AddScoped<AccountsService>();
builder.Services.AddScoped<JwtService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowFrontend");

// Add middleware in the right order (after UseCors and before MapControllers)
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
